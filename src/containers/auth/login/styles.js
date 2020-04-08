import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputMargin: {
    marginVertical: 10,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '7%',
  },
  errorText: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
  },

  image: {
    width: 120,
    height: 120,
  },
  userForm: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
});
