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
                text : '时间坐标散点图',
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
                start : 30,
                end : 70
            },
            legend : {
                data : ['series1']
            },
            dataRange: {
                min: 0,
                max: 100,
                orient: 'horizontal',
                y: 30,
                x: 'center',
                //text:['高','低'],           // 文本，默认为数值文本
                color:['lightgreen','orange'],
                splitNumber: 5
            },
            grid: {
                y2: 80
            },
            xAxis : [
                {
                    type : 'time',
                    splitNumber:10
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            animation: false,
            series : [
                {
                    name:'series1',
                    type:'scatter',
                    tooltip : {
                        trigger: 'axis',
                        formatter : function (params) {
                            var date = new Date(params.value[0]);
                            return params.seriesName
                                + ' （'
                                + date.getFullYear() + '-'
                                + (date.getMonth() + 1) + '-'
                                + date.getDate() + ' '
                                + date.getHours() + ':'
                                + date.getMinutes()
                                +  '）<br/>'
                                + params.value[1] + ', '
                                + params.value[2];
                        },
                        axisPointer:{
                            type : 'cross',
                            lineStyle: {
                                type : 'dashed',
                                width : 1
                            }
                        }
                    },
                    symbolSize: function (value){
                        return Math.round(value[2]/15);
                    },
                    data: (function () {
                        var d = [];
                        var len = 0;
                        while (len++ < 500) {
                            d.push([
                                new Date(2017, 6, 12, 0, Math.round(Math.random()*1000)),
                                (Math.random()*30).toFixed(2) - 0,
                                (Math.random()*100).toFixed(2) - 0
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

