/**
 * Created by LayWin on 2017/7/10.
 */

var myChart = echarts.init(document.getElementById('radar'));

myChart.setOption(
    {
        baseOption: {
            timeline: {
                autoPlay : true,
                playInterval : 10000,
                symbol:'circle',
                padding:0,
                lineStyle:{
                    color:'#fff',
                    type:'solid',
                    width:1,
                },
                label:{
                    textStyle:{
                        color:'#fff',

                    },
                    normal:{
                        position:'bottom'
                    }
                },
                itemStyle:{
                    normal:{
                        color:'#fff'
                    },
                    emphasis:{
                        color:'#1e90ff'
                    }
                },
                checkpointStyle:{
                    symbol:'circle',
                    symbolSize:10,
                    color:'#1e90ff'
                },
                controlStyle:{
                    show:false
                },
                data: ['2014', '2015', '2016']
             },
            backgroundColor: '#1F3044',//背景色
            title: {
                text: '2014相关性分析',
                textStyle:{
                    fontSize:15,
                    fontWeight:'normal',
                    color:"#ffffff"
                },
                x:20,
                y:20
            },
            tooltip: {},
            radar: {
                radius:'60%',
                center:['50%','55%'],
                indicator: [
                    { name: '人口', max: 1},
                    { name: '高速里程', max: 1},
                    { name: '货车', max: 1},
                    { name: 'GDP', max: 1},
                    { name: '客车', max: 1},
                    { name: '公路里程', max: 1},
                ]
            },
            series: [
                {
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
                }
            ]
        },
        options: [
            {
                title: {
                    text: '2014相关性分析',
                    textStyle:{
                        fontSize:15,
                        fontWeight:'normal',
                        color:"#ffffff"
                    },
                    x:20,
                    y:20
                },
                series: [
                    {
                        data:[{value : [0.79, 0.57, 0.70, 0.8013, 0.717085, 0.400516]}]
                    },
                ]
            },
            {
                title: {
                    text: '2015相关性分析',
                    textStyle:{
                        fontSize:15,
                        fontWeight:'normal',
                        color:"#ffffff"
                    },
                    x:20,
                    y:20
                },
                series: [
                    {
                        data:[{value : [0.85953, 0.6, 0.762894, 0.8513, 0.757085, 0.450516]}]
                    },
                ]
            },
            {
                title: {
                    text: '2016相关性分析',
                    textStyle:{
                        fontSize:15,
                        fontWeight:'normal',
                        color:"#ffffff"
                    },
                    x:20,
                    y:20
                },
                series: [
                    {
                        data:[{value : [0.92953, 0.651386, 0.832894,  0.9513, 0.807085, 0.520516]}]
                    },
                ]
            }
        ]
    }
);