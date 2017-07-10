/**
 * Created by EvilAccountant on 2017/6/28.
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
        'echarts/chart/map', // 加载map模块
    ],
    function (echarts) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('timeMap'));

        var dataMap={};

        dataMap.NJLines = {
            2016:[
                [{name:'南京市', smoothness:0.1}, {name:'苏州市',value:100}],
                [{name:'南京市', smoothness:0.1}, {name:'无锡市',value:100}],
                [{name:'南京市', smoothness:0.1}, {name:'南通市',value:100}],
                [{name:'南京市', smoothness:0.1}, {name:'常州市',value:100}],
                [{name:'南京市', smoothness:0.1}, {name:'徐州市',value:100}],
                [{name:'南京市', smoothness:0.1}, {name:'盐城市',value:100}],
                [{name:'南京市', smoothness:0.1}, {name:'扬州市',value:100}],
                [{name:'南京市', smoothness:0.1}, {name:'泰州市',value:100}],
                [{name:'南京市', smoothness:0.1}, {name:'镇江市',value:100}],
                [{name:'南京市', smoothness:0.1}, {name:'淮安市',value:100}],
                [{name:'南京市', smoothness:0.1}, {name:'连云港市',value:100}],
                [{name:'南京市', smoothness:0.1}, {name:'宿迁市',value:100}]
            ],
            2015:[
                [{name:'南京市', smoothness:0.1}, {name:'苏州市',value:50}],
                [{name:'南京市', smoothness:0.1}, {name:'无锡市',value:50}],
                [{name:'南京市', smoothness:0.1}, {name:'南通市',value:50}],
                [{name:'南京市', smoothness:0.1}, {name:'常州市',value:50}],
                [{name:'南京市', smoothness:0.1}, {name:'徐州市',value:50}],
                [{name:'南京市', smoothness:0.1}, {name:'盐城市',value:50}],
                [{name:'南京市', smoothness:0.1}, {name:'扬州市',value:50}],
                [{name:'南京市', smoothness:0.1}, {name:'泰州市',value:50}],
                [{name:'南京市', smoothness:0.1}, {name:'镇江市',value:50}],
                [{name:'南京市', smoothness:0.1}, {name:'淮安市',value:50}],
                [{name:'南京市', smoothness:0.1}, {name:'连云港市',value:50}],
                [{name:'南京市', smoothness:0.1}, {name:'宿迁市',value:50}]
            ],
            2014:[
                [{name:'南京市', smoothness:0.1}, {name:'苏州市',value:0}],
                [{name:'南京市', smoothness:0.1}, {name:'无锡市',value:0}],
                [{name:'南京市', smoothness:0.1}, {name:'南通市',value:0}],
                [{name:'南京市', smoothness:0.1}, {name:'常州市',value:0}],
                [{name:'南京市', smoothness:0.1}, {name:'徐州市',value:0}],
                [{name:'南京市', smoothness:0.1}, {name:'盐城市',value:0}],
                [{name:'南京市', smoothness:0.1}, {name:'扬州市',value:0}],
                [{name:'南京市', smoothness:0.1}, {name:'泰州市',value:0}],
                [{name:'南京市', smoothness:0.1}, {name:'镇江市',value:0}],
                [{name:'南京市', smoothness:0.1}, {name:'淮安市',value:0}],
                [{name:'南京市', smoothness:0.1}, {name:'连云港市',value:0}],
                [{name:'南京市', smoothness:0.1}, {name:'宿迁市',value:0}]
            ],
        }

        dataMap.NJPoint={
            2016:[
                {name:'苏州市',value:100},
                {name:'南京市',value:100},
                {name:'无锡市',value:100},
                {name:'南通市',value:100},
                {name:'常州市',value:100},
                {name:'徐州市',value:100},
                {name:'盐城市',value:100},
                {name:'扬州市',value:100},
                {name:'泰州市',value:100},
                {name:'镇江市',value:100},
                {name:'淮安市',value:100},
                {name:'连云港市',value:100},
                {name:'宿迁市',value:100},
            ],
            2015:[
                {name:'苏州市',value:50},
                {name:'南京市',value:50},
                {name:'无锡市',value:50},
                {name:'南通市',value:50},
                {name:'常州市',value:50},
                {name:'徐州市',value:50},
                {name:'盐城市',value:50},
                {name:'扬州市',value:50},
                {name:'泰州市',value:50},
                {name:'镇江市',value:50},
                {name:'淮安市',value:50},
                {name:'连云港市',value:50},
                {name:'宿迁市',value:50},
            ],
            2014:[
                {name:'苏州市',value:0},
                {name:'南京市',value:0},
                {name:'无锡市',value:0},
                {name:'南通市',value:0},
                {name:'常州市',value:0},
                {name:'徐州市',value:0},
                {name:'盐城市',value:0},
                {name:'扬州市',value:0},
                {name:'泰州市',value:0},
                {name:'镇江市',value:0},
                {name:'淮安市',value:0},
                {name:'连云港市',value:0},
                {name:'宿迁市',value:0},
            ],
        }

        dataMap.SZLines = {
            2016:[
                [{name:'苏州市', smoothness:0.1}, {name:'南京市',value:100}],
                [{name:'苏州市', smoothness:0.1}, {name:'无锡市',value:100}],
                [{name:'苏州市', smoothness:0.1}, {name:'南通市',value:100}],
                [{name:'苏州市', smoothness:0.1}, {name:'常州市',value:100}],
                [{name:'苏州市', smoothness:0.1}, {name:'徐州市',value:100}],
                [{name:'苏州市', smoothness:0.1}, {name:'盐城市',value:100}],
                [{name:'苏州市', smoothness:0.1}, {name:'扬州市',value:100}],
                [{name:'苏州市', smoothness:0.1}, {name:'泰州市',value:100}],
                [{name:'苏州市', smoothness:0.1}, {name:'镇江市',value:100}],
                [{name:'苏州市', smoothness:0.1}, {name:'淮安市',value:100}],
                [{name:'苏州市', smoothness:0.1}, {name:'连云港市',value:100}],
                [{name:'苏州市', smoothness:0.1}, {name:'宿迁市',value:100}]
            ],
            2015:[
                [{name:'苏州市', smoothness:0.1}, {name:'南京市',value:50}],
                [{name:'苏州市', smoothness:0.1}, {name:'无锡市',value:50}],
                [{name:'苏州市', smoothness:0.1}, {name:'南通市',value:50}],
                [{name:'苏州市', smoothness:0.1}, {name:'常州市',value:50}],
                [{name:'苏州市', smoothness:0.1}, {name:'徐州市',value:50}],
                [{name:'苏州市', smoothness:0.1}, {name:'盐城市',value:50}],
                [{name:'苏州市', smoothness:0.1}, {name:'扬州市',value:50}],
                [{name:'苏州市', smoothness:0.1}, {name:'泰州市',value:50}],
                [{name:'苏州市', smoothness:0.1}, {name:'镇江市',value:50}],
                [{name:'苏州市', smoothness:0.1}, {name:'淮安市',value:50}],
                [{name:'苏州市', smoothness:0.1}, {name:'连云港市',value:50}],
                [{name:'苏州市', smoothness:0.1}, {name:'宿迁市',value:50}]
            ],
            2014:[
                [{name:'苏州市', smoothness:0.1}, {name:'南京市',value:0}],
                [{name:'苏州市', smoothness:0.1}, {name:'无锡市',value:0}],
                [{name:'苏州市', smoothness:0.1}, {name:'南通市',value:0}],
                [{name:'苏州市', smoothness:0.1}, {name:'常州市',value:0}],
                [{name:'苏州市', smoothness:0.1}, {name:'徐州市',value:0}],
                [{name:'苏州市', smoothness:0.1}, {name:'盐城市',value:0}],
                [{name:'苏州市', smoothness:0.1}, {name:'扬州市',value:0}],
                [{name:'苏州市', smoothness:0.1}, {name:'泰州市',value:0}],
                [{name:'苏州市', smoothness:0.1}, {name:'镇江市',value:0}],
                [{name:'苏州市', smoothness:0.1}, {name:'淮安市',value:0}],
                [{name:'苏州市', smoothness:0.1}, {name:'连云港市',value:0}],
                [{name:'苏州市', smoothness:0.1}, {name:'宿迁市',value:0}]
            ],
        }

        dataMap.SZPoint={
            2016:[
                {name:'苏州市',value:100},
                {name:'南京市',value:100},
                {name:'无锡市',value:100},
                {name:'南通市',value:100},
                {name:'常州市',value:100},
                {name:'徐州市',value:100},
                {name:'盐城市',value:100},
                {name:'扬州市',value:100},
                {name:'泰州市',value:100},
                {name:'镇江市',value:100},
                {name:'淮安市',value:100},
                {name:'连云港市',value:100},
                {name:'宿迁市',value:100},
            ],
            2015:[
                {name:'苏州市',value:50},
                {name:'南京市',value:50},
                {name:'无锡市',value:50},
                {name:'南通市',value:50},
                {name:'常州市',value:50},
                {name:'徐州市',value:50},
                {name:'盐城市',value:50},
                {name:'扬州市',value:50},
                {name:'泰州市',value:50},
                {name:'镇江市',value:50},
                {name:'淮安市',value:50},
                {name:'连云港市',value:50},
                {name:'宿迁市',value:50},
            ],
            2014:[
                {name:'苏州市',value:0},
                {name:'南京市',value:0},
                {name:'无锡市',value:0},
                {name:'南通市',value:0},
                {name:'常州市',value:0},
                {name:'徐州市',value:0},
                {name:'盐城市',value:0},
                {name:'扬州市',value:0},
                {name:'泰州市',value:0},
                {name:'镇江市',value:0},
                {name:'淮安市',value:0},
                {name:'连云港市',value:0},
                {name:'宿迁市',value:0},
            ],
        }

        dataMap.SQLines = {
            2016:[
                [{name:'宿迁市', smoothness:0.1}, {name:'南京市',value:100}],
                [{name:'宿迁市', smoothness:0.1}, {name:'苏州市',value:100}]
                [{name:'宿迁市', smoothness:0.1}, {name:'无锡市',value:100}],
                [{name:'宿迁市', smoothness:0.1}, {name:'南通市',value:100}],
                [{name:'宿迁市', smoothness:0.1}, {name:'常州市',value:100}],
                [{name:'宿迁市', smoothness:0.1}, {name:'徐州市',value:100}],
                [{name:'宿迁市', smoothness:0.1}, {name:'盐城市',value:100}],
                [{name:'宿迁市', smoothness:0.1}, {name:'扬州市',value:100}],
                [{name:'宿迁市', smoothness:0.1}, {name:'泰州市',value:100}],
                [{name:'宿迁市', smoothness:0.1}, {name:'镇江市',value:100}],
                [{name:'宿迁市', smoothness:0.1}, {name:'淮安市',value:100}],
                [{name:'宿迁市', smoothness:0.1}, {name:'连云港市',value:100}],
            ],
            2015:[
                [{name:'宿迁市', smoothness:0.1}, {name:'南京市',value:50}],
                [{name:'宿迁市', smoothness:0.1}, {name:'苏州市',value:50}],
                [{name:'宿迁市', smoothness:0.1}, {name:'无锡市',value:50}],
                [{name:'宿迁市', smoothness:0.1}, {name:'南通市',value:50}],
                [{name:'宿迁市', smoothness:0.1}, {name:'常州市',value:50}],
                [{name:'宿迁市', smoothness:0.1}, {name:'徐州市',value:50}],
                [{name:'宿迁市', smoothness:0.1}, {name:'盐城市',value:50}],
                [{name:'宿迁市', smoothness:0.1}, {name:'扬州市',value:50}],
                [{name:'宿迁市', smoothness:0.1}, {name:'泰州市',value:50}],
                [{name:'宿迁市', smoothness:0.1}, {name:'镇江市',value:50}],
                [{name:'宿迁市', smoothness:0.1}, {name:'淮安市',value:50}],
                [{name:'宿迁市', smoothness:0.1}, {name:'连云港市',value:50}],
            ],
            2014:[
                [{name:'宿迁市', smoothness:0.1}, {name:'南京市',value:0}],
                [{name:'宿迁市', smoothness:0.1}, {name:'苏州市',value:0}],
                [{name:'宿迁市', smoothness:0.1}, {name:'无锡市',value:0}],
                [{name:'宿迁市', smoothness:0.1}, {name:'南通市',value:0}],
                [{name:'宿迁市', smoothness:0.1}, {name:'常州市',value:0}],
                [{name:'宿迁市', smoothness:0.1}, {name:'徐州市',value:0}],
                [{name:'宿迁市', smoothness:0.1}, {name:'盐城市',value:0}],
                [{name:'宿迁市', smoothness:0.1}, {name:'扬州市',value:0}],
                [{name:'宿迁市', smoothness:0.1}, {name:'泰州市',value:0}],
                [{name:'宿迁市', smoothness:0.1}, {name:'镇江市',value:0}],
                [{name:'宿迁市', smoothness:0.1}, {name:'淮安市',value:0}],
                [{name:'宿迁市', smoothness:0.1}, {name:'连云港市',value:0}],
            ],
        }

        dataMap.SQPoint={
            2016:[
                {name:'苏州市',value:100},
                {name:'南京市',value:100},
                {name:'无锡市',value:100},
                {name:'南通市',value:100},
                {name:'常州市',value:100},
                {name:'徐州市',value:100},
                {name:'盐城市',value:100},
                {name:'扬州市',value:100},
                {name:'泰州市',value:100},
                {name:'镇江市',value:100},
                {name:'淮安市',value:100},
                {name:'连云港市',value:100},
                {name:'宿迁市',value:100},
            ],
            2015:[
                {name:'苏州市',value:50},
                {name:'南京市',value:50},
                {name:'无锡市',value:50},
                {name:'南通市',value:50},
                {name:'常州市',value:50},
                {name:'徐州市',value:50},
                {name:'盐城市',value:50},
                {name:'扬州市',value:50},
                {name:'泰州市',value:50},
                {name:'镇江市',value:50},
                {name:'淮安市',value:50},
                {name:'连云港市',value:50},
                {name:'宿迁市',value:50},
            ],
            2014:[
                {name:'苏州市',value:0},
                {name:'南京市',value:0},
                {name:'无锡市',value:0},
                {name:'南通市',value:0},
                {name:'常州市',value:0},
                {name:'徐州市',value:0},
                {name:'盐城市',value:0},
                {name:'扬州市',value:0},
                {name:'泰州市',value:0},
                {name:'镇江市',value:0},
                {name:'淮安市',value:0},
                {name:'连云港市',value:0},
                {name:'宿迁市',value:0},
            ],
        }

        var option = {
            timeline:{
                data:[
                    '2014','2015','2016'
                ],
                autoPlay : true,
                playInterval : 3000
            },
            options:[
                {
                    backgroundColor: '#1b1b1b',
                    color: ['gold','aqua','lime'],
                    title : {
                        text: '2014江苏省城际流向流量图',
                        x:'center',
                        textStyle : {
                            color: '#fff'
                        }
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: '{b}'
                    },
                    legend: {
                        orient: 'vertical',
                        x:'left',
                        data:['南京市', '苏州市', '宿迁市'],
                        selectedMode: 'single',
                        selected:{
                            '苏州市' : false,
                            '宿迁市' : false,
                        },
                        textStyle : {
                            color: '#fff'
                        }
                    },
                    dataRange: {
                        min : 0,
                        max : 100,
                        calculable : true,
                        color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
                        textStyle:{
                            color:'#fff'
                        }
                    },
                    series:[
                        {
                            name: '南京市',
                            type: 'map',
                            roam: true,
                            hoverable: false,
                            mapType: '江苏',
                            itemStyle:{
                                normal:{
                                    borderColor:'rgba(100,149,237,1)',
                                    borderWidth:0.5,
                                    areaStyle:{
                                        color: '#1b1b1b'
                                    }
                                }
                            },
                            data:[],
                            geoCoord: {
                                '苏州市': [120.619585,31.299379],
                                '南京市': [118.767413,32.041544],
                                '无锡市': [120.301663,31.574729],
                                '南通市': [120.864608,32.016212],
                                '常州市': [119.946973,31.772752],
                                '徐州市': [117.184811,34.261792],
                                '盐城市': [120.139998,33.377631],
                                '扬州市': [119.421003,32.393159],
                                '泰州市': [119.915176,32.484882],
                                '镇江市': [119.452753,32.204402],
                                '淮安市': [119.021265,33.597506],
                                '连云港市': [119.178821,34.600018],
                                '宿迁市': [118.275162,33.963008]
                            },
                            //线
                            markLine : {
                                smooth: true,
                                effect: {
                                    show: true,
                                    scaleSize: 1,
                                    period: 30,
                                    color: '#fff',
                                    shadowBlur: 10,
                                },
                                itemStyle: {
                                    normal: {
                                        borderWidth: 1,
                                        label: {
                                            show: false
                                        },
                                        lineStyle: {
                                            type: 'solid',
                                            shadowBlur: 10
                                        }
                                    }
                                },
                                data: dataMap.NJLines['2014'],
                            },
                            //点
                            markPoint : {
                                symbol:'circle',
                                symbolSize : 10,
                                effect : {
                                    show: true,
                                    shadowBlur : 0
                                },
                                itemStyle:{
                                    normal:{
                                        label:{show:false}
                                    },
                                    emphasis: {
                                        label:{position:'top'}
                                    }
                                },
                                data : dataMap.NJPoint['2014']
                            }
                        },
                        {
                            name: '苏州市',
                            type: 'map',
                            roam: true,
                            hoverable: false,
                            mapType: '江苏',
                            itemStyle:{
                                normal:{
                                    borderColor:'rgba(100,149,237,1)',
                                    borderWidth:0.5,
                                    areaStyle:{
                                        color: '#1b1b1b'
                                    }
                                }
                            },
                            data:[],
                            geoCoord: {
                                '苏州市': [120.619585,31.299379],
                                '南京市': [118.767413,32.041544],
                                '无锡市': [120.301663,31.574729],
                                '南通市': [120.864608,32.016212],
                                '常州市': [119.946973,31.772752],
                                '徐州市': [117.184811,34.261792],
                                '盐城市': [120.139998,33.377631],
                                '扬州市': [119.421003,32.393159],
                                '泰州市': [119.915176,32.484882],
                                '镇江市': [119.452753,32.204402],
                                '淮安市': [119.021265,33.597506],
                                '连云港市': [119.178821,34.600018],
                                '宿迁市': [118.275162,33.963008]
                            },
                            //线
                            markLine : {
                                smooth: true,
                                effect: {
                                    show: true,
                                    scaleSize: 1,
                                    period: 30,
                                    color: '#fff',
                                    shadowBlur: 10,
                                },
                                itemStyle: {
                                    normal: {
                                        borderWidth: 1,
                                        label: {
                                            show: false
                                        },
                                        lineStyle: {
                                            type: 'solid',
                                            shadowBlur: 10
                                        }
                                    }
                                },
                                data: dataMap.SZLines['2014'],
                            },
                            //点
                            markPoint : {
                                symbol:'circle',
                                symbolSize : 10,
                                effect : {
                                    show: true,
                                    shadowBlur : 0
                                },
                                itemStyle:{
                                    normal:{
                                        label:{show:false}
                                    },
                                    emphasis: {
                                        label:{position:'top'}
                                    }
                                },
                                data : dataMap.SZPoint['2014']
                            }
                        },
                        {
                            name: '宿迁市',
                            type: 'map',
                            roam: true,
                            hoverable: false,
                            mapType: '江苏',
                            itemStyle:{
                                normal:{
                                    borderColor:'rgba(100,149,237,1)',
                                    borderWidth:0.5,
                                    areaStyle:{
                                        color: '#1b1b1b'
                                    }
                                }
                            },
                            data:[],
                            geoCoord: {
                                '苏州市': [120.619585,31.299379],
                                '南京市': [118.767413,32.041544],
                                '无锡市': [120.301663,31.574729],
                                '南通市': [120.864608,32.016212],
                                '常州市': [119.946973,31.772752],
                                '徐州市': [117.184811,34.261792],
                                '盐城市': [120.139998,33.377631],
                                '扬州市': [119.421003,32.393159],
                                '泰州市': [119.915176,32.484882],
                                '镇江市': [119.452753,32.204402],
                                '淮安市': [119.021265,33.597506],
                                '连云港市': [119.178821,34.600018],
                                '宿迁市': [118.275162,33.963008]
                            },
                            //线
                            markLine : {
                                smooth: true,
                                effect: {
                                    show: true,
                                    scaleSize: 1,
                                    period: 30,
                                    color: '#fff',
                                    shadowBlur: 10,
                                },
                                itemStyle: {
                                    normal: {
                                        borderWidth: 1,
                                        label: {
                                            show: false
                                        },
                                        lineStyle: {
                                            type: 'solid',
                                            shadowBlur: 10
                                        }
                                    }
                                },
                                data: dataMap.SQLines['2014'],
                            },
                            //点
                            markPoint : {
                                symbol:'circle',
                                symbolSize : 10,
                                effect : {
                                    show: true,
                                    shadowBlur : 0
                                },
                                itemStyle:{
                                    normal:{
                                        label:{show:false}
                                    },
                                    emphasis: {
                                        label:{position:'top'}
                                    }
                                },
                                data : dataMap.SQPoint['2014']
                            }
                        },
                    ]
                },
                {
                    title : {'text':'2015江苏省城际流向流量图'},
                    series : [
                        {
                            markLine:{data:dataMap.NJLines['2015']},
                            markPoint:{data:dataMap.NJPoint['2015']}
                        },
                        {
                            markLine:{data:dataMap.SZLines['2015']},
                            markPoint:{data:dataMap.SZPoint['2015']}
                        },
                        {
                            markLine:{data:dataMap.SQLines['2015']},
                            markPoint:{data:dataMap.SQPoint['2015']}
                        },
                    ]
                },
                {
                    title : {'text':'2016江苏省城际流向流量图'},
                    series : [
                        {
                            markLine:{data:dataMap.NJLines['2016']},
                            markPoint:{data:dataMap.NJPoint['2016']}
                        },
                        {
                            markLine:{data:dataMap.SZLines['2016']},
                            markPoint:{data:dataMap.SZPoint['2016']}
                        },
                        {
                            markLine:{data:dataMap.SQLines['2016']},
                            markPoint:{data:dataMap.SQPoint['2016']}
                        },
                    ]
                }
            ]
        };
        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);