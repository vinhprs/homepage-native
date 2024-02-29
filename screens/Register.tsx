import React, { FC } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Register: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đăng ký</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tên người dùng"
        />
        <TextInput
          style={styles.input}
          placeholder="Email của bạn"
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Xác nhận mật khẩu"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={() => alert('Đăng ký thành công')}>
        <Text style={styles.registerButtonText}>Đăng ký</Text>
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
  registerButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
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

export default Register;
