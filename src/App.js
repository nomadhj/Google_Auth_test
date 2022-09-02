import Login from "./Login";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Login />;
    </AuthContextProvider>
  );
}

export default App;
