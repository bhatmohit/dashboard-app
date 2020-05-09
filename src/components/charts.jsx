import React, { Component } from 'react';
//import './App.css';
//import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, YAxis, XAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries} from 'react-vis';


class Charts extends Component{
  
//   constructor(props) {
//     super(props)
//     this.state = {
//         results: [],
//     };
// }
 
 
   render() {
    // const data = [
    //   {x: 0, y: 8},
    //   {x: 1, y: 5},
    //   {x: 2, y: 4},
    //   {x: 3, y: 9},
    //   {x: 4, y: 1},
    //   {x: 5, y: 7},
    //   {x: 6, y: 6},
    //   {x: 7, y: 3},
    //   {x: 8, y: 2},
    //   {x: 9, y: 0}
    // ];
    // if (this.props.data !== 'undefined')
    // {
    const dataArr = this.props.data.map((d)=> {
      return {x: d.year + '/' + d.quarter, 
      y: parseFloat(d.count/1000)}
  });
  // }
    return (
      <XYPlot
      xType="ordinal"
      width={1000}
      height={500}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis title="Period of time(year and quarter)" />
      <YAxis title="Number of pull requests (thousands)" />
          {/* <LineSeries
              data={dataArr}
              style={{stroke: 'violet', strokeWidth: 3}}/> */}
          <VerticalBarSeries
              data={dataArr}
              // style={{stroke: 'violet', strokeWidth: 3}}
              />
  </XYPlot> 
    );
  }
}

export default Charts;