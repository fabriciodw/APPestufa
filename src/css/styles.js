import { StyleSheet, Dimensions } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')
const css = StyleSheet.create({ 
  
  container: { 
    flex: 1,   
    backgroundColor: '#F0F8FF',
  },  

  inputLogin: {
    marginTop: 12,
    backgroundColor: 'transparent',    
    textAlign: 'left',
    paddingLeft: 20,
    width: '100%'
  },

  inputLoginIcon: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  
  logo: { 
    marginTop: 100,
   marginBottom: 0,
    width: '100%'
  },
  btnLogar: {
    marginTop: 50,
    width: WIDTH - 150,
    height: 40,
    borderRadius: 30,    
    backgroundColor: '#32CD32',
    justifyContent: 'center',
    marginHorizontal: 68,
    borderLeftWidth: 1,
    borderWidth: 0.8
  },
  textLogin: {
    fontSize: 20,
    color: 'black',
    height: 30,
    alignSelf: 'center',
    borderRadius: 50
  }, 
})


export { css }