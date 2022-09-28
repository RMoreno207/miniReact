import React, { Component } from "react";

export class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props);
    const { abstract, lead_paragraph } = this.props.news;
    return (
      <article className="product-item" >
        <div className="card">
          <h2>{abstract}</h2>
          <p>{lead_paragraph}</p>
        </div>
        <div>
          <button className="btn" onClick={this.props.delete} >Delete</button>
        </div>
      </article>
    )
  }
}

export default Card;
