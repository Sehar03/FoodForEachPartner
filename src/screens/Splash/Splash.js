import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import AppColors from '../../assets/colors/AppColors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
  //
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Drawer');
    }, 2000);
  }, []);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: AppColors.white, marginTop: hp('3.8')}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={true}
      />

      <Image
        source={require('../../assets/Images/image1.png')}
        style={{height: hp('56%'), width: wp('56%')}}
      />
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/Images/logo.png')}
          style={{height: hp('14%'), width: wp('32%')}}
        />
        <Text
          style={{
            fontSize: hp('3%'),
            color: 'black',
            fontFamily: 'Poppins-SemiBold',
          }}>
          Food For Each
        </Text>
      </View>
      <Image
        source={require('../../assets/Images/image2.png')}
        style={{height: hp('28%'), width: wp('100%'), marginTop: hp('8%')}}
      />
    </SafeAreaView>
  );
};

export default Splash;
