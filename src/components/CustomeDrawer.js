import React from 'react';
import {ImageBackground,Text,View,Image,TouchableOpacity} from 'react-native';
import AppColors from '../assets/colors/AppColors';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContainerStyles from '../assets/Styles/ContainerStyles';
import TextStyles from '../assets/Styles/TextStyles';
import ImageStyles from '../assets/Styles/ImageStyles';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomeDrawer = props => {
  
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/Images/image36.jpg')}
        style={{alignItems: 'center', height: hp('30')}}>
        <Image
          source={require('../assets/Images/image13.png')}
          style={[ImageStyles.logoImageStyle]}
        />
        <Text style={[TextStyles.whiteCenteredLable]}>Toqeer Fatima</Text>
      </ImageBackground>
<DrawerContentScrollView>
      <View
        style={{
          paddingLeft: 20,
        }}>
        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>Signup</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Address');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>Address</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>Profile</Text>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('ScheduleScreen');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>ScheduleScreen</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Notification');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>Notify</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{paddingVertical: 15}}
          onPress={() => {
            navigation.navigate('Orders');
          }}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>Orders</Text>
          </View>
        </TouchableOpacity>


        </TouchableOpacity> */}

        </View>
        </DrawerContentScrollView>

        <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: AppColors.background,
        }}>
        <TouchableOpacity style={{paddingVertical: 15}}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>Setting</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{paddingVertical: 15}}>
          <View style={[ContainerStyles.TwoitemsCenter]}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={[TextStyles.mediumTextStyle]}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
   
  );
};

export default CustomeDrawer;
