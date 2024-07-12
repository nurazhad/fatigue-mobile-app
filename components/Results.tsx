import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Results = ({
  score,
  fatigue0,
  fatigue1,
  restart,
}: {
  score: number;
  fatigue0: string;
  fatigue1: string;
  restart: () => void;
}) => {
  if (score <= 21) {
    fatigue0 = "TIDAK ADA";
    fatigue1 = "KELELAHAN";
  } else if (score <= 50) {
    fatigue0 = "ADA";
    fatigue1 = "KELELAHAN";
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{ marginVertical: 20, fontWeight: "500" }}>
          Hasil test anda menunjukan 
          {/* {score} */}
        </Text>
        <Text style={{ fontWeight: "800", fontSize: 25, color: "#BB0A21" }}>
          {fatigue0}
        </Text>
        
        <Text style={{ fontWeight: "800", fontSize: 25, color: "#BB0A21" }}>
          {fatigue1}
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
    height: 400,
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
