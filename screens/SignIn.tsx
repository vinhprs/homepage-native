import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { yupResolver } from "@hookform/resolvers/yup"
import { SignInType } from './types'
import { loginSchema } from '../schema'
const SignIn = () => {
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
      const onSubmit = (data:SignInType) => console.log(data)
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