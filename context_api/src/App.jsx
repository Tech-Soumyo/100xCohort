import "./App.css";
import Login from "./components/login.jsx";
import Profile from "./components/profile.jsx";
import UserContextProvider from "./context/userContextProvider.jsx";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>About Context Api</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
