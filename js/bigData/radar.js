/**
 * Created by LayWin on 2017/7/10.
 */

var myChart = echarts.init(document.getElementById('radar'));

option = {
    backgroundColor: '#000000',//背景色
    title: {
        text: '相关性分析',
        textStyle:{
            fontSize:15,
            color:"#ffffff"
        },
    },
    tooltip: {},
    legend: {
        // data: ['相关性分析', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '人口', max: 1},
            { name: '高速里程', max: 1},
            { name: '公路里程', max: 1},
            { name: '货车', max: 1},
            { name: '客车', max: 1},
            { name: 'GDP', max: 1}
        ]
    },
    series: [{
        name: '相关性分析',
        type: 'radar',
        itemStyle:{
          normal:{
              color:'##EFCE56'//点颜色
          }
        },
        lineStyle:{
            normal:{
                color:'#EFCE56',//线颜色
                width:1,
                type:'solid'
            }
        },
        areaStyle:{
          normal:{
              color:'#EFCE56'//包裹区域颜色
          }
        },
        data : [
            {
                value : [0.95, 0.96, 0.91, 0.5, 0.94, 0.93],
            },
        ]
    }]
};

myChart.setOption(option);