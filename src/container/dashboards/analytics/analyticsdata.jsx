import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";
import us from "../../../assets/images/flags/us_flag.jpg";
import uae from "../../../assets/images/flags/uae_flag.jpg";
import germany from "../../../assets/images/flags/germany_flag.jpg";
import argentina from "../../../assets/images/flags/argentina_flag.jpg";
import canada from "../../../assets/images/flags/canada_flag.jpg";
import china from "../../../assets/images/flags/china_flag.jpg";
import russia from "../../../assets/images/flags/russia_flag.jpg";
import france from "../../../assets/images/flags/french_flag.jpg";
import mexico from "../../../assets/images/flags/mexico_flag.jpg";


export class Totalusers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [0, 21, 54, 38, 56, 24, 65]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 40,
                    width: 120,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.1
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                stroke: {
                    show: true,
                    curve: 'straight',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                fill: {
                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },
                colors: ['#23b7e5'],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={40} width={120} />
            </div>

        );
    }
}
//
export class Bouncerate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Value',
                data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 45,
                    sparkline: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 0,
                        left: 0,
                        blur: 1,
                        color: '#fff',
                        opacity: 0.05
                    },
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 2,
                    dashArray: 0,
                },
                fill: {

                },
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    axisBorder: {
                        show: false
                    },
                },
                colors: ["rgba(132, 90, 223, 0.1)"],
                tooltip: {
                    enabled: false,
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={45} />
            </div>

        );
    }
}
//
export class Sessionbydevice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [1754, 1234, 878, 270],
            options: {

                labels: ["Total", "Cash", "Cashless", "Online"],
                chart: {
                    height: 250,
                    type: 'donut',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                dataLabels: {
                    enabled: false,
                },

                legend: {
                    show: false,
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'round',
                    colors: ["#fff"],
                    width: 0,
                    dashArray: 0,
                },
                plotOptions: {
                    pie: {
                        expandOnClick: false,
                        donut: {
                            size: '80%',
                            background: 'transparent',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                    fontSize: '20px',
                                    color: '#495057',
                                    offsetY: -4
                                },
                                value: {
                                    show: true,
                                    fontSize: '18px',
                                    color: undefined,
                                    offsetY: 8,
                                    formatter: function (val) {
                                        return val + "%";
                                    }
                                },
                                total: {
                                    show: true,
                                    showAlways: true,
                                    label: 'Total',
                                    fontSize: '22px',
                                    fontWeight: 600,
                                    color: '#495057',
                                }

                            }
                        }
                    }
                },
                colors: ["rgba(132, 90, 223, 1)", "rgba(35, 183, 229, 1)", "rgba(38, 191, 148, 1)", "rgba(245, 184, 73, 1)",],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={250} />
            </div>

        );
    }
}
//
export class TopCountries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Earns',
                    data: [24, 23, 20, 25, 27, 26, 24, 23, 23, 25, 23, 23],
                    type: 'line',
                },
                {
                    name: 'Burns',
                    data: [22, 23, 26, 22, 21, 26, 28, 26, 22, 27, 25, 26],
                    type: 'bar',
                },
            ],
            options: {
                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    height: 308,
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                plotOptions: {
                    bar: {
                        borderRadius: 5,
                        columnWidth: "40%",
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                colors: ["rgb(132, 90, 223)", "#ededed"],
                stroke: {
                    curve: ['smooth', 'stepline'],
                    width: [2, 0],
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisBorder: {
                        color: '#e9e9e9',
                    },
                }
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={330} />
            </div>

        );
    }
}
//

export class AudienceReport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Earns',
                    type: 'column',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35]
                },
                {
                    name: 'Burns',
                    type: 'line',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27]
                },
            ],
            options: {
                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    toolbar: {
                        show: false
                    },
                    type: 'line',
                    height: 250,
                },
                grid: {
                    borderColor: '#f1f1f1',
                    strokeDashArray: 3
                },
                labels: ['11AM-12PM', '12PM-1PM', '1PM-2PM', '2PM-3PM', '3PM-4PM', '4PM-5PM', '5PM-6PM', '6PM-7PM', '7PM-8PM', '8PM-9PM', '10PM-11PM', '11PM-12AM'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [1, 1.1],
                    curve: ['straight', 'smooth'],
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                xaxis: {
                    axisBorder: {
                        color: '#e9e9e9',
                    },
                },
                plotOptions: {
                    bar: {
                        columnWidth: "20%",
                        borderRadius: 2
                    }
                },
                colors: ["rgba(132, 90, 223, 1)", '#23b7e5'],
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={257} />
            </div>

        );
    }
}
//
export class Impressions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [48],
            options: {
                
                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    height: 120,
                    width: 100,
                    type: "radialBar",
                },
                colors: ["#23b7e5"],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "50%",
                            background: "#fff"
                        },
                        dataLabels: {
                            name: {
                                offsetY: -10,
                                color: "#4b9bfa",
                                fontSize: "10px",
                                show: false
                            },
                            value: {
                                offsetY: 5,
                                color: "#4b9bfa",
                                fontSize: "12px",
                                show: true,
                                fontWeight: 800
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["Followers"]
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" width={100} height={120} />
            </div>

        );
    }
}
//
export class Clicks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [65],
            options: {

                chart: {
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                    height: 120,
                    width: 100,
                    type: "radialBar",
                },
                colors: ["#f7b731"],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: "50%",
                            background: "#fff"
                        },
                        dataLabels: {
                            name: {
                                offsetY: -10,
                                color: "#4b9bfa",
                                fontSize: "10px",
                                show: false
                            },
                            value: {
                                offsetY: 5,
                                color: "#4b9bfa",
                                fontSize: "12px",
                                show: true,
                                fontWeight: 800
                            }
                        }
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["Views"]
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" width={100} height={120} />
            </div>

        );
    }
}
//
export class Sessionduration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'Total Earn',
                data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 120],
            }, {
                name: 'Total Burn',
                data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 136]
            }, {
                name: 'Avg Earn & Burn',
                data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 98]
            }],
            options: {

                chart: {
                    height: 385,
                    type: 'line',
                    toolbar: {
                        show: false,
                    },
                    background: 'none',
                    events: {
                        mounted: (chart) => {
                          chart.windowResizeHandler();
                        }
                      },
                },
                grid: {
                    borderColor: '#f2f6f7',
                },
                colors: ["rgb(132, 90, 223)", "#23b7e5", "#f5b849"],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight',
                    width: 3
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisBorder: {
                        show: false,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: false,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0
                    },
                    labels: {
                        rotate: -90,
                    }
                },
                yaxis: {
                    show: false,
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    }
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            }

        };
    }

    render() {
        return (
            <div>
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={430} />
            </div>

        );
    }
}

export const Visitorsbychannel = [
    { id: 1, icon: 'search-2-line', name: 'Md Asif Ikbal', session: '20', rate: '32', avg: '	Mirpur 2', goal: '278', pages: '29', color: 'primary' },
    { id: 2, icon: 'search-2-line', name: 'Monisha Jahan Nishi', session: '23', rate: '39', avg: 'Uttara', goal: '782', pages: '15', color: 'secondary' },
    { id: 3, icon: 'search-2-line', name: 'Najifa Yesmin Sarker', session: '26', rate: '22', avg: 'Gulshan', goal: '622', pages: '32', color: 'success' },
    { id: 4, icon: 'search-2-line', name: 'Sidratul Montaha', session: '27', rate: '25', avg: 'Wari', goal: '142', pages: '14', color: 'info' },
    { id: 5, icon: 'search-2-line', name: 'Mehnaj Ahammed', session: '30', rate: '23', avg: 'Bashundhara', goal: '178', pages: '16', color: 'primary' },
    { id: 6, icon: 'search-2-line', name: 'Md Alif Islam', session: '39', rate: '28', avg: 'Dhanmondi-2	', goal: '578', pages: '25', color: 'success' }
];
//

export const Visitorsbycountries = [
    { src: us, city: 'Item Name', badge: 'Quantity'},
    { id: 2, src: germany, city: 'Caramel', badge: '878' },
    { id: 3, src: mexico, city: 'Mocha', badge: '785' },
    { id: 4, src: uae, city: 'Classic', badge: '685' },
    { id: 5, src: argentina, city: 'ArgCinnamonentina', badge: '558' },
    { id: 6, src: russia, city: 'Traditional', badge: '418' },
    { id: 7, src: china, city: 'Hazelnut', badge: '358' },
    { id: 8, src: france, city: 'Green Tea', badge: '235' },
    { id: 9, src: canada, city: 'Sweetened', badge: '168' }
];
