import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import api from './src/services/api'

const App = () => {
  // const url = 'https://jsonplaceholder.typicode.com/todos/201'

  // useEffect(() => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  //     .catch(error => console.warn(error))
  // }, [])

  // const submit = () => {
  //   const data = {
  //     title: 'Todo test',
  //     body: 'test',
  //     userId: 1,
  //   };
  //   const params = {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json; charset=UTF-8',
  //     },
  //   };
  //   fetch(url, params).then(response => response.json()).then(json => console.log(json)).catch(error => console.warn(error))
  // }

  useEffect(() => {
    async function handleRequest() {
      try {
        const { data } = await api.get('/todos')
        console.log(data)
      } catch (error) {
        console.warn(error)
      }
    }
    handleRequest()
  }, [])

  const submit = async () => {
    const payload = {
      title: 'Todo test',
      body: 'test',
      userId: 1,
    }
    try {
      const { data } = await api.post('/todos', payload)
      console.log(data)
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <View>
      <Text> Olá mundo!</Text>
      <Button title='submit' onPress={submit} />
    </View>
  )

}

export default App;
