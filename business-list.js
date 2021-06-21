'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = [{ image: "docs/sb.png", title: "Spice and Bites", text: "Party and finger foods.", website: "https://www.spiceandbites.ca/" }, { image: "docs/atlantico.png", title: "Atlantico Sushi", text: "Sushi and Brazilian food.", website: "https://www.atlanticosushi.com/" }, { image: "docs/brazilian_market.png", title: "Brazilian Market", text: "Brazilian Groceries Delivery", website: "https://brazilianmarket.ca/" }, { image: "docs/delicake.png", title: "Delicake", text: "Cakes and sweets", website: "https://delicake.ca/" }];
    return _this;
  }

  _createClass(LikeButton, [{
    key: "render",
    value: function render() {

      return React.createElement(
        "div",
        { className: "row" },
        this.state.map(function (business, index) {
          return React.createElement(
            "div",
            { key: index, className: "col-sm mb-3 d-flex justify-content-center" },
            React.createElement(
              "div",
              { className: "card", style: { width: 18 + 'rem' } },
              React.createElement("img", { src: business.image, className: "card-img-top card-img-height", alt: "..." }),
              React.createElement(
                "div",
                { className: "card-body" },
                React.createElement(
                  "h5",
                  { className: "card-title" },
                  business.title
                ),
                React.createElement(
                  "p",
                  { className: "card-text" },
                  business.text
                ),
                React.createElement(
                  "a",
                  { target: "_blank", href: business.website },
                  React.createElement("i", { className: "fas fa-globe" })
                ),
                React.createElement(
                  "a",
                  { href: "#" },
                  React.createElement("i", { className: "p-2 fab fa-facebook" })
                ),
                React.createElement(
                  "a",
                  { href: "#" },
                  React.createElement("i", { className: "fab fa-instagram" })
                )
              )
            )
          );
        })
      );
    }
  }]);

  return LikeButton;
}(React.Component);

var domContainer = document.querySelector('#businesses-container');
ReactDOM.render(e(LikeButton), domContainer);