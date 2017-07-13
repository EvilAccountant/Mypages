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
        var myChart = echarts.init(document.getElementById('onLeft'));

        option = {
            tooltip : {
                trigger: 'item',
            },
            title : {
                text: '车辆空载比例',
                x: 'left',
                y:'top',
                textStyle:{
                    color:'#ffffff',
                    fontWeight:'normal'
                }
            },
            dataRange: {
                min: 0,
                max: 600,
                y: 'center',
                text:['高','低'],           // 文本，默认为数值文本
                color:['#00aaff','#00ffff'],
                calculable : true
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
            xAxis : [
                {
                    type : 'value',
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
                }
            ],
            yAxis : [
                {
                    name:'km',
                    type : 'value',
                    position:'right',
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
                }
            ],
            animation: false,
            series : [
                {
                    type:'scatter',
                    symbolSize:3,
                    data: (function () {
                        var d = [];
                        var len = 600;
                        var value;
                        while (len--) {
                            value = (Math.random()*600).toFixed(2) - 0;
                            d.push([
                                (Math.random()*value + value).toFixed(2) - 0,
                                (Math.random()*value).toFixed(2) - 0,
                                value
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