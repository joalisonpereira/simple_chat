import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: metrics.baseMargin
  },
  chatContainer: {
  
  },
  inputContainer: {
    paddingTop: metrics.baseMargin,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: metrics.baseRadius,
    paddingLeft: 10
  },
  button: {
    backgroundColor: colors.secundary,
    position: 'absolute',
    borderTopRightRadius: metrics.baseRadius,
    borderBottomRightRadius: metrics.baseRadius,
    right: 8,
    height: '100%',
    width: 45
  },
  icon: {
    color: '#FFF'
  }
});

export default styles;