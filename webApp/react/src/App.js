import "./App.css";
import UserContextProvider from "./components/UserContextProvider";
import AppNavigator from "./components/AppNavigator";
import { CssBaseline } from "@mui/material";
import firebaseInit from "./services/firebase/firebaseInit";

export const Firebase = firebaseInit();

function App() {
  return (
    <div className="App" dir="rtl" >
      <CssBaseline />
      <UserContextProvider>
        <AppNavigator />
      </UserContextProvider>
    </div>
  );
}


export default App;
