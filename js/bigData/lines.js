/**
 * Created by LayWin on 2017/7/10.
 */

var myChart = echarts.init(document.getElementById('lines'));

option = {
    backgroundColor: '#1F3044',//背景色
    title: {
        text: '江苏高速拥堵指数',
        textStyle:{
            fontSize:16,
            color:"#ffffff",
            fontWeight:'normal'
        },
        x:20,
        y:20
    },
    legend:{
        x:100,
        y:60,
        data:[
            {
                name: '2014',
                textStyle:{
                    color:"#ffffff"
                },
                icon:'circle'
            },
            {
                name: '2015',
                textStyle:{
                color:"#ffffff"
                },
                icon:'circle'
            },
            {
                name: '2016',
                textStyle:{
                    color:"#ffffff"
                },
                icon:'circle'
            },
        ]
    },
    color: ["#FF0000", "#00BFFF", "#FFF500"],
    tooltip:{
        trigger: 'axis'
    },
    grid:{
        top:110,
        left:'15%',
        width:245,
        height:250,
    },
    xAxis: {
        name:'',
        type:'category',
        boundaryGap:false,
        axisLabel:{interval:0},
        data: ['京沪高速\n苏州段', '京沪高速\n无锡段', '沈海高速\n南通段', '京沪高速\n泰州段', '扬溧高速\n镇江段'],
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
        min:1.1,
        max:1.6,
        splitNumber:8,//分隔次数
        axisLine:{
            lineStyle:{
                color:'#66D2FF',
                width:1
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#344557',

            }
        }
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