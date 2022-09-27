import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import img3 from "../../../assets/img3.jpg";
import "./ListNews.css";
import Card from "./Card/Card";
import data from './news.json'
class ListNews extends Component {
  constructor(props) {
    super(props)

    this.image = React.createRef(); // referencia a la URL imágen
    this.suggestion = React.createRef(); // referencia a la sugerencia

    this.state = {
      news: data,
      suggestion: ""
    }
  }

  paintNews = () => this.state.news.map((newCard, i) => <Card data={newCard} key={uuidv4()} delete={() => this.deleteProduct(i)} />)

  deleteProduct = (i) => {
    //filter
    const remainingCards = this.state.news.filter((newCard, j) => i !== j);
    this.setState({ news: remainingCards });
  }

  render() {
    return (
      <section>
        <h1>There are the NEWS!!</h1>
        <img src={img3} className="img3" alt="img3" />
        {this.paintNews()}
        Haz una precarga de 5 noticias de la API + las que has dado de alta. Tu eliges el topic
      </section>
    )
  }
}

export default ListNews;
