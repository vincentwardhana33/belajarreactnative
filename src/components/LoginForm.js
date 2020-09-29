import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(this.setState({ error: 'Authentication Failed.' }));
      });
  }

  renderButton(){
    if (this.state.loading){
      return <Spinner />
    }

    return (<Button onPress={this.onButtonPress}>
              Log In
            </Button>
    )
  }

  render() {
    const styles = {
      errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
      }
    }

    return (
        <Card>
            <CardSection>
              <Input
                label="Email"
                placeholder="example@gmail.com"
                onChangeText={email => this.setState({ email })}
              />
            </CardSection>
            
            <CardSection>
            <Input
                secureTextEntry
                label="Password"
                placeholder="Password"
                onChangeText={password => this.setState({ password })}
              />
            </CardSection>

            <Text style={styles.errorTextStyle}>
              {this.state.error}
            </Text>

            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>
    );
  }
}

export default LoginForm;
