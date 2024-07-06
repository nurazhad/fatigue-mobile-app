import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsHorizontalScrollIndicator={false}
      style={{ paddingHorizontal: 4, backgroundColor: "#FFF" }}
    >
      <View style={styles.welcomeContainer}>
        <Text style={styles.heading}>FATIGUE TEST</Text>
        <Text style={styles.desc}>
          Ketahui tingkat kelelahan anda dengan menjawab pertanyaan berikut
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../../../assets/images/home.png")}
          style={{ width: 300, height: 250 }}
        />
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("questions" as never)}
          activeOpacity={0.8}
          style={styles.btnStart}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Mulai Test</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  welcomeContainer: {
    width: "100%",
    marginBottom: 100,
    marginTop: 20,
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
    marginTop: 100,
    marginBottom: 10,
  },
});
