import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.welcomeContainer}>
            <Text style={styles.heading}>FATIGUE TEST</Text>
            <Text style={styles.desc}>
              Ketahui tingkat kelelahan anda dengan menjawab pertanyaan berikut
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("./../../assets/images/home.png")}
              style={{ width: 390, height: 316 }}
            />
          </View>
          <View style={styles.bottomView}>
          <TouchableOpacity onPress={() => navigation.navigate('question' as never)} activeOpacity={0.8} style={styles.btnStart}>
            <Text style={{ color: "white", fontWeight: "600" }}>
              Mulai Test
            </Text>
          </TouchableOpacity>
          </View>
            
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFF3",
    padding: 30,
    justifyContent: "space-evenly", 
  },
  welcomeContainer: {
    backgroundColor: "#FFFFF3",
    width: "100%",
    marginBottom :100
  },
  heading: {
    fontSize: 40,
    color: "#BB0A21",
    fontWeight: 600,
  },
  desc: {
    fontSize: 12,
    color: "#BB0A21",
  },
  imageContainer: {
    alignItems: "center",
  },
  btnStart: {
    width: "100%",
    height: 50,
    borderRadius: 16,
    backgroundColor: "#BB0A21",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    width: "100%",
    alignItems: "center",
    marginTop :100
  },
});
