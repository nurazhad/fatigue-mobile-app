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
    fatigue0 = "Anda tidak mengalami kelelahan";
  } else if (score <= 50) {
    fatigue0 = "Anda Mengalami Kelelahan dengan skor" + {score}+" dari skor maksimal 50. Lakukan terapi mandiri untuk mengurangi fatigue yang anda rasakan. #Pilih video jika anda membutuhkan contoh terapi seft dan benson. #Pilih audio jika anda hanya ingin mendapat panduan suara terapi SEFT-Benson";
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{ fontFamily : 'Roboto-Light', marginVertical: 20, fontWeight: "500" }}>
          {fatigue0}
          {/* {score} */}
        </Text>
        <TouchableOpacity
          onPress={restart}
          activeOpacity={0.8}
          style={styles.btn}
        >
          <Text style={{ fontFamily : 'Roboto-Light', color: "white", fontWeight: "600" }}>Ulangi</Text>
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
