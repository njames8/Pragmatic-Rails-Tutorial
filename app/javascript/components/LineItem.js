import React from "react"
import PropTypes from "prop-types"
import I18n from "i18n-js"
class LineItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: I18n.l('currency', Number.parseFloat(props.lineItem.price)),
      title: props.lineItem.product.title,
      quantity: props.lineItem.quantity
    }
  }

  render() {
    return (
      <React.Fragment>
        <td>{this.state.quantity}&times;</td>
        <td>{this.state.title}</td>
        <td className="item_price">{this.state.price}</td>
      </React.Fragment>
    );
  }
}

export default LineItem
