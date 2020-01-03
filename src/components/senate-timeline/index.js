
import './style.css';



import React from 'react';
import {curveCatmullRom} from 'd3-shape';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from 'react-vis';

export default function Example(props) {
  return (
    <XYPlot width={300} height={300}>
      <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
      <VerticalGridLines style={{stroke: '#B7E9ED'}} />
      <XAxis
        title="X Axis"
        style={{
          line: {stroke: '#ADDDE1'},
          ticks: {stroke: '#ADDDE1'},
          text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
        }}
      />
      <YAxis title="Y Axis" />
      <LineSeries
        className="first-series"
        data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
        style={{
          strokeLinejoin: 'round',
          strokeWidth: 4
        }}
      />
      <LineSeries className="second-series" data={null} />
      <LineSeries
        className="third-series"
        curve={'curveMonotoneX'}
        data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
        strokeDasharray="7, 3"
      />
      <LineSeries
        className="fourth-series"
        curve={curveCatmullRom.alpha(0.5)}
        data={[{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 2}]}
      />
    </XYPlot>
  );
}


// import ShowcaseButton from '../showcase-components/showcase-button';


// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   VerticalGridLines,
//   HorizontalGridLines,
//   MarkSeries,
//   MarkSeriesCanvas,
//   Hint
// } from 'react-vis';

// function getRandomData() {
//   return new Array(100).fill(0).map(row => ({
//     x: Math.random() * 10,
//     y: Math.random() * 20,
//     size: Math.random() * 10,
//     color: Math.random() * 10,
//     opacity: Math.random() * 0.5 + 0.5
//   }));
// }
// const colorRanges = {
//   typeA: ['#59E4EC', '#0D676C'],
//   typeB: ['#EFC1E3', '#B52F93']
// };

// const randomData = getRandomData();
// const nextType = {
//   typeA: 'typeB',
//   typeB: 'typeA'
// };

// const nextModeContent = {
//   canvas: 'SWITCH TO SVG',
//   svg: 'SWITCH TO CANVAS'
// };

// const drawModes = ['canvas', 'svg'];

// export default class Example extends React.Component {
//   state = {
//     drawMode: 0,
//     data: randomData,
//     colorType: 'typeA',
//     value: false
//   };

//   render() {
//     const {drawMode, data, colorType} = this.state;
//     const markSeriesProps = {
//       animation: true,
//       className: 'mark-series-example',
//       sizeRange: [5, 15],
//       seriesId: 'my-example-scatterplot',
//       colorRange: colorRanges[colorType],
//       opacityType: 'literal',
//       data,
//       onNearestXY: value => this.setState({value})
//     };

//     const mode = drawModes[drawMode];
//     return (
//       <div className="canvas-wrapper">

//         <XYPlot
//           onMouseLeave={() => this.setState({value: false})}
//           width={600}
//           height={300}
//         >
//           <VerticalGridLines />
//           <HorizontalGridLines />
//           <XAxis />
//           <YAxis />
//           {mode === 'canvas' && <MarkSeriesCanvas {...markSeriesProps} />}
//           {mode === 'svg' && <MarkSeries {...markSeriesProps} />}
//           {this.state.value ? <Hint value={this.state.value} /> : null}
//         </XYPlot>
//       </div>
//     );
//   }
// }