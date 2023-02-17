import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles";
import { AnimalDetails } from "../components/animalDetails";
import { ButtonStyles } from "../components/WelcomePage/MainButtonsStyle";
import { WelcomeBannerStyle } from "../components/WelcomePage/WelcomeBanner/WelcomeBannerStyle";

export function HumanGivens({ navigation }) {
  const [pet, setPet] = useState("Rats");
  const [animals, setAnimals] = useState([]);

  const localIP = process.env.SERVER_ADDRESS || "10.64.0.232";

  const renderDetails = () => {
    return animals.map((animal, index) => {
      return <AnimalDetails key={index} data={animal} />;
    });
  };

  React.useEffect(() => {
    fetch(`http://localhost:8000/animals/find?chosen=${pet}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data);
      })
      .catch((error) => console.log(error));
  }, [pet]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView>
          <Button
            title="Info"
            color="#869471"
            onPress={() => navigation.navigate("Info")}
          />
          <Button
            title="Take a Test"
            color="#869471"
            onPress={() => navigation.navigate("Test")}
          />
          <Button
            title="Results"
            color="#869471"
            onPress={() => navigation.navigate("Results")}
          />
          <Button
            title="Logout"
            color="#869471"
            onPress={() => navigation.navigate("Welcome")}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}
