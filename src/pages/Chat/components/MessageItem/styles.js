import { StyleSheet } from 'react-native';
import { metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: metrics.baseRadius,
    marginVertical: metrics.baseMargin / 2,
    minHeight: 30
  },
  messageText: {
    fontSize: 17,
    padding: 10,
  },
  footer: {
    paddingHorizontal: 10,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerText: {
    fontSize: 12,
    color: '#444'
  }
});

export default styles;