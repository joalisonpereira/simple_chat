import React, { Component } from 'react';
import { ScrollView, View } from 'react-native'; 
import { connect } from 'react-redux';
import startFirebase from '../../services/firebase';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MessageItem from './components/MessageItem';

import * as Actions from './store/dispatchers';
import styles from './styles.js';

class Chat extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    value: ''
  }

  componentDidMount(){
    if(!this.props.user)
      return this.props.navigation.navigate('Home');
    startFirebase();
    this.props.dispatchWatchMessages();
  }

  onSend = () => {
    const { value } = this.state;
    const { user } = this.props;
    this.props.dispatchSendMessage(value, user);
    this.setState({value: ''});
  }

  render() {
    const { messages: { data, loading } } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView 
          ref={scroll => this.scroll = scroll}
          onContentSizeChange={(_,height) => this.scroll.scrollTo({y: height})} 
          style={styles.chatContainer}>
          {
            data.map(item => 
              <MessageItem key={item.id} message={item}/>
            )
          }
        </ScrollView>
        <View style={styles.inputContainer}>
          <Input
            value={this.state.value}
            onChangeText={value => this.setState({value})}
            inputStyle={styles.input}
            placeholder="Mensagem"
          />
          <Button
            buttonStyle={styles.button}
            onPress={this.onSend}
            icon={<Icon name="send" size={15} style={styles.icon}/>}
            loading={loading}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  user: state.users.user
});

const mapDispatchToProps = {...Actions};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
