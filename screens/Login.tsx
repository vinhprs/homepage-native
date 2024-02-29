// App.tsx
import React, { FC } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Login: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đăng nhập</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Quên mật khẩu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => alert('Đăng nhập')}>
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>

      {/* <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require('./google-icon.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require('./facebook-icon.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F1F39',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    color: 'white',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  iconImage: {
    width: 40,
    height: 40,
  },
});

export default Login;



