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
        var myChart = echarts.init(document.getElementById('pieCharts2'));

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
                    '冲岗','U/J型','假冒绿通车','假证','记重逃费', '甩挂','换卡换牌', '混合'
                ]
            },
            title : {
                text: '',
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
                        {name:'other', value:86, itemStyle : labelBottom},
                        {name:'冲岗', value:14,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['37.5%', '32%'],
                    radius : radius,
                    x:'20%', // for funnel
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:94, itemStyle : labelBottom},
                        {name:'假冒绿通车', value:6,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['62.5%', '32%'],
                    radius : radius,
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:49.5, itemStyle : labelBottom},
                        {name:'记重逃费', value:50.5,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['87.5%', '32%'],
                    radius : radius,
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:96, itemStyle : labelBottom},
                        {name:'换卡换牌', value:4,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['12.5%', '75%'],
                    radius : radius,
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:93, itemStyle : labelBottom},
                        {name:'U/J型', value:7,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['37.5%', '75%'],
                    radius : radius,
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:95, itemStyle : labelBottom},
                        {name:'假证', value:5,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['62.5%', '75%'],
                    radius : radius,
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:99, itemStyle : labelBottom},
                        {name:'甩挂', value:1,itemStyle : labelTop}
                    ]
                },
                {
                    type : 'pie',
                    center : ['87.5%', '75%'],
                    radius : radius,
                    itemStyle : labelFromatter,
                    data : [
                        {name:'other', value:90, itemStyle : labelBottom},
                        {name:'混合', value:10,itemStyle : labelTop}
                    ]
                },
            ]
        };

        myChart.setOption(option);
    }
);