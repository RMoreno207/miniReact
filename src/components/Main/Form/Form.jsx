import React, { Component } from "react";
import img2 from "../../../assets/img2.jpg";
import "./Form.css";

class Form extends Component {
  render() {
    return (
      <section className="formCreateNew">
        <h1>Create a new post!</h1>
        <img src={img2} className="img1" alt="img1" />
        <form>
          <label htmlFor="cabecera">Cabecera:</label>
          <input type="text" id="abstract" name="abstract" />
          <label htmlFor="texto">Texto:</label>
          <input type="text" id="lead_paragraph" name="lead_paragraph" />
          <input type="hidden" id="source" name="source" value="Admin" />
          <div>
            <button variant="contained" type="submit" value="Añadir">Create</button>
          </div>
        </form>
        Tras dar de alta debes redirigir a ListNews
      </section>
    )
  }
}

export default Form;
