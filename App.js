import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    })
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (<Button onPress={() => firebase.auth().signOut()}>
                  Log Out
                </Button>);
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
