import React, { Component } from "react";
import axios from "axios"; //Fetch
import { v4 as uuidv4 } from 'uuid';
import img3 from "../../../assets/img3.jpg";
import "./ListNews.css";
import Card from "./Card/Card";
import data from './news.json'


export class ListNews extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theNews: []
    }
  }

  async componentDidMount() {
    // const apiKey = process.env.REACT_APP_API_KEY;
    const apiKey = "rt0z7qOSKK2pOyK6ItKdc7dfw84lMvar";
    console.log(apiKey);
    const res = await axios(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Economy&api-key=${apiKey}`);
    const dataSlice = await res.data.response.docs.slice(0, 5);
    console.log(dataSlice);
    // const newsAndFetch = [...dataSlice]

    this.setState({
      theNews: dataSlice
    })
  }



  // paintNews = () => this.state.news.map((newCard, i) => <Card data={newCard} key={uuidv4()} delete={() => this.deleteProduct(i)} />)

  deleteNews = (i) => {
    //filter
    const remainingCards = this.state.theNews.filter((newCard, j) => i !== j);
    this.setState({ theNews: remainingCards });
  }

  render() {
    const allNews = this.state.theNews;
    return (
      <section>
        <h1>There are the NEWS!!</h1>
        <img src={img3} className="img3" alt="img3" />
        {/* {this.paintNews()} */}
        {allNews.map((news, i) => <Card news={news} delete={() => this.deleteNews(i)} key={uuidv4()} />)}
      </section>
    )
  }
}

export default ListNews;
