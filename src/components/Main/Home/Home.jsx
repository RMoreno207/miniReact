import React, { Component } from "react";
import img1 from '../../../assets/img1.jpg'
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the best News APP!!</h1>
        <img src={img1} className="img1" alt="img1" />
        <div>
          <h2>Introduce tu nombre de usuario</h2>
          <input type="text" placeholder="Pepe" />
          <button>Login</button>
        </div>
      </div>
    )
  }
}

export default Home;
