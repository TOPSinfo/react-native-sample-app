import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
    },
    normalInput: {
      padding: 10,
      borderWidth: 1,
      borderColor: Colors.black,
      marginBottom: 10
    }
  }
}

export default ApplicationStyles
