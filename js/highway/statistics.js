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
        'echarts/chart/pie', // 加载map模块
    ],
    function (echarts) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('pieCharts'));

        var labelTop = {
            normal : {
                label : {
                    show : true,
                    position : 'center',
                    formatter : '{b}',
                    textStyle: {
                        fontSize: 10,
                        baseline : 'bottom'
                    }
                },
                labelLine : {
                    show : false
                }
            }
        };
        var labelFromatter = {
            normal : {
                label : {
                    formatter : function (params){
                        return 100 - params.value + '%'
                    },
                    textStyle: {
                        fontSize:16,
                        baseline : 'top'
                    }
                }
            },
        }
        var labelBottom = {
            normal : {
                color: '#ccc',
                label : {
                    show : true,
                    position : 'center'
                },
                labelLine : {
                    show : false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        var radius = [32,42];
        option = {
            legend: {
                x : 'center',
                y : 150,
                itemGap:55,
                itemWidth:30,
                itemHeight:20,
                textStyle:{
                  color:'#ffffff'
                },
                data:[
                    '冲岗','U/J型','假冒绿通车','假证','记重逃费', '黑名单','换卡换牌', '混合'
                ]
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
            series : [
                {
                    type : 'pie',
                    center : ['12.5%', '32%'],
                    radius : radius,
                    x: '0%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:46, itemStyle : labelBottom},
                        {name:'冲岗', value:54,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['37.5%', '32%'],
                    radius : radius,
                    x:'20%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:56, itemStyle : labelBottom},
                        {name:'假冒绿通车', value:44,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['62.5%', '32%'],
                    radius : radius,
                    x:'40%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:65, itemStyle : labelBottom},
                        {name:'记重逃费', value:35,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['87.5%', '32%'],
                    radius : radius,
                    x:'60%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:70, itemStyle : labelBottom},
                        {name:'换卡换牌', value:30,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['12.5%', '75%'],
                    radius : radius,
                    x:'80%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:73, itemStyle : labelBottom},
                        {name:'U/J型', value:27,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['37.5%', '75%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x: '0%',    // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'假证', value:22,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['62.5%', '75%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'20%',    // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'黑名单', value:22,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['87.5%', '75%'],
                    radius : radius,
                    y: '55%',   // for funnel
                    x:'40%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:78, itemStyle : labelBottom},
                        {name:'混合', value:22,itemStyle : labelTop}
                    ]
                },
            ]
        };

        myChart.setOption(option);
    }
);