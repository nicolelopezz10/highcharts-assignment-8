Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Countries With the Lowest Life Expectancy Compared to the U.S. (2015)'
    },
    subtitle: {
        text: 'Source: <a href= "http://data.un.org/_Docs/SYB/PDFs/SYB62_246_201907_Population%20growth%20and%20indicators%20of%20fertility%20and%20mortality.pdf"> UN data Population growth and indicators of fertility and mortality </a>'
    },
    xAxis: {
        categories: ['Lesotho', 'Central African Republic', 'Eswatini', 'Sierra Leone', 'Nigeria','United States of America'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Average Age in Years',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },

    series: [{
        data: [48.153, 48.913, 50.666, 51.416, 51.95, 78.941]
    }]
});


Highcharts.chart('containertwo', {

    title: {
        text: 'Life Expectancy Trends Over a Decade (2005 to 2015)'
    },

    subtitle: {
        text: 'Source: <a href= "http://data.un.org/_Docs/SYB/PDFs/SYB62_246_201907_Population%20growth%20and%20indicators%20of%20fertility%20and%20mortality.pdf"> UN data Population growth and indicators of fertility and mortality </a>'
    },

    yAxis: {
        title: {
            text: 'Average Age in Years'
        }
    },

    xAxis: {
 categories: [2005,2010,2015]
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },



    series: [{
        name: 'Lesotho',
        data: [44.218, 48.153, 52.774,]
    }, {
        name: 'Central African Republic',
        data: [44.099, 46, 48.913]
    }, {
        name: 'Eswatini',
        data: [43.629, 43.845, 50.666]
    }, {
        name: 'Sierra Leone',
        data: [42.031, 46.991, 48.153]
    }, {
        name: 'Nigeria',
        data: [46.942, 49.76, 51.95]
    }, {
        name: 'United States of America',
        data: [77.178, 78.192, 78.941]
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
