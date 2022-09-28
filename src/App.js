import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

//Context
import { userContext } from './context/userContext';
import { newsContext } from './context/newsContext';

function App() {
  // state para componente funcional usuario
  const [user, setUser] = useState("");
  // state para componente funcional news
  const [news, setNews] = useState({});

  //Variables de usuario
  const login = (name) => setUser(name); // user = name. Ej. name="Guille" --> user="Guille"
  const logout = () => setUser(""); // user = ""

  //Funcion para nombre de usuario
  const data = {
    user,
    login,
    logout
  }

  //variables para news
  const addNews = (news) => setNews(news);

  //funcion para news
  const dataNews = {
    news, addNews
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={data}>
          <Header />
          <newsContext.Provider value={dataNews}>
            <Main />
          </newsContext.Provider>
          <Footer />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
