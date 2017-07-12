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
                text: '本月逃费统计',
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
                color:['lightgreen','yellow'],
                calculable : true
            },
            xAxis : [
                {
                    type : 'value',
                    scale : true
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    position:'right',
                    scale : true
                }
            ],
            animation: false,
            series : [
                {
                    name:'scatter1',
                    type:'scatter',
                    symbolSize:5,
                    data: (function () {
                        var d = [];
                        var len = 500;
                        var value;
                        while (len--) {
                            value = (Math.random()*100).toFixed(2) - 0;
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