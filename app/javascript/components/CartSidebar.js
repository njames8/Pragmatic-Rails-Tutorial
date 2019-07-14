import React from "react"
import PropTypes from "prop-types"
import LineItem from "./LineItem"
class CartSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineItems: JSON.parse(props.lineItems),
      currentItem: props.currentItem != null ? props.currentItem.id : -1,
      title: props.title,
      totalPrice: props.totalPrice
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <table>
          <tbody>
            {this.state.lineItems.map(item =>
              <tr className={item.id === this.state.currentItem ? "current_item" : ""}
                key={item.id}>
                <LineItem lineItem={item} />
              </tr>
            )}
            <tr className="total_line">
              <td colSpan="2">Total</td>
              <td className="total_cell">{this.state.totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CartSidebar
