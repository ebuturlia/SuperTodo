import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 5,
    backgroundColor: '$greyishGrey',
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: '60%',
  },
  due: {
    textAlign: 'right',
    width: '40%',
  },
  description: {
    width: '100%',
    textAlign: 'left',
    paddingTop: 10,
  },
  priorityContainer: {
    paddingTop: 10,
  },
});
