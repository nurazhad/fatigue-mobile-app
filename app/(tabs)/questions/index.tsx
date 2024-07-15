import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Option from "../../../components/Option";
import { useEffect, useState } from "react";
import { questionsData } from "../../questions";
import Results from "../../../components/Results";

export default function App() {
  const [questions, setQuestions] = useState<any>([]);
  const [questionNum, setQuestionNum] = useState<any>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [checkIfSelected, setCheckIfSelected] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });
  const [percentageComplete, setPercentageComplete] = useState(0);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  let currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    // let percentage = (((currentQuestionIndex + 1) / questions?.length) * 100);
    let percentage = currentQuestionIndex * 10;

    setPercentageComplete(percentage);
  }, [currentQuestionIndex]);

  // const handlePrev = () => {
  //   setCurrentQuestionIndex((prevQuestion) => prevQuestion - 1);
  //   setScore((currentScore) => currentScore - prevAnswer);
  //   setPrevAnswer;
  // };
  const handleStay = () => {
    alert("PILIH SALAH SATU")
  }
  const handleNext = () => {
    if(currentQuestion?.questionNum === "4" || currentQuestion?.questionNum === "10"){
      if (selectedOption === "Tidak Pernah") {
        setScore((currentScore) => currentScore + 5);
      } else if (selectedOption === "Kadang-Kadang") {
        setScore((currentScore) => currentScore + 4);
      } else if (selectedOption === "Dirasakan Secara Teratur") {
        setScore((currentScore) => currentScore + 3);
      } else if (selectedOption === "Sering Dialami") {
        setScore((currentScore) => currentScore + 2);
      } else if (selectedOption === "Selalu Dialami") {
        setScore((currentScore) => currentScore + 1);
      } else {
        setScore((currentScore) => currentScore + 0);
      }
    }else{
      if (selectedOption === "Tidak Pernah") {
        setScore((currentScore) => currentScore + 1);
      } else if (selectedOption === "Kadang-Kadang") {
        setScore((currentScore) => currentScore + 2);
      } else if (selectedOption === "Dirasakan Secara Teratur") {
        setScore((currentScore) => currentScore + 3);
      } else if (selectedOption === "Sering Dialami") {
        setScore((currentScore) => currentScore + 4);
      } else if (selectedOption === "Selalu Dialami") {
        setScore((currentScore) => currentScore + 5);
      } else {
        setScore((currentScore) => currentScore + 0);
      }
    }

    if (currentQuestionIndex < questions?.length - 1) {
      setCurrentQuestionIndex((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
    }

    setCheckIfSelected({
      option1: false,
      option2: false,
      option3: false,
      option4: false,
      option5: false,
    });
  };

  const checkOptionOne = () => {
    setCheckIfSelected({
      option1: true,
      option2: false,
      option3: false,
      option4: false,
      option5: false,
    });
  };

  const checkOptionTwo = () => {
    setCheckIfSelected({
      option1: false,
      option2: true,
      option3: false,
      option4: false,
      option5: false,
    });
  };

  const checkOptionThree = () => {
    setCheckIfSelected({
      option1: false,
      option2: false,
      option3: true,
      option4: false,
      option5: false,
    });
  };

  const checkOptionFour = () => {
    setCheckIfSelected({
      option1: false,
      option2: false,
      option3: false,
      option4: true,
      option5: false,
    });
  };
  const checkOptionFive = () => {
    setCheckIfSelected({
      option1: false,
      option2: false,
      option3: false,
      option4: false,
      option5: true,
    });
  };

  const restart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResult(false);
  };
  if (showResult)
    return <Results restart={restart} score={score} fatigue0="TIDAK ADA" fatigue1="KELELAHAN" />;

  return (
      <ScrollView showsHorizontalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic"
      style={{ paddingHorizontal: 4, backgroundColor : "#FFF" }}>
        {/* <View style={styles.countwrapper} >
          <Text style={{fontWeight: "600"}} >{currentQuestion?.questionNum}/{score}</Text>
        </View> */}

        <View style={styles.questionwrapper}>
          <View style={styles.progresswrapper}>
            <View
              style={[styles.progressBar, { width: `${percentageComplete}%` }]}
            ></View>
            <View style={styles.progresscount}>
              <Text style={styles.percentage}>{percentageComplete}%</Text>
            </View>
          </View>

          <Text style={{ fontWeight: "500",fontFamily : 'Roboto-Light', textAlign: "center" }}>
           "{currentQuestion?.question}"
          </Text>
        </View>
        <View style={styles.optionswrapper}>
          <Option
            setSelectedOption={setSelectedOption}
            checkIfSelected={checkOptionOne}
            isSelected={checkIfSelected.option1}
            option={currentQuestion?.options[0]}
          />
          <Option
            setSelectedOption={setSelectedOption}
            checkIfSelected={checkOptionTwo}
            isSelected={checkIfSelected.option2}
            option={currentQuestion?.options[1]}
          />
          <Option
            setSelectedOption={setSelectedOption}
            checkIfSelected={checkOptionThree}
            isSelected={checkIfSelected.option3}
            option={currentQuestion?.options[2]}
          />
          <Option
            setSelectedOption={setSelectedOption}
            checkIfSelected={checkOptionFour}
            isSelected={checkIfSelected.option4}
            option={currentQuestion?.options[3]}
          />
          <Option
            setSelectedOption={setSelectedOption}
            checkIfSelected={checkOptionFive}
            isSelected={checkIfSelected.option5}
            option={currentQuestion?.options[4]}
          />
        </View>
        <View style={{ height: 200 }}>
          <TouchableOpacity
            onPress={handleNext}
            activeOpacity={0.8}
            style={styles.btn}
          >
            <Text style={{ color: "white", fontFamily : 'Roboto-Bold', fontWeight: "500" }}>
              Berikutnya
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={handlePrev} activeOpacity={.8} style={styles.btn} >
          <Text style={{color:"white", fontWeight: "600"}} >Back</Text>
        </TouchableOpacity> */}
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  countwrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  questionwrapper: {
    marginTop: 60,
    width: "100%",
    height: 150,
    borderRadius: 16,
    backgroundColor: "#fff",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    alignItems: "center",
  },
  progresswrapper: {
    width: 70,
    height: 70,
    backgroundColor: "#F87788",
    borderRadius: 50,
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    marginBottom: 30,
    marginTop: -50,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#BB0A21",
    alignSelf: "flex-end",
  },
  progresscount: {
    height: 58,
    width: 58,
    borderRadius: 50,
    backgroundColor: "#fff",
    zIndex: 10,
    position: "absolute",
    top: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  percentage: {
    fontWeight: "600",
    fontSize: 18,
    color: "#BB0A21",
  },
  optionswrapper: {
    paddingTop: 16,
    paddingBottom: 16,
    width: "100%",
  },
  btn: {
    width: "100%",
    height: 50,
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: "#BB0A21",
    justifyContent: "center",
    alignItems: "center",
    position : 'absolute',
    top : 0
  },
});
