import { Pressable, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native'
import colors from '../utils/global/colors'
import {Feather, AntDesign } from '@expo/vector-icons'
import { useState } from 'react'

const Search = ({handlerKeyword}) => {
    const [input, setInput] = useState("")
    const [error, setError] = useState("")
    const handlerInput = (t) => setInput(t)
   
    const search = () => {

        const expression = /[\?@!¿¡+\-{}#\[\]*:'´`()]/
        if(expression.test(input)){
            setError("Invalido")
            return  
        }
        setError("")
        handlerKeyword(input)
        Keyboard.dismiss()
    }

    const resetSearch = () => {
        handlerKeyword("")
        handlerInput("")
        setError("")
    }

  return (
    <View>

        <View style={styles.container} >
            <TextInput
                placeholder='Buscar'
                value={input}
                onChangeText={handlerInput}
                style={styles.input}
                />
            <Pressable onPress={search} >
                <Feather name='search' size={20} color={colors.green} padding={5} />
            </Pressable>
            <Pressable onPress={resetSearch}>
                <AntDesign name='closecircle' size={20} color={colors.green} padding={5}/>
            </Pressable>   
        </View>
        <View style={styles.containerdos} >
        {error ? <Text style={styles.errorText} >{error}</Text>: null}
        </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        padding:5,
        backgroundColor: "black",
        flexDirection:"row",
        alignItems:"center"
    },



    input:{
       
        flex:1,
        margin:10,
        padding:2,
        paddingHorizontal:10,
        paddingVertical: 5,
        borderRadius:5,
        backgroundColor:colors.green
    },

    errorText: {
        color:"white",
        fontSize:20
    },

    containerdos:{
        alignItems:"center",
        backgroundColor:"red"
    }



})