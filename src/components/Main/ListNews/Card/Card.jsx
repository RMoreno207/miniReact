import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { abstract, lead_paragraphfo, source } = this.props.data;
    return (
      <article className="product-item" >
        <div>
          <h3>{abstract}</h3>
          <p>{lead_paragraphfo}</p>
          <h4>{source}</h4>
        </div>
        <div>
          <button variant="contained" size="small" >Delete</button>
        </div>
      </article>
    )
  }
}

export default Card;
