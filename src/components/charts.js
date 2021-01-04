import React, { Component } from 'react'
import Histogram from 'react-chart-histogram';


class charts extends Component {
  render() { 
    const labels = ['2016', '2017', '2018','2019','2020','2021'];
    const data = [324, 45, 672, 243,195,550];
    const options = { fillColor: '#169de0', strokeColor: '#169de0' };
    return (
      <div>
      <Histogram
          xLabels={labels}
          yValues={data}
          width='400'
          height='200'
          options={options}
      />
      </div>
  )
  }
}
export default charts; 