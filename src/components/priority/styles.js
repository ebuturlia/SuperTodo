import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  clearButton: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearText: {
    color: 'green',
  },
  boxesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeItem: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    backgroundColor: '$greyishGrey',
    borderRadius: 2,
  },
  inactiveItem: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '$greyishGrey',
  },
});
