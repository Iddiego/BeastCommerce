import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-web'
import { useSelector } from 'react-redux'


const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
    const [number, setNumber] = useState (0)
 
    return (
    <View>
        <Button title='+' onPress={()=> setCount(count + 1)}/>
        <Text>{count}</Text>
        <Button title='-' onPress={()=> setCount(count - 1)}/>
        <TextInput onChangeText ={(t) => setNumber(parseInt(t))}/>
        <Button title='Total' onPress={()=> setCount(number)}/>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})