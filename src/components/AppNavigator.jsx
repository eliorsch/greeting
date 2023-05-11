import React, { useContext } from 'react'
import { UserContext } from './UserContextProvider'
import LoginView from './view/LoginView';
import MainView from './view/MainView';

export default function AppNavigator() {
  const user = useContext(UserContext);
  if (!user) return(<LoginView/>);
  else return (<MainView/>);
}
