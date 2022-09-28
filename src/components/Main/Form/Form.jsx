import React, { Component } from "react";
import img2 from "../../../assets/img2.jpg";
import "./Form.css";
import data from '../ListNews/news.json';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: data,// precarga de [] de productos,
    }
  }

  addNews = (event) => {
    event.preventDefault();
    console.log("Estas en addNews");
    const abstract = event.target.abstract.value;
    const lead_paragraph = event.target.lead_paragraph.value;
    const source = event.target.source.value;
    const newCard = { abstract, lead_paragraph, source };
    console.log(newCard);

    this.setState({ news: [newCard, ...this.state.news] }); // [{},{},{}] ---> [{},{},{},{newProduct}]
    console.log(this.state.news);
    console.log(data);
  }

  render() {

    return (
      <section className="formCreateNew">
        <h1>Create a new post!</h1>
        <img src={img2} className="img1" alt="img1" />
        <form onSubmit={this.addNews}>
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
        <redirect to="/home" />
      </section>
    )
  }
}

export default Form;
