import React, { Component } from 'react';
import { View } from 'react-native'; 
import { connect } from 'react-redux';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Actions from './store/dispatchers';
import styles from './styles.js';

class Home extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    value: ''
  }

  handleStartChat = () => {
    const { value } = this.state;
    this.props.dispatchStartChat(value);
    this.props.navigation.replace('Chat');
    this.setState({value: ''});
  }

  render() {
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Simple Chat
          </Text>
          <Icon 
            name="comment" 
            style={styles.iconTitle}
          />
        </View>
        <Input
          placeholder="Username"
          inputStyle={styles.input}
          value={value}
          onChangeText={value => this.setState({value})}
        />
        <Button 
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          onPress={this.handleStartChat}
          title="ENTER ROOM"
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {...Actions};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
