import React from 'react';
import { SafeAreaView,StyleSheet,Text } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppColors from '../colors/AppColors';


const ContainerStyles = StyleSheet.create({
   inputFieldNeomorphContainer:{
    width: wp('80%'),
    height: hp('7%'),
    borderRadius: wp('3%'),
    shadowRadius: 4,
    backgroundColor: AppColors.white,
    // alignSelf:"center",
    // alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: hp('1.4%'),
    shadowOpacity: 0.3,
    marginTop: hp('1.4%'),


   } ,
   touchableOpacityNeomorphContainer:{
      marginTop:30,
      shadowRadius: 6,
      backgroundColor:AppColors.primary,
      borderRadius:wp('3%'),
      height:hp('6%'),
      width:wp('80%'),
      marginVertical: hp('1.4%'),
      shadowOpacity: 0.3,
  
     } ,
     headerViewStyle:{
      height:hp('8%'),
      width:wp('100%'),
      backgroundColor:"#EB5703",
      flexDirection:"row"
     },
     itemsCenter:{
      alignItems:"center",
      
     },
     largeNeomorphStyle:{
      shadowRadius: 4,
      shadowOpacity:0.3,
      borderRadius: 25,
      backgroundColor: AppColors.white,
      width: wp('42'),
      height: hp('43'), 
     },
     smallNeomorphStyle:
     {
      shadowRadius: 4,
      shadowOpacity:0.3,
      borderRadius: 25,
      backgroundColor: AppColors.white,
      width: wp('42.3'),
      height: hp('21'),
     
    },
    TwoitemsCenter:{
      flexDirection: 'row',
       alignItems: 'center'
    }
})

export default ContainerStyles