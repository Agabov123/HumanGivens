import { List } from "react-native-paper";
import { TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { LoginStyle } from "../components/LogInPage/LoginStyle";

export function Info({ navigation }) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <Text style={LoginStyle.header}>Human Givens</Text>
      <List.Accordion
        style={LoginStyle.buttonText}
        title="Idea"
        left={(props) => <List.Icon {...props} icon="store" />}
      >
        <Text style={LoginStyle.LogInButton}>
          THE HUMAN GIVENS APPROACH is a set of organising ideas that provides a
          holistic, scientific framework for understanding the way that
          individuals and society work. This framework encompasses the latest
          scientific understandings from neurobiology and psychology, as well as
          ancient wisdom and original new insights.
        </Text>

        <TouchableOpacity
          style={LoginStyle.LogInButton}
          title="Location"
          onPress={() => navigation.navigate("VetsMap")}
        >
          <Text style={LoginStyle.buttonText}>Location</Text>
        </TouchableOpacity>
      </List.Accordion>

      <List.Accordion
        style={LoginStyle.buttonText}
        title="Pet Shops"
        left={(props) => <List.Icon {...props} icon="store" />}
      >
        <Text style={LoginStyle.LogInButton}>
          Find an exotic pet shop near you that. There are shopss that sellitems
          for a large variety of exotics pets including small mammals, birds,
          reptiles, invertebrate, amphibians and fish.
        </Text>

        <TouchableOpacity
          style={LoginStyle.LogInButton}
          title="Location"
          onPress={() => navigation.navigate("ShopsMap")}
        >
          <Text style={LoginStyle.buttonText}>Location</Text>
        </TouchableOpacity>
      </List.Accordion>
    </List.Section>
  );
}
