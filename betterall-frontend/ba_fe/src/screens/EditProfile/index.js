//import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, ScrollView } from "react-native";
import React, {useState} from 'react';
import ProfilePicture from "react-native-profile-picture";
import "../../../assets/fonts/Mulish-Regular.ttf";
import CalculateDailyCalorieScreen from '../CalculateDailyCalorieScreen';
import CalculateBodyFatRatioScreen from '../CalculateBodyFatRatioScreen';
import ViewProgressScreen from '../ViewProgressScreen';
import CreateMealPlan from '../CreateMealPlan';
import CreateWorkoutPlan from '../CreateWorkoutPlan';
import LinearGradient from "react-native-linear-gradient";

import MapScreen from "../MapScreen";
export default class EditProfile extends React.Component {
    constructor() {
        super();
    }
    state={

    }


    render() {
        return (
            <LinearGradient colors={['#cdda7e', '#8aa07c', '#47657a']} style={styles.gradient}>

                {/*
        ***** These methods of displaying profile pictures might be used when there is a photo of the user
        <ProfilePicture
          // With requirePicture
          isPicture={true}
          requirePicture={require('./assets/images/avatar1.png')}
          shape='circle'
        />


        <ProfilePicture
          // With URLPicture
          isPicture={true}
          requirePicture="http://examplepicturesite.examplecom/picture/profilepicture.png"
          shape='rounded'
        />*/}

                <ScrollView>
                    <Text style={styles.personalInfo}>
                        My Profile
                    </Text>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.planButton}
                            onPress={() => this.props.navigation.navigate('CalculateBodyFatRatioScreen')}>
                            <ImageBackground source={require("../../../assets/images/bodyFat.png")}
                                             style={styles.image}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.planButton}
                            onPress={() => this.props.navigation.navigate('CalculateDailyCalorieScreen')}>
                            <ImageBackground source={require("../../../assets/images/dailyCalorie.png")}
                                             style={styles.image}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.progressButton}
                            onPress={() => this.props.navigation.navigate('ViewProgressScreen')}>
                            <ImageBackground source={require("../../../assets/images/seeProgress.png")}
                                             style={styles.progressImage}/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </LinearGradient>
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
    personalInfo: {
        fontFamily:'Mulish-Regular',
        //flex: 0.3,
        fontSize: 44,
        color:'#222b14',
        paddingTop: 100,
        //marginBottom: 10,
        //marginLeft: 10,
        borderBottomColor: '#222b14',
        //borderBottomColor: '#199187',
        //borderBottomWidth: 5,
        paddingLeft: 110,
        //paddingRight: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePicture:{
        paddingLeft: 130,
        marginRight: 150,
        //justifyContent: "space-between",
    },
    planButton:{
        width: 140,
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
        //borderColor:'rgba(0,0,0,0.6)',
        //backgroundColor: 'white',
        //marginLeft: 5,
        marginRight: 15,
        marginTop: 25,
        marginBottom: 25,
        //backgroundColor: 'red',
    },
    progressButton:{
        width: 320,
        height: 120,
        marginTop: -40,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'red',
        //borderRadius:100,
        //borderColor:'rgba(0,0,0,0.6)',
    },

    image: {
        flex: 1,
        width: 250,
        height: 250,
        justifyContent: 'center',
        //alignItems: 'center',
        //resizeMode: 'contain'
    },
    progressImage: {
        flex: 1,
        width: 384,
        height: 264,
        marginTop: -90,
        marginRight: 50,
        //resizeMode: 'contain'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        marginBottom: 105,
        marginTop: 30,
        marginLeft: 50,
        marginRight: 30,

    },
});
