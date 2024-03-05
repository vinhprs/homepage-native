import AsyncStorage from '@react-native-async-storage/async-storage';
export const storageConstants = {
    accessToken: 'accessToken',
    dataGoogle: 'dataGoogle',
    refreshToken: 'refreshToken',
  };
  
  export const LocalStorage = ( function () {
    async function _setUserId(userId: any) {
      if (userId) {
        try {
          await AsyncStorage.setItem('userId', userId);
        } catch (e) {
          // saving error
          console.log(e)
        }
      }
    }
    async function _getUserId() {
      try {
        const value = await AsyncStorage.getItem('userId');
        if (value !== null) {
          // value previously stored
          return value
        }
      } catch (e) {
        // error reading value
      }
      // return localStorage.getItem('userId');
    }
    async function _setToken(accessToken: any) {
      if (accessToken) {
        try{
          await AsyncStorage.setItem("accessToken", accessToken)
        }catch(e){
          console.log(e)
        }
        // localStorage.setItem('accessToken', accessToken);
      }
    }
    async function _setRefreshToken(accessToken: any) {
      if (accessToken) {
        try {
          await AsyncStorage.setItem('refreshToken', accessToken)
        }catch(e){
          console.log(e)

        }
        // localStorage.setItem('refreshToken', accessToken);
      }
    }
    async function _getAccessToken() {
      try {
        const value = await AsyncStorage.getItem('accessToken'); 
        return value
      }catch(e){
        console.log(e)

      }
      // return localStorage.getItem('accessToken');
    }
  
    async function _getRefreshToken() {
      try {
        const value = await AsyncStorage.getItem('refreshToken'); 
        return value
      }catch(e){
        console.log(e)

      }
      // return localStorage.getItem('refreshToken');
    }
  
    async function _clearToken() {
      try {
        await AsyncStorage.removeItem('accessToken');
        await AsyncStorage.removeItem('refreshToken');
        await AsyncStorage.removeItem('userId');
      }catch(e){
        console.log(e)
      }
      // localStorage.removeItem('accessToken');
      // localStorage.removeItem('refreshToken');
      // localStorage.removeItem('userId');
    }
    function _setDataGoogle(data: any) {
      if (data) {
        localStorage.setItem(storageConstants.dataGoogle, JSON.stringify(data));
      }
    }
  
    function _getDataGoogle() {
      return localStorage.getItem(storageConstants.dataGoogle);
    }
    return {
      setToken: _setToken,
      getAccessToken: _getAccessToken,
      getRefreshToken: _getRefreshToken,
      clearToken: _clearToken,
      setDataGoogle: _setDataGoogle,
      setRefreshToken: _setRefreshToken,
      setUserId: _setUserId,
      getUserId: _getUserId,
    };
  })();
  