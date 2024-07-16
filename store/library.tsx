import library from '@/assets/data/library.json'
import { unknownTrackImageUri } from '@/constants/image'
import { Artist, Playlist, TrackWithPlaylist } from '@/helpers/types'
import { Track } from 'react-native-track-player'
import { create } from 'zustand'

interface LibraryState {
	audio: TrackWithPlaylist[]
	toggleAudioFavorite: (audio: Track) => void
	addToPlaylist: (audio: Track, playlistName: string) => void
}

export const useLibraryStore = create<LibraryState>()((set) => ({
	audio: library,
	toggleAudioFavorite: (audio) =>
		set((state) => ({
			audio: state.audio.map((currentAudio) => {
				if (currentAudio.url === audio.url) {
					return {
						...currentAudio,
						rating: currentAudio.rating === 1 ? 0 : 1,
					}
				}

				return currentAudio
			}),
		})),
	addToPlaylist: (audio, playlistName) =>
		set((state) => ({
			audio: state.audio.map((currentAudio) => {
				if (currentAudio.url === audio.url) {
					return {
						...currentAudio,
						playlist: [...(currentAudio.playlist ?? []), playlistName],
					}
				}

				return currentAudio
			}),
		})),
}))

export const useAudio = () => useLibraryStore((state) => state.audio)

export const useFavorites = () => {
	const favorites = useLibraryStore((state) => state.audio.filter((audio) => audio.rating === 1))
	const toggleAudioFavorite = useLibraryStore((state) => state.toggleAudioFavorite)

	return {
		favorites,
		toggleAudioFavorite,
	}
}

export const useArtists = () =>
	useLibraryStore((state) => {
		return state.audio.reduce((acc, audio) => {
			const existingArtist = acc.find((artist) => artist.name === audio.artist)

			if (existingArtist) {
				existingArtist.tracks.push(audio)
			} else {
				acc.push({
					name: audio.artist ?? 'Unknown',
					tracks: [audio],
				})
			}

			return acc
		}, [] as Artist[])
	})

export const usePlaylists = () => {
	const playlists = useLibraryStore((state) => {
		return state.audio.reduce((acc, audio) => {
			audio.playlist?.forEach((playlistName) => {
				const existingPlaylist = acc.find((playlist) => playlist.name === playlistName)

				if (existingPlaylist) {
					existingPlaylist.tracks.push(audio)
				} else {
					acc.push({
						name: playlistName,
						tracks: [audio],
						artworkPreview: audio.artwork ?? unknownTrackImageUri,
					})
				}
			})

			return acc
		}, [] as Playlist[])
	})

	const addToPlaylist = useLibraryStore((state) => state.addToPlaylist)

	return { playlists, addToPlaylist }
}