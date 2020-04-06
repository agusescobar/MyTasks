import React, {Component} from 'react';
import { StyleSheet,  View, TouchableOpacity, Text, SafeAreaView, Image  } from 'react-native';
import NavBar from './app/components/navbar';

class App extends Component{
  render(){
    return(
      
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.myTasksTxt}>Mis actividades</Text>
        </View>

        <View style={styles.body}>
          
        </View> 

        <View style={styles.navbar}>
          <NavBar/>

        </View> 

        
        
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  
},
header: {
  flex:1.15,
  flexDirection: 'row',
  backgroundColor: "white",
  elevation: 10,
  shadowOffset: {
    height: 3
  },
  shadowColor: "black",
  shadowOpacity: 0.13,
  shadowRadius: 5,
},
body: {
  flex: 11,
  backgroundColor: 'grey'
},
navbar: {
  flex: 1,
  flexDirection: 'row',
  backgroundColor: "white",
  elevation: 10,
  shadowOffset: {
    height: 3,
  },
  shadowColor: "black",
  shadowOpacity: 1,
  shadowRadius: 5,
  
},
myTasksTxt:{
  fontFamily: "SourceSansPro-Light",
  fontSize: 23,
  textAlign: 'center',
  marginTop: 13,
  width: 400,
},
});


export  default App;