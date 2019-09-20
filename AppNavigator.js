import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Catelories from "./screens/Catelories";
import Catelory from "./screens/Catelory";

const AppNavigator = createStackNavigator({
  Catelories: {
    screen: Catelories
  },
  Catelory: {
    screen: Catelory
  }
});

export default AppNavigator;
