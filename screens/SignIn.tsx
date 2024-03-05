import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { yupResolver } from "@hookform/resolvers/yup"
import { SignInType } from './types'
import { loginSchema } from '../schema'
import { useAppDispatch } from '../hooks/appHooks'
import { login } from '../store/actions/auth.action'
import axios from 'axios'
import { LocalStorage } from '../utils/Storage'
import { useNavigation } from '@react-navigation/native'
const SignIn = () => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<any>();
    const {
        control,
        handleSubmit,
        register,
        formState: { errors },
      } = useForm<SignInType>({
        defaultValues: {
          email:"",
          password:""
        },
        resolver:yupResolver(loginSchema)
      })
      const onSubmit = async(data:SignInType) => {
        const payload = {
          email:data.email,
          password:data.password
        }
        try{
          const res = await axios.post("https://staging.primeedu.io.vn/api/v1/auth/login",payload)
          if(res.data.data ){
          console.log("🚀 ~ onSubmit ~ res.data.data:", res.data.data.infoUser.roles)
            if(res.data.data.infoUser.roles[0]?.roleName === "STUDENT"){
              LocalStorage.setUserId(res.data.data.infoUser.roles._id)
              LocalStorage.setRefreshToken(res.data.data.refreshToken)
              LocalStorage.setToken(res.data.data.token)
              Alert.alert(
                "Thông báo",
                "Bạn đã đăng nhập thành công",
                [
                  {text: 'OK', onPress: () => {
                    navigation.navigate("Home",{})
                  }},
                ]
              )
            }
          }
        }catch(error){
          Alert.alert(
            "Thông báo",
            "Đã xảy ra lỗi. Vui lòng thử lại",
          
          )
        }
        
      }
  return (
    <View>
        <Text style={styles.text}>Đăng nhập</Text>
        <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            {...register('email')}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.textInput}
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.textError}>{errors.email.message}</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            {...register("password")}
            placeholder="Mật khẩu"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.textInput}
            secureTextEntry={true}
          />
        )}
        name="password"
      />
    {errors.password && <Text style={styles.textError}>{errors.password.message}</Text>}
      <Button title="Đăng nhập" onPress={handleSubmit(onSubmit)} />
    </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    text:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"600"
    },
    textInput:{
        width:"100%",
        padding:10
    },
    textError:{
        color:"#FF3333",
    }
})