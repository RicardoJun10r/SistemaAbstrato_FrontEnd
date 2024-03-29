import React from "react";
import Rotas from "./routes/routes";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <Rotas/>
    </AuthProvider>
  );
}

export default App;
