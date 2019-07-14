import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: metrics.baseMargin,
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
    marginRight: 10
  },
  iconTitle: {
    color: '#FFF',
    fontSize: 40
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: metrics.baseRadius,
    paddingLeft: 10
  },
  button: {
    marginTop: metrics.baseMargin * 2,
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius
  },
  buttonContainer: {
    paddingHorizontal: metrics.baseMargin
  }
});

export default styles;