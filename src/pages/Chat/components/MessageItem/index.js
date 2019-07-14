import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';

import styles from './styles.js';

export default function MessageItem({message}){
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>
        { message.message }
      </Text>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          { moment(message.date).format('DD/MM/YYYY') }
        </Text>
        <Text style={styles.footerText}>
          { message.user }
        </Text>
      </View>
    </View>
  )
}

