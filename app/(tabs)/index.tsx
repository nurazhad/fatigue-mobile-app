import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
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
              style={{ width: 300, height: 300 }}
            />
          </View>
          <View style={styles.bottomView}>
            <TouchableOpacity activeOpacity={0.8} style={styles.btnStart}>
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
    backgroundColor: "#FCFAFA",
    padding: 20,
    bottom : 50
  },
  welcomeContainer: {
    backgroundColor: "#FCFAFA",
    width: "100%",
    height: 120,
    borderRadius: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: 60,
  },
  heading: {
    fontSize: 40,
    color: "#35374B",
    fontWeight: 600,
    marginLeft: 20,
    marginTop: 20,
  },
  desc: {
    fontSize: 12,
    color: "#35374B",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    justifyContent: "flex-start",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 200,
  },
  btnStart: {
    width: "100%",
    height: 50,
    borderRadius: 16,
    backgroundColor: "#35374B",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    width: "100%",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 0,
    justifyContent: "flex-end",
  },
});
