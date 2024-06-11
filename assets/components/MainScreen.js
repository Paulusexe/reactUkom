//MainScreen.js
import 'react-native-gesture-handler';
 
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
 
const MainScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <View style={styles.box}>
            <TouchableOpacity
              style={styles.inner}
              onPress={() => navigation.navigate("Kalkulator")}
            >
              <Image source={require('../../assets/calculator.png')}
                style={{ width: 40, height: 40 }}
              />
              <Text style={styles.txtbtn}>Kalkulator</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity
              style={styles.inner}
              onPress={() => navigation.navigate("Contact")}
            >   
            <Image source={require('../../assets/contact.png')}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.txtbtn}>Contact</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => navigation.navigate("Gallery")}
        >
          <Image source={require('../../assets/gallery.png')}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.txtbtn}>Gallery</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => navigation.navigate("Dzikir")}
        >
          <Image source={require('../../assets/mosque.png')}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.txtbtn}>Dzikir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

 
export default MainScreen;
 
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50,
        margin: 33
    },
    box: {
        width: '40%',
        height: '25%',
        padding: 5,
 
    },
    box2: {
        width: '80%',
        height: '10%',
        padding: 5,
 
    },
    inner: {
        flex: 1,
        backgroundColor: '#007bff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    inner2: {
        flex: 1,
        backgroundColor: '#007bff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
    },
});