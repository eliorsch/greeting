import "./App.css";
import UserContextProvider from "./components/UserContextProvider";
import firebaseInit from "./firebase/firebaseInit";
import AppNavigator from "./components/AppNavigator";

export const Firebase = firebaseInit();

function App() {
  return (
    <div className="App" dir="rtl">
      <UserContextProvider>
        <AppNavigator />
      </UserContextProvider>
    </div>
  );
}

export default App;
