import React, { Component } from "react";
import { Navigate } from 'react-router-dom';
import img2 from "../../../assets/img2.jpg";
import "./Form.css";

//FALTA PASAR NEW OFFER A LISTNEWS

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false,// boleano para activar redireccion
      news: {
        abstract: "prueba",
        lead_paragraph: "prueba",
        source: "prueba"
      }
    }
  }

  addNews = (event) => {
    event.preventDefault();

    const abstract = event.target.abstract.value;
    const lead_paragraph = event.target.lead_paragraph.value;
    const source = event.target.source.value;
    const newCard = { abstract, lead_paragraph, source };
    console.log(newCard);

    this.setState({ news: newCard });

    this.setState({ redirect: true });
    console.log(this.state);
  }

  render() {
    //Redireccionar tras añadir noticia
    const { redirect } = this.state;
    if (redirect) {
      return <Navigate to="/list" />
    }

    return (
      <section className="formCreate">
        <h1>Create a new post!</h1>
        <img src={img2} className="img1" alt="img1" />
        <form onSubmit={this.addNews}>
          <fieldset>
            <label htmlFor="cabecera">Cabecera:</label>
            <input type="text" id="abstract" name="abstract" />
            <label htmlFor="texto">Texto:</label>
            <input type="textarea" id="lead_paragraph" name="lead_paragraph" />
            <input type="hidden" id="source" name="source" value="Admin" />
            <div>
              <button variant="contained" type="submit" value="Añadir">Create</button>
            </div>
          </fieldset>
        </form>
      </section>
    )
  }
}

export default Form;
