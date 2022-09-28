import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

//Context
import { userContext } from './context/userContext';

function App() {
  // state para componente funcional
  const [user, setUser] = useState("");

  //Variables de usuario
  const login = (name) => setUser(name); // user = name. Ej. name="Guille" --> user="Guille"
  const logout = () => setUser(""); // user = ""

  //Funcion para nombre de usuario
  const data = {
    user,
    login,
    logout
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={data}>
          <Header />
          <Main />
          <Footer />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
