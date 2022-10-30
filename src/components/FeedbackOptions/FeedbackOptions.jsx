import React, { Component } from 'react';
import { BtnList, Button } from 'components/Expresso/Expresso.styled';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
    objKeysValues = () => {
      console.log(this.props, Object.entries(this.props.state), this.props.state);
    return Object.entries(this.props.state);
  };

  toUpperCase = stat => {
    return stat.charAt(0).toUpperCase() + stat.slice(1);
  };

  render() {
    return (
      <BtnList>
        {this.objKeysValues().map((stat, index) => {
          return (
            <li key={index}>
              <Button onClick={this.handleIncrement}>
                {this.toUpperCase(stat[0])}
              </Button>
            </li>
          );
        })}
      </BtnList>
    );
  }
}

// FeedbackOptions.propTypes = {
//   stats: PropTypes.objectOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };
export default FeedbackOptions;
