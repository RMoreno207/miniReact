import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Form from './Form';
import ListNews from './ListNews';
import NotFound from '../NotFound';


export class Main extends Component {
  render() {
    return (
      <main className="main">
        <Routes>
          <Route element={<Home />} path={"/home"} />
          <Route element={<Home />} path={"/"} />
          <Route element={<Form />} path={"/form"} />
          <Route element={<ListNews />} path={"/list"} />
          <Route element={<NotFound />} path={"/*"} />
        </Routes>
      </main>
    )
  }
}

export default Main