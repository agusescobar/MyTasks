import React, { Component } from 'react';
import { StyleSheet,  View, TouchableOpacity, Text, Image  } from 'react-native';

class NavBar extends Component{
    render(){
        return(
            <View style={styles.nav}>
                <TouchableOpacity>
                    <Image  style={styles.imgBoton} source={require('../../assets/icons/icons8-home.png')} />
                    <Text style={styles.txtBoton}>Inicio</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Image  style={styles.imgBoton} source={require('../../assets/icons/icons8-add.png')} />
                    <Text style={styles.txtBoton}>Agregar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Image  style={styles.imgBoton} source={require('../../assets/icons/icons8-settings.png')} />
                    <Text style={styles.txtBoton}>Configuración</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imgBoton: {
      alignItems: 'center',
      height: 30,
      width: 30,
      marginLeft: 40,
      marginRight: 40,

    },
    txtBoton:{
      textAlign: 'center',
      fontSize: 14,
    },
    nav: {
        flex: 1,
        flexDirection: 'row',
        
        justifyContent: "space-between"
        
      }
    });

export default NavBar;