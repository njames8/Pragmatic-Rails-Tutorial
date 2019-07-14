import React from "react"
import PropTypes from "prop-types"
class Navigation extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <React.Fragment key={item.name}>
            <li><a href={item.link}>{item.name}</a></li>
          </React.Fragment>
        ))}
      </ul>
    );
  }
}

export default Navigation;
