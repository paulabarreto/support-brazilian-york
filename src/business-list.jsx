'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
      [
        {image: "docs/sb.png", title: "Spice and Bites", text: "Party and finger foods.", website: "https://www.spiceandbites.ca/"},
        {image: "docs/atlantico.png", title: "Atlantico Sushi", text: "Sushi and Brazilian food.", website: "https://www.atlanticosushi.com/"},
        {image: "docs/brazilian_market.png", title: "Brazilian Market", text: "Brazilian Groceries Delivery", website: "https://brazilianmarket.ca/"},
      ];
  }

  render() {

    return (
      <div>
        {this.state.map((business, index) => (    
          <div key={index}>
            <div className="col-sm mb-3 d-flex justify-content-center">
              <div className="card" style={{width: 18 + 'rem'}}>
                  <img src={business.image} className="card-img-top card-img-height" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{business.title}</h5>
                    <p className="card-text">{business.text}</p>
                    <a target="_blank" href={business.website}><i className="fas fa-globe"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const domContainer = document.querySelector('#businesses-container');
ReactDOM.render(e(LikeButton), domContainer);