import React, { useState } from 'react'
import{ View, Image, TouchableOpacity, Alert} from 'react-native'
import { Text, Input } from 'react-native-elements'
import { css } from '../css/styles'
import local from '../config/database'
import logo from '../img/logo.png'
import Feather from 'react-native-vector-icons/Feather'

export function Login(){
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  async function buscar(){
    let response = await fetch(`${local.UrlRoot}login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user,
        password: password
      })
    })  

    let json = await response.json()
    if (json === 'error') {
      Alert.alert('Login', 'Usuário não encontrado')
    }else{
      Alert.alert('Login', 'Sucesso')
    }
  }
  return (
    <View style={css.container}>            
      <View>
        <Image source={logo} style={css.logo}  resizeMode="stretch"/>  
      </View>           
      
      <Input 
            style={css.inputLogin}            
            placeholder="Username"
            leftIcon={
              <Feather 
                style={css.inputLogin}       
                name="user"
                size={30}
                color="#000000"
              />
            }
            onChangeText={text => setUser(text)}
            value={user} 
        />
        <Input 
            style={css.inputLogin}            
            placeholder="Password"
            leftIcon={
              <Feather 
                style={css.inputLogin}       
                name="key"
                size={30}
                color="#000000"
              />
            }
            onChangeText={text => setPassword(text)}
            value={password}
        />
        <TouchableOpacity style={css.btnLogar} onPress={buscar} >
              <Text style={css.textLogin}>Login</Text>
          </TouchableOpacity>
      
    </View>
      
  )
}