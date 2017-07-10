/**
 * Created by LayWin on 2017/7/10.
 */

var myChart = echarts.init(document.getElementById('lines'));

option = {
    title: {
        text: 'TOP5城市拥堵指数'
    },
    legend:{
        top:'bottom',
        data:['南京','苏州','无锡','南通','徐州']
    },
    color: ["#FF0000", "#00BFFF", "#FF00FF", "#1ce322", "#000000", '#EE7942'],
    tooltip:{
        trigger: 'axis'
    },
    xAxis: {
        name:'',
        data: ['南京', '苏州', '无锡', '南通', '徐州']
    },
    yAxis: {
        name:''
    },
    series: [
        {
            name:'2014',
            type: 'line',
            data:[1.639, 1.594, 1.583, 1.409, 1.528]
        },
        {
            name:'2015',
            type: 'line',
            data:[1.672, 1.642, 1.631, 1.451, 1.467]
        },
        {
            name:'2016',
            type: 'line',
            data:[1.771, 1.700, 1.614, 1.530, 1.482]
        }
    ]
};

myChart.setOption(option);