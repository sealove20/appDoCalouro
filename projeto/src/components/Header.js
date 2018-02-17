import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, BackHandler } from 'react-native';

export default class Header extends Component {
   static navigationOptions = {
      // header: {
      //    visible: false,
      // }
      title: 'Header',
   }
   constructor(props) {
      super(props);
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
   }

   componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
   }

   componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
   }

   handleBackButtonClick() {
      this.props.navigation.goBack('false');
      return true;
   }


render() {
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
               style={{ width: 135, height: 140 }}
               source={require('../../imgs/chapeu.png')}
            />
         </View>
         <View style={contentContainer}>
            <View>
            <TouchableOpacity
               style={buttonStyle}
               onPress={() => this.props.navigation.navigate('Coordenacao')}
            >
               <Image
               style={{
                  marginLeft: 12,
                  marginTop: 10,
                  width: 75,
                  height: 75
               }}
                  source={require('../../imgs/coord.png')}
               />
            </TouchableOpacity>
               <Text style={buttonTextStyle2}> Coordenação </Text>
            </View>

            <View>
            <TouchableOpacity
               style={buttonStyle}
               onPress={() => this.props.navigation.navigate('Biblioteca')}
            >
               <Image
               style={{
                  marginLeft: 14,
                  marginTop: 10,
                  width: 75,
                  height: 75
               }}
                  source={require('../../imgs/biblioteca.png')}
               />
            </TouchableOpacity>
               <Text style={buttonTextStyle2}> Biblioteca </Text>
            </View>
         </View>

         <View style={contentContainer}>
            <View>
            <TouchableOpacity
               style={buttonStyle}
               onPress={() => this.props.navigation.navigate('Ru')}
            >
               <Image
                  style={{
                     marginLeft: 14,
                     marginTop: 15,
                     width: 75,
                     height: 75
                  }}
                  source={require('../../imgs/ru.png')}
               />
            </TouchableOpacity>
               <Text style={buttonTextStyle2}> R.U </Text>
            </View>


            <View>
               <TouchableOpacity
                  style={buttonStyle}
                  onPress={() => this.props.navigation.navigate('Grade')}
               >
               <Image
                  style={{
                     marginLeft: 19,
                     marginTop: 17,
                     width: 60,
                     height: 60
                  }}
                  source={require('../../imgs/grade.png')}
               />
               </TouchableOpacity>
                  <Text style={buttonTextStyle2}> Grade Curricular</Text>
            </View>
         </View>
      </View>
      );
   }
}

const styles = {
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 75,
      paddingTop: 15,
      position: 'relative'
   },
   textStyle: {
      fontSize: 50,
      alignSelf: 'center',
      fontFamily: 'Lobster'
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
      fontFamily: 'Roboto'
   }
};
