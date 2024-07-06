import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Results = ({
  score,
  fatigue,
  restart,
}: {
  score: number;
  fatigue: string;
  restart: () => void;
}) => {
  if (score >= 20) {
    fatigue = "TINGGI";
  } else if (score >= 10) {
    fatigue = "SEDANG";
  } else {
    fatigue = "RENDAH";
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{ marginVertical: 20, fontWeight: "500" }}>
          Tingkat Kelelahan Anda Adalah ... {score}
        </Text>
        <Text style={{ fontWeight: "700", fontSize: 50, color: "#BB0A21" }}>
          {fatigue}
        </Text>
        <TouchableOpacity
          onPress={restart}
          activeOpacity={0.8}
          style={styles.btn}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Ulangi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  wrapper: {
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderColor :"#BB0A21",
    borderWidth : 1
  },
  btn: {
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BB0A21",
    marginTop: 20,
  },
});
