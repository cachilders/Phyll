import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';

export default class Axis extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.test);

    this.scale = d3.scale.linear();

    this.axis  = d3.svg.axis()
                   .scale(this.scale)
                   .orient(props.orientation);

    this.update_d3.call(this, props);
  }

  update_d3(props) {

    // let dates = props.data.map(d => d.date);
    // let light = props.data.map(d => d.light);

    if( !props.date ){
      this.scale
          .range([ props.height - props.bottomMargin, props.topMargin ])
          .domain([ d3.min(light) - 10, d3.max(light) + 10 ]);

      // ----------------------   DELETE ME  ------------------------
      this.axis
          .tickFormat(d => this.scale.tickFormat()(d) + '..')
          .ticks(4)
          .tickValues([ 24, 16, 8, 1 ]);
      // ------------------------  DELETE ME ------------------------

    } else {

      this.scale
          .range([ props.axisMargin, props.fullWidth - props.axisMargin ])
          .domain([ 48, 0 ]);

      this.axis
          .tickFormat(d => this.scale.tickFormat()(d) + '..')
          .ticks(4)
          .tickValues([ 24, 16, 8, 1 ]);

    }

  }

  componentWillReceiveProps(newProps) {
    this.update_d3(newProps);
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  componentDidMount() {
    this.renderAxis();
  }

  renderAxis() {
    let node = ReactDOM.findDOMNode(this);

    d3.select(node).call(this.axis);

  }

  render() {
    let translate;
    if( this.props.date ){
      translate = `translate(0, ${ this.props.height - this.props.bottomMargin })`;
    } else {
      translate = `translate(${ this.props.axisMargin }, 0)`;
    }

    return(
      <g className="axis" transform={ translate }>
      </g>
    );
  }
}
