/**
 * Created by LayWin on 2017/7/10.
 */

var myChart = echarts.init(document.getElementById('lines'));

option = {
    backgroundColor: '#000000',//背景色
    title: {
        text: 'TOP5城市拥堵指数',
        x:"center",
        textStyle:{
            fontSize:15,
            color:"#ffffff"
        },
    },
    legend:{
        top:'bottom',
        data:[
            {
                name: '2014',
                textStyle:{
                    color:"#ffffff"
                }
        },
            {
                name: '2015',
            textStyle:{
                color:"#ffffff"
            }
        },
            {
                name: '2016',
                textStyle:{
                    color:"#ffffff"
                }
            },
        ]
    },
    color: ["#FF0000", "#00BFFF", "#FFF500"],
    tooltip:{
        trigger: 'axis'
    },
    xAxis: {
        name:'',
        data: ['南京', '苏州', '无锡', '南通', '徐州'],
        axisLine:{
            lineStyle:{
                color:'#66D2FF',
                width:1
            }
        },
    },
    yAxis: {
        name:'',
        axisLine:{
            lineStyle:{
                color:'#66D2FF',
                width:1
            }
        },
    },
    series: [
        {
            name:'2014',
            type: 'line',
            symbol:'circle',
            data:[1.639, 1.594, 1.583, 1.409, 1.528]
        },
        {
            name:'2015',
            type: 'line',
            symbol:'circle',
            data:[1.672, 1.642, 1.631, 1.451, 1.467]
        },
        {
            name:'2016',
            type: 'line',
            symbol:'circle',
            data:[1.771, 1.700, 1.614, 1.530, 1.482]
        }
    ]
};

myChart.setOption(option);