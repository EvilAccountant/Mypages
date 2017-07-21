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
                x:55,
                y:235,
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
                        interval:2,
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
                        '00 : 00\n07 - 08','04 : 00\n07 - 08','08 : 00\n07 - 08','12 : 00\n07 - 08','16 : 00\n07 - 08','20 : 00\n07 - 08','24 : 00\n07 - 08',
                        '00 : 00\n07 - 09','04 : 00\n07 - 09','08 : 00\n07 - 09','12 : 00\n07 - 09','16 : 00\n07 - 09','20 : 00\n07 - 09','24 : 00\n07 - 09',
                        '00 : 00\n07 - 10','04 : 00\n07 - 10','08 : 00\n07 - 10','12 : 00\n07 - 10','16 : 00\n07 - 10','20 : 00\n07 - 10','24 : 00\n07 - 10',
                    ]
                }
            ],
            yAxis:[
                {
                    name:'(辆)',
                    type: 'value',
                    scale: true,
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
                    ],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                }
            ]
        };


        myChart.setOption(option);
    }
);