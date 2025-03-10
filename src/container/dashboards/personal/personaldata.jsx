import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";

// 


export class Watertracking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [98, 110, 80, 145, 105, 112, 87, 148, 102]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 115,
          type: 'area',
          fontFamily: 'Roboto, Arial, sans-serif',
          foreColor: '#5d6162',
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }
        },
        tooltip: {
          enabled: true,
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: undefined,
        },
        grid: {
          borderColor: 'transparent',
        },
        xaxis: {
          crosshairs: {
            show: false,
          }
        },
        yaxis: {
        stepSize: 5
        },
        colors: ["rgb(132, 90, 223)"],
        stroke: {
          width: [1],
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          }
        },
      }

    };
  }

  render() {
    return (
      <div>
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={115} />
      </div>

    );
  }
}
//
export class Sleeptracking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [102, 148, 87, 112, 105, 145, 80, 110, 98]
      }],
      options: {
        chart: {
          events: {
            mounted: (chart) => {
              chart.windowResizeHandler();
            }
          },
          height: 115,
          type: 'area',
          fontFamily: 'Roboto, Arial, sans-serif',
          foreColor: '#5d6162',
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }
        },
        tooltip: {
          enabled: true,
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: undefined,
        },
        grid: {
          borderColor: 'transparent',
        },
        xaxis: {
          crosshairs: {
            show: false,
          }
        },
          yaxis: {
            stepSize: 5
            },
        colors: ["#64af6d"],
        stroke: {
          width: [1],
        },
        fill: {
          type: 'gradient',
          gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
            stops: [0, 60],
          }
        },
      }

    };
  }

  render() {
    return (
      <div>
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={115} />
      </div>

    );
  }
}