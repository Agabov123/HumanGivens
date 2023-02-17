import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles";
import { ButtonStyles } from "../components/WelcomePage/MainButtonsStyle";
import { Event } from "../components/scraperPages/eventComponent";
import { WelcomeBannerStyle } from "../components/WelcomePage/WelcomeBanner/WelcomeBannerStyle";
export function Test({ navigation }) {
  // React.useEffect(() => {
  //   fetch('http://localhost:8000/events').then((response) => response.json())
  //   .then((data) => {
  //     setData(data)
  //     setLoading(false)
  //   })
  //   .catch((error) => console.log(error))
  // }, [])

  const [q1, setQ1] = useState(0);
  const [q2, setQ2] = useState(0);
  const [q3, setQ3] = useState(0);
  const [q4, setQ4] = useState(0);

  const handleAnswer = (question, answer) => {
    switch (question) {
      case 1:
        setQ1(answer);
        break;
      case 2:
        setQ2(answer);
        break;
      case 3:
        setQ3(answer);
        break;
      case 4:
        setQ4(answer);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Submit survey data to a server or store in local storage
    console.log("Question 1:", q1);
    console.log("Question 2:", q2);
    console.log("Question 3:", q3);
    console.log("Question 4:", q4);

    // Reset survey data
    setQ1(0);
    setQ2(0);
    setQ3(0);
    setQ4(0);
  };

  return (
    <View>
      <Text>Please rate the following questions from 1 to 7:</Text>

      <Text>Question 1: How much do you enjoy programming?</Text>
      <View style={{ flexDirection: "row" }}>
        {[1, 2, 3, 4, 5, 6, 7].map((number) => (
          <TouchableOpacity
            key={number}
            style={{
              backgroundColor: q1 === number ? "blue" : "gray",
              padding: 10,
              borderRadius: 5,
              marginHorizontal: 5,
            }}
            onPress={() => handleAnswer(1, number)}
          >
            <Text style={{ color: "white" }}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
