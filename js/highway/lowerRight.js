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
        'echarts/chart/scatter', // 加载map模块
    ],
    function (echarts) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('lowerRight'));

        option = {
            title : {
                text : '超时车辆',
                textStyle:{
                    color:'#ffffff',
                    fontWeight:'normal'
                }
            },
            tooltip : {
                trigger: 'axis',
                axisPointer:{
                    show: true,
                    type : 'cross',
                    lineStyle: {
                        type : 'dashed',
                        width : 1
                    }
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

            grid: {
                y2: 70
            },
            xAxis : [
                {
                    type : 'time',
                    splitNumber:6,
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
                }
            ],
            yAxis : [
                {
                    name:'(%)',
                    type : 'value',
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
                }
            ],
            series : [
                {
                    type:'scatter',
                    tooltip : {
                        trigger: 'axis',
                        formatter : function (params) {
                            var date = new Date(params.value[0]);
                            return params.seriesName
                                + '('+ date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' '
                                + date.getHours() + ':' + date.getMinutes() +  ')<br/>'
                                + params.value[1] + ', ' + params.value[2];
                        },
                        axisPointer:{
                            type : 'cross',//辅助线：交叉类型
                            lineStyle: {
                                type : 'dashed',
                                width : 1
                            }
                        }
                    },
                    itemStyle:{
                        normal:{
                            color:'rgba(0,255,255,0.6)'
                        }
                    },
                    symbolSize: function (value){
                        return Math.round(value[2]/10);
                    },
                    data: (function () {
                        var d = [];
                        var len = 0;
                        var now = new Date();
                        var value;
                        while (len++ < 300) {
                            d.push([
                                new Date(2017, 6, 8, 0, Math.round(Math.random()*4322)),
                                (Math.random()*50+40).toFixed(2) - 0,//散点Y轴范围
                                (Math.random()*30).toFixed(2) - 0//散点值/半径大小
                            ]);
                        }
                        len=0;
                        while (len++ < 300) {
                            d.push([
                                new Date(2017, 6, 8, 0, Math.round(Math.random()*4322)),
                                (Math.random()*50).toFixed(2) - 0,//散点Y轴范围
                                (Math.random()*80).toFixed(2) - 0//散点值/半径大小
                            ]);
                        }
                        len=0;
                        while (len++ < 100) {
                            d.push([
                                new Date(2017, 6, 8, 0, Math.round(Math.random()*4322)),
                                (Math.random()*200).toFixed(2) - 0,//散点Y轴范围
                                (Math.random()*20).toFixed(2) - 0//散点值/半径大小
                            ]);
                        }
                        return d;
                    })()
                }
            ]
        };


        myChart.setOption(option);
    }
);

