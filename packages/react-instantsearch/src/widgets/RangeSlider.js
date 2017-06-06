import connectRange from '../connectors/connectRange.js';
import React from 'react';
/**
 * Since a lot of sliders already exist, we did not include one by default.
 * However you can easily connect React InstantSearch to an existing one
 * using the [connectRange connector](connectors/connectRange.html).
 *
 * @name RangeSlider
 * @requirements To connect any slider to Algolia, the underlying attribute used must be holding numerical values.
 * @kind widget
 * @example
 *
 * // Here's an example showing how to connect the airbnb rheostat slider to React InstantSearch using the
 * // range connector
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connectRange} from 'react-instantsearch/connectors';
import Rheostat from 'rheostat';

class Range extends React.Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    currentRefinement: PropTypes.object,
    refine: PropTypes.func.isRequired,
    canRefine: PropTypes.bool.isRequired,
  };

  state = {currentValues: {min: this.props.min, max: this.props.max}};

  componentWillReceiveProps(sliderState) {
    if (sliderState.canRefine) {
      this.setState({currentValues: {min: sliderState.currentRefinement.min, max: sliderState.currentRefinement.max}});
    }
  }

  onValuesUpdated = (sliderState) => {
    this.setState({currentValues: {min: sliderState.values[0], max: sliderState.values[1]}});
  };

  onChange = (sliderState) => {
    if (this.props.currentRefinement.min !== sliderState.values[0] ||
      this.props.currentRefinement.max !== sliderState.values[1]) {
      this.props.refine({min: sliderState.values[0], max: sliderState.values[1]});
    }
  };

  render() {
    const {min, max, currentRefinement} = this.props;
    const {currentValues} = this.state;
    return min !== max ?
      <div>
        <Rheostat
          min={min}
          max={max}
          values={[currentRefinement.min, currentRefinement.max]}
          onChange={this.onChange}
          onValuesUpdated={this.onValuesUpdated}
        />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>{currentValues.min}</div>
          <div>{currentValues.max}</div>
        </div>
      </div> : null;
  }
}

const ConnectedRange = connectRange(Range);

 */
export default connectRange(() => (
  <div>
    We do not provide any Slider, see the documentation to learn how to connect one easily:
    <a
      target="_blank"
      href="https://community.algolia.com/react-instantsearch/widgets/RangeSlider.html"
    >
      https://community.algolia.com/react-instantsearch/widgets/RangeSlider.html
    </a>
  </div>
));