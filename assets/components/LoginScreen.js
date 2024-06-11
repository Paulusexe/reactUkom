// LoginScreen.js
import 'react-native-gesture-handler';
 
import React, {Component, useState, createRef} from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image, Touchable, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const LoginScreen = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
 
 
    // Notification Fail Log in
    const notif = () => {
        if (!userEmail){
            alert('MASUKKAN EMAIL ATAU PASSWORD UNTUK LOGIN');
            return;
        }
        if (!userPassword){
            alert('MASUKKAN PASSWORD UNTUK LOGIN');
            return;
        }
 
        // Call Log in Random
 
            // if true login
            AsyncStorage.setItem('username', userEmail);
            AsyncStorage.setItem('password', userPassword);
 
            navigation.replace('Home');
    }
 
  return(
    <View style={styles.mainBody}>
        <ScrollView
         keyboardShouldPersistTaps="handled"
         contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center'
         }}
        >
 
            <View>
            <KeyboardAvoidingView enabled>
                <View  style={{alignItems: 'center'}}>
                    <Image source={require('./iPhone15.jpeg')} style={{width: 70, height: 70}} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Selamat Datang</Text>
 
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput
                    style={styles.inputStyle}
                        onChangeText={(UserEmail)=> setUserEmail(UserEmail)}
 
                    selectionColor='red'
                    placeholder='Masukkan Email'
                    placeholderTextColor='#8b9cb5'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    returnKeyType='next'
 
                    underlineColorAndroid='#f000'
                    blurOnSubmit={false}
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <TextInput
                    style={styles.inputStyle}
                        onChangeText={(UserPassword)=> setUserPassword(UserPassword)}
 
                    placeholder='Masukkan Password'
                    placeholderTextColor='#8b9cb5'
                    keyboardType='default'
 
                    blurOnSubmit={false}
                    secureTextEntry={true}
                    underlineColorAndroid='#f000'
                    returnKeyType='next'
                    />
                  </View>
                <TouchableOpacity 
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={notif}
                >
                    <Text style={styles.buttonTextStyle}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>
                        Register
                    </Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    </View>
  )
}
 
export default LoginScreen;
 
const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 5,
        marginLeft: 25,
        marginRight: 25,
        margin: 10,
    },
    inputStyle: {
        backgroundColor: '#FFF',
        flex: 1,
        color: '#000',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#dadae8',
    },
    buttonStyle: {
        backgroundColor: 'green',
        height: 30,
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        // marginHorizontal: 6,
        marginTop: 10,
        borderRadius: 5,
    },
    buttonTextStyle: {
        color: 'white',
        paddingVertical: 4,
        fontSize: 16,
    },
});