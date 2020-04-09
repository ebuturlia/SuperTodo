import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {},
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    flex: 1,
    fontSize: 20,
  },
  buttonStyle: {
    marginLeft: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    backgroundColor: '$stylishBlue',
  },
  buttonText: {
    color: 'white'
  }
});
