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
        'echarts/chart/bar', // 加载map模块
    ],
    function (echarts) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('onRight'));

        option = {
            title : {
                text: '车辆重载里程',
                textStyle:{
                    color:'#ffffff',
                    fontWeight:'normal'
                }
            },
            tooltip : {
                trigger: 'axis'
            },
            calculable : true,
            xAxis : [
                {
                    name:'(km)',
                    type : 'category',
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
                    data : ['0-50','50-100','100-150','150-200','200-250','250-300', '300+']
                }
            ],
            yAxis : [
                {
                    name:'(辆)',
                    type : 'value',
                    position:'left',
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
            series : [
                {
                    type:'bar',
                    itemStyle:{
                        normal:{
                            color:'#fe764f',
                            barBorderRadius:[10, 10, 0, 0],
                            label:{
                                show:true,
                                position:'top',
                                textStyle:{
                                    color:'#ffffff'
                                }
                            }
                        },
                        emphasis:{
                            barBorderRadius:[10, 10, 0, 0],
                            label:{
                                show:true,
                                position:'top',
                                textStyle:{
                                    color:'#ffffff'
                                }
                            }
                        },
                    },
                    data:[54, 274, 150, 288, 187, 156, 100],
                }
            ]
        };


        myChart.setOption(option);
    }
);