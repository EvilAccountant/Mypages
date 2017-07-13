/**
 * Created by EvilAccountant on 2017/7/12.
 */

require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/line', // 加载map模块
    ],
    function (echarts) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('lowerLeft'));

        option = {
            title : {
                text: '折返车辆',
                textStyle:{
                    color:'#ffffff',
                    fontWeight:'normal'
                }
            },
            dataZoom: {
                show: true,
                x:80,
                y:220,
                start : 15,
                end : 85,
                height:15,
                width:400,
            },
            tooltip : {
                trigger: 'axis'
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    scale : true,
                    axisLine:{
                        lineStyle:{
                            color:'#ffffff',
                            width:0
                        }
                    },
                    axisLabel:{
                        show:true,
                        textStyle:{
                            color:'#ffffff'
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color:'#1F1D33'
                        }
                    },
                    data : [
                        '2017/7/8 00:00','2017/7/8 04:00','2017/7/8 08:00','2017/7/8 12:00','2017/7/8 16:00','2017/7/8 20:00','2017/7/8 24:00',
                        '2017/7/9 00:00','2017/7/9 04:00','2017/7/9 08:00','2017/7/9 12:00','2017/7/9 16:00','2017/7/9 20:00','2017/7/9 24:00',
                        '2017/7/10 00:00','2017/7/10 04:00','2017/7/10 08:00','2017/7/10 12:00','2017/7/10 16:00','2017/7/10 20:00','2017/7/10 24:00',
                    ]
                }
            ],
            yAxis : [
                {
                    name:'(辆)',
                    type : 'value',
                    scale : true,
                    max:'250',
                    axisLine:{
                        lineStyle:{
                            color:'#ffffff',
                            width:0
                        }
                    },
                    axisLabel:{
                        show:true,
                        textStyle:{
                            color:'#ffffff'
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color:'#1F1D33'
                        }
                    }
                }
            ],
            series : [
                {
                    type:'line',
                    smooth:true,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default',
                            }
                        }
                        },
                    data:[
                        120, 124, 36, 80, 50, 110, 100,
                        98, 101, 45, 76, 44, 105, 114,
                        112, 118, 51, 82, 61, 104, 121,
                    ]
                }
            ]
        };


        myChart.setOption(option);
    }
);