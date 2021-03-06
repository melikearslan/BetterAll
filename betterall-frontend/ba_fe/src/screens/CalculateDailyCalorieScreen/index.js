//import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, ScrollView } from "react-native";
import React, {useState} from 'react';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export default class CalculateDailyCalorieScreen extends React.Component {
  constructor() {
    super();
  }
  state={
    username:"",
    email:"",
    password:"",
    name:"",
    surname:"",
    height:"",
    weight:"",
    gender:"",
    //age: new Date(),
  }



  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.header}>Daily Calories</Text>
            <StackedBarChart
              style={{
                borderRadius: 16,
                propsForDots: {
                  r: "600",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              data={{
                labels: ["Breakfast", "Lunch", "Dinner", "Snack"],
                legend: ["Protein", "Carbs", "Fat"],
                data: [
                  [600, 600, 600],
                  [500, 300, 600],
                  [100, 1200, 600],
                  [300, 700, 800]
                ],
                barColors: ["#70c278", "#7494ea", "#ffc533"]
              }}
              withHorizontalLabels={false}
              barPercentage={50}
              //showLegend={false}
              width={360}
              height={320}
              chartConfig={{
                barPercentage: 1.1,
                backgroundColor: "#ffc533",
                backgroundGradientFrom: "#473933",
                backgroundGradientTo: "#FF0054",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
            />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDDA7E',
    paddingLeft: 30,
    paddingRight: 30,
  },
  header: {
    fontSize: 48,
    fontFamily:'Mulish-Regular',
    color:'#7B8235',
    paddingBottom: 10,
    marginTop: 30,
    marginBottom: 40,
    borderBottomColor: '#7B8235',
    //borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },

});
