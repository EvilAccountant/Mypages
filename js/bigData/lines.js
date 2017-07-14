/**
 * Created by LayWin on 2017/7/10.
 */

var myChart = echarts.init(document.getElementById('lines'));

option = {
    backgroundColor: '#1F3044',//背景色
    title: {
        text: '江苏高速拥堵指数',
        x:"center",
        textStyle:{
            fontSize:16,
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
        data: ['京沪高速苏州段', '京沪高速无锡段', '沈海高速南通段', '京沪高速泰州段', '扬溧高速镇江段'],
        axisLine:{
            lineStyle:{
                color:'#66D2FF',
                width:1
            }
        },
    },
    yAxis: {
        name:'',
        type:'value',
        min:1,
        max:1.8,
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
            data:[1.43, 1.36, 1.33, 1.31, 1.29]
        },
        {
            name:'2015',
            type: 'line',
            symbol:'circle',
            data:[1.45, 1.33, 1.33, 1.32, 1.22]
        },
        {
            name:'2016',
            type: 'line',
            symbol:'circle',
            data:[1.46, 1.37, 1.36, 1.35, 1.23]
        }
    ]
};

myChart.setOption(option);