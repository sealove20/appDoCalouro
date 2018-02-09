import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Header = () => {
   const {
       container,
       textStyle,
       imgContainer,
       contentContainer,
       buttonStyle,
       buttonTextStyle,
       buttonTextStyle2
    } = styles;

   return (
   <View>
      <View style={container}>
         <Text style={textStyle}>App do Calouro</Text>
      </View>

      <View style={imgContainer}>
      <Image
         style={{ width: 200, height: 200 }}
         source={{ uri: 'https://images.emojiterra.com/mozilla/512px/1f393.png' }}
      />
      </View>
         <View style={contentContainer}>
            <View>
               <TouchableOpacity style={buttonStyle} />
               <Text style={buttonTextStyle2}> Coordenação </Text>
            </View>

            <View>
               <TouchableOpacity style={buttonStyle} />
               <Text style={buttonTextStyle2}> Biblioteca </Text>
            </View>
         </View>

         <View style={contentContainer}>
         <View>
            <TouchableOpacity style={buttonStyle} />
            <Text style={buttonTextStyle2}> R.U </Text>
         </View>

         <View>
            <TouchableOpacity style={buttonStyle} />
            <Text style={buttonTextStyle2}> Grade Curricular</Text>
         </View>
         </View>
      </View>
   );
};

const styles = {
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 75,
      paddingTop: 15,
      position: 'relative'
   },
   textStyle: {
      fontSize: 55,
      alignSelf: 'center'
   },
   imgContainer: {
      alignItems: 'center'
   },
   contentContainer: {
      height: 200,
      backgroundColor: '#019AE8',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 50
   },
   buttonStyle: {
      width: 100,
      height: 100,
      backgroundColor: '#fff',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5,

   },
    buttonTextStyle: {
      alignSelf: 'center',
      paddingTop: 50,
      justifyContent: 'center',
      fontSize: 30
   },
    buttonTextStyle2: {
      alignSelf: 'center',
      justifyContent: 'center',
   }
};

export default Header;
