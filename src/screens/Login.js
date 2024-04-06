import { Pressable, StyleSheet, Text, View,  } from 'react-native'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'
import { useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { loginSchema } from '../utils/validations/authSchema'
import { deleteSession, insertSession } from '../utils/db'

const Login = ({navigation}) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const[triggerLogin]= useLoginMutation() 

    const onSubmit = async () => {
        try {

            loginSchema.validateSync({email,password})
            const {data} = await  triggerLogin({email,password})
            deleteSession()
            insertSession(data)
            dispatch(setUser({email:data.email,idToken:data.idToken,localId:data.localId}))
    
          } catch (error) {
    
            setErrorEmail("")
            setErrorPassword("")
    
            switch(error.path){
              case "email":
                setErrorEmail(error.message)
                break
              case "password":
                setErrorPassword(error.message)
                break
              default:
                break
            }
    }}

    return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={styles.title}>Arranque Parcero</Text>
            <InputForm
                label='email'
                value={email}
                onChangeText={(t) => setEmail(t)}
                isSecure={false}
                error={errorEmail}
                
            />
            <InputForm
                label='password'
                value={password}
                onChangeText={(t) => setPassword(t)}
                isSecure={true}
                error={errorPassword}

            />
            <SubmitButton onPress={onSubmit} title='Iniciar sesion'/>
            <Text style={styles.sub} >Si no Tienes Cuenta</Text>
            <Pressable onPress={()=> navigation.navigate("Register")} >
                <Text style={styles.subLink}>Por aquí parcero</Text>
            </Pressable>


        </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        color:"white"
    },
    container:{
        width: "90%",
        backgroundColor:colors.black,
        gap:15,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20,
      
    },
    title:{
        fontSize:22,
        fontFamily:fonts.AntonRegular,
        color:"white"
    },
    sub:{
        fontSize:14,
        color:"white"
    },
    subLink: {
        fontSize:14,
        color:colors.green
    }

})