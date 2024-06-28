import { Image, StyleSheet, Platform, View , TouchableOpacity, Text} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView, } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
        <Text style={styles.heading} >FATIGUE TEST</Text>
        <Text style={styles.desc} >KETAHUI TINGKAT KELELAHAN ANDA DENGAN MENJAWAB BEBERAPA PERTANYAAN BERIKUT</Text>
        </View>
        <TouchableOpacity  activeOpacity={.8} style={styles.btnStart} >
          <Text style={{color:"white", fontWeight: "600"}} >Mulai Test</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4e4',
    padding: 20,
    alignItems: 'center',
    justifyContent:'space-between',
    marginBottom : 40
  },
  welcomeContainer:{
    backgroundColor : '#35374B',
    width:"100%",
    height: 200,
    borderRadius : 25,
    borderTopLeftRadius : 0,
    borderTopRightRadius : 0,
    marginBottom:200
  },
  heading:{
    fontSize : 40,
    color : 'white',
    fontWeight : 600,
    marginLeft : 20,
    marginTop : 20
  },
  desc:{
    fontSize : 14,
    color : 'white',
    marginLeft : 20,
    marginRight : 20,
    marginTop:10,
    justifyContent : 'flex-start'
  },
  btnStart:{
    width: '100%',
    height: 50,
    borderRadius: 16,
    backgroundColor: "#35374B",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    position : 'absolute',
    bottom :0,
  },
  bottomView: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, 
    justifyContent: 'flex-end',
    padding:20
  },
});
