import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import Header from './src/components/common/Header';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyB-Jl8NK9NkhRN1HPxaSoM7ExOU2-RaoGo",
      authDomain: "latauth-15fa0.firebaseapp.com",
      databaseURL: "https://latauth-15fa0.firebaseio.com",
      projectId: "latauth-15fa0",
      storageBucket: "latauth-15fa0.appspot.com",
      messagingSenderId: "599006155772",
      appId: "1:599006155772:web:6920ebaca659c610105879",
      measurementId: "G-F6M3FVD2YK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
