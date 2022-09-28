import React, { Component } from "react";
import img1 from '../../../assets/img1.jpg'
import "./Home.css";
import { userContext } from '../../../context/userContext'; // contexto

class Home extends Component {
  static contextType = userContext; //Para usar el contexto de usuario
  constructor(props) {
    super(props)
    this.user = React.createRef();//PAra guardar al usuario

    //Inicializamos el estado local asignado a un objeto
    this.state = {
      user: ''
    }
  }

  sendUser = () => {
    const { login } = this.context;

    alert(this.state.user + " ha iniciado sesión");

    login(this.state.user); //Envia user a login

    this.user.current.value = ""; //Se vacia el input
    this.setState({ user: "" });// Se vacia el estado local
  }

  handleChange = () => {
    const user = this.user.current.value; //Leer campo por referencia
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the best News APP!!</h1>
        <img src={img1} className="img1" alt="img1" />
        <div className="user">
          <h2>Introduce tu nombre de usuario</h2>
          <input type="text" placeholder="Pepe" ref={this.user} onChange={this.handleChange} />
          <button onClick={this.sendUser}>Login</button>
        </div>
      </div>
    )
  }
}

export default Home;
