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
      </List.Accordion>

      <List.Accordion
        style={LoginStyle.buttonText}
        title="Useful Links"
        left={(props) => <List.Icon {...props} icon="store" />}
      >
        <Text style={LoginStyle.LogInButton}>
          "https://www.geeksforgeeks.org";
        </Text>
      </List.Accordion>
    </List.Section>
  );
}
