import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import React, { PropTypes, Component } from 'react';

import Home   from './Home/Home.js'


const App = () => {

  console.log('hey')
  
  return (
    <View>
      <Home />  
    </View> 
  );
};

export default App;
