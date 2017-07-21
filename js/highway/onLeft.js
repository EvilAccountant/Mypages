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
                max: 100,
                y: 'center',
                text:['高','低'],           // 文本，默认为数值文本
                color:['#005fff','#3fa4ff','#00ffed'],
                calculable : true
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
            xAxis : [
                {
                    type : 'time',
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
                        // var len = 600;
                        // while (len--) {
                        //     d.push([
                        //         new Date(2017, 6, 8, 0, Math.round(Math.random()*4322)),
                        //         (Math.random()*600).toFixed(2) - 0,//Y范围
                        //         (Math.random()*100).toFixed(2) - 0 //value（颜色）
                        //     ]);
                        // }
                        len = 800;
                        while (len--) {
                            d.push([
                                new Date(2017, 6, 8, 0, Math.round(Math.random()*4322)),
                                (Math.random()*300).toFixed(2) - 0,
                                (Math.random()*33).toFixed(2) - 0
                            ]);
                        }
                        len = 300;
                        while (len--) {
                            d.push([
                                new Date(2017, 6, 8, 0, Math.round(Math.random()*4322)),
                                (Math.random()*300+200).toFixed(2) - 0,
                                (Math.random()*88).toFixed(2) - 0
                            ]);
                        }
                        len = 200;
                        while (len--) {
                            d.push([
                                new Date(2017, 6, 8, 0, Math.round(Math.random()*4322)),
                                (Math.random()*400+200).toFixed(2) - 0,
                                (Math.random()*66+33).toFixed(2) - 0
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