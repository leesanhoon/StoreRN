import React, { Component } from "react";
import { StyleSheet, View,Text } from "react-native";

export default class Catelory extends React.Component {
  static navigationOptions = {
    title: "Yamaha"
  };
  render() {
    return (
      <View>
        <Text>Catelory</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a9a9a9",
    alignItems: "stretch",
    justifyContent: "center"
  }
});
