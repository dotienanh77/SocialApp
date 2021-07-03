/* eslint-disable no-shadow */
import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import {AuthContext} from './AuthStack';

import AuthStack from './AuthStack';
// import AppStack from './AppStack';

const Routes = () => {
  // const {user, setUser} = useContext(AuthContext);
  // const [initializing, setInitializing] = useState(true);

  // const onAuthStateChanged = user => {
  //   setUser(user);
  //   if (initializing) {
  //     setInitializing(false);
  //   }
  // };

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // if (initializing) {
  //   return null;
  // }
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
export default Routes;
