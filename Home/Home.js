//Libraries
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
}                                       from 'react-native';

import React, { Component, PropType }   from 'react';
import io                               from "socket.io-client";

const user                              = require('../User')



class Home extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const endpoint = "http://10.0.0.4:8000"

    const socket = io(endpoint)

    socket.on("outgoing data", data => {
      if(data !== null) {
        const currentUser = data.num.user
        this.setState({
          user: currentUser,
        })
      }
    })
  }

  render() {
    if(this.state.user !== null) {
      return(
        <Text style={styles.logo}> "Logged" </Text>
      )
    }
    else return(
      <Text style={styles.logo}> "Hello" </Text>
    )

    
  }






}

const styles = StyleSheet.create({
  logo: {
      marginLeft: 200,
      marginTop: 200,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 78
  },
});

export default Home