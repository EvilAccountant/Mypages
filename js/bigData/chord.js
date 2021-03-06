/**
 * Created by EvilAccountant on 2017/7/10.
 */
// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/chord', // 加载map模块
    ],
    function (echarts) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = echarts.init(document.getElementById('chord'));

        var dataMap={};

        dataMap.links={
            2014:[
                {source: '南京市', target: '苏州市', weight: 0.9},
                {source: '南京市', target: '无锡市', weight: 0.9},
                {source: '南京市', target: '南通市', weight: 0.9},
                {source: '南京市', target: '常州市', weight: 0.9},
                {source: '南京市', target: '徐州市', weight: 0.9},
                {source: '南京市', target: '盐城市', weight: 0.9},
                {source: '南京市', target: '扬州市', weight: 0.9},
                {source: '南京市', target: '泰州市', weight: 0.9},
                {source: '南京市', target: '镇江市', weight: 0.9},
                {source: '南京市', target: '淮安市', weight: 0.9},
                {source: '南京市', target: '连云港市', weight: 0.9},
                {source: '南京市', target: '无锡市', weight: 0.9},

                {source: '苏州市', target: '苏州市', weight: 0.9},
                {source: '苏州市', target: '无锡市', weight: 0.9},
                {source: '苏州市', target: '南通市', weight: 0.9},
                {source: '苏州市', target: '常州市', weight: 0.9},
                {source: '苏州市', target: '徐州市', weight: 0.9},
                {source: '苏州市', target: '盐城市', weight: 0.9},
                {source: '苏州市', target: '扬州市', weight: 0.9},
                {source: '苏州市', target: '泰州市', weight: 0.9},
                {source: '苏州市', target: '镇江市', weight: 0.9},
                {source: '苏州市', target: '淮安市', weight: 0.9},
                {source: '苏州市', target: '连云港市', weight: 0.9},
                {source: '苏州市', target: '无锡市', weight: 0.9},

                {source: '无锡市', target: '苏州市', weight: 0.5},
                {source: '无锡市', target: '无锡市', weight: 0.5},
                {source: '无锡市', target: '南通市', weight: 0.5},
                {source: '无锡市', target: '常州市', weight: 0.5},
                {source: '无锡市', target: '徐州市', weight: 0.5},
                {source: '无锡市', target: '盐城市', weight: 0.5},
                {source: '无锡市', target: '扬州市', weight: 0.5},
                {source: '无锡市', target: '泰州市', weight: 0.5},
                {source: '无锡市', target: '镇江市', weight: 0.5},
                {source: '无锡市', target: '淮安市', weight: 0.5},
                {source: '无锡市', target: '连云港市', weight: 0.5},
                {source: '无锡市', target: '无锡市', weight: 0.5},

                {target: '南京市', source: '苏州市', weight: 0.9},
                {target: '南京市', source: '无锡市', weight: 0.9},
                {target: '南京市', source: '南通市', weight: 0.9},
                {target: '南京市', source: '常州市', weight: 0.9},
                {target: '南京市', source: '徐州市', weight: 0.9},
                {target: '南京市', source: '盐城市', weight: 0.9},
                {target: '南京市', source: '扬州市', weight: 0.9},
                {target: '南京市', source: '泰州市', weight: 0.9},
                {target: '南京市', source: '镇江市', weight: 0.9},
                {target: '南京市', source: '淮安市', weight: 0.9},
                {target: '南京市', source: '连云港市', weight: 0.9},
                {target: '南京市', source: '无锡市', weight: 0.9},

                {target: '苏州市', source: '苏州市', weight: 0.9},
                {target: '苏州市', source: '无锡市', weight: 0.9},
                {target: '苏州市', source: '南通市', weight: 0.9},
                {target: '苏州市', source: '常州市', weight: 0.9},
                {target: '苏州市', source: '徐州市', weight: 0.9},
                {target: '苏州市', source: '盐城市', weight: 0.9},
                {target: '苏州市', source: '扬州市', weight: 0.9},
                {target: '苏州市', source: '泰州市', weight: 0.9},
                {target: '苏州市', source: '镇江市', weight: 0.9},
                {target: '苏州市', source: '淮安市', weight: 0.9},
                {target: '苏州市', source: '连云港市', weight: 0.9},
                {target: '苏州市', source: '无锡市', weight: 0.9},

                {target: '无锡市', source: '苏州市', weight: 0.9},
                {target: '无锡市', source: '无锡市', weight: 0.9},
                {target: '无锡市', source: '南通市', weight: 0.9},
                {target: '无锡市', source: '常州市', weight: 0.9},
                {target: '无锡市', source: '徐州市', weight: 0.9},
                {target: '无锡市', source: '盐城市', weight: 0.9},
                {target: '无锡市', source: '扬州市', weight: 0.9},
                {target: '无锡市', source: '泰州市', weight: 0.9},
                {target: '无锡市', source: '镇江市', weight: 0.9},
                {target: '无锡市', source: '淮安市', weight: 0.9},
                {target: '无锡市', source: '连云港市', weight: 0.9},
                {target: '无锡市', source: '无锡市', weight: 0.9},
            ],
            2015:[
                {source: '南京市', target: '苏州市', weight: 0.9},
                {source: '南京市', target: '无锡市', weight: 0.9},
                {source: '南京市', target: '南通市', weight: 0.9},
                {source: '南京市', target: '常州市', weight: 0.9},
                {source: '南京市', target: '徐州市', weight: 0.9},
                {source: '南京市', target: '盐城市', weight: 0.9},
                {source: '南京市', target: '扬州市', weight: 0.9},
                {source: '南京市', target: '泰州市', weight: 0.9},
                {source: '南京市', target: '镇江市', weight: 0.9},
                {source: '南京市', target: '淮安市', weight: 0.9},
                {source: '南京市', target: '连云港市', weight: 0.9},
                {source: '南京市', target: '无锡市', weight: 0.9},

                {source: '苏州市', target: '苏州市', weight: 2},
                {source: '苏州市', target: '无锡市', weight: 2},
                {source: '苏州市', target: '南通市', weight: 2},
                {source: '苏州市', target: '常州市', weight: 2},
                {source: '苏州市', target: '徐州市', weight: 2},
                {source: '苏州市', target: '盐城市', weight: 2},
                {source: '苏州市', target: '扬州市', weight: 2},
                {source: '苏州市', target: '泰州市', weight: 2},
                {source: '苏州市', target: '镇江市', weight: 2},
                {source: '苏州市', target: '淮安市', weight: 2},
                {source: '苏州市', target: '连云港市', weight: 2},
                {source: '苏州市', target: '无锡市', weight: 2},

                {source: '无锡市', target: '苏州市', weight: 0.9},
                {source: '无锡市', target: '无锡市', weight: 0.9},
                {source: '无锡市', target: '南通市', weight: 0.9},
                {source: '无锡市', target: '常州市', weight: 0.9},
                {source: '无锡市', target: '徐州市', weight: 0.9},
                {source: '无锡市', target: '盐城市', weight: 0.9},
                {source: '无锡市', target: '扬州市', weight: 0.9},
                {source: '无锡市', target: '泰州市', weight: 0.9},
                {source: '无锡市', target: '镇江市', weight: 0.9},
                {source: '无锡市', target: '淮安市', weight: 0.9},
                {source: '无锡市', target: '连云港市', weight: 0.9},
                {source: '无锡市', target: '无锡市', weight: 0.9},

                {target: '南京市', source: '苏州市', weight: 0.9},
                {target: '南京市', source: '无锡市', weight: 0.9},
                {target: '南京市', source: '南通市', weight: 0.9},
                {target: '南京市', source: '常州市', weight: 0.9},
                {target: '南京市', source: '徐州市', weight: 0.9},
                {target: '南京市', source: '盐城市', weight: 0.9},
                {target: '南京市', source: '扬州市', weight: 0.9},
                {target: '南京市', source: '泰州市', weight: 0.9},
                {target: '南京市', source: '镇江市', weight: 0.9},
                {target: '南京市', source: '淮安市', weight: 0.9},
                {target: '南京市', source: '连云港市', weight: 0.9},
                {target: '南京市', source: '无锡市', weight: 0.9},

                {target: '苏州市', source: '苏州市', weight: 0.9},
                {target: '苏州市', source: '无锡市', weight: 0.9},
                {target: '苏州市', source: '南通市', weight: 0.9},
                {target: '苏州市', source: '常州市', weight: 0.9},
                {target: '苏州市', source: '徐州市', weight: 0.9},
                {target: '苏州市', source: '盐城市', weight: 0.9},
                {target: '苏州市', source: '扬州市', weight: 0.9},
                {target: '苏州市', source: '泰州市', weight: 0.9},
                {target: '苏州市', source: '镇江市', weight: 0.9},
                {target: '苏州市', source: '淮安市', weight: 0.9},
                {target: '苏州市', source: '连云港市', weight: 0.9},
                {target: '苏州市', source: '无锡市', weight: 0.9},

                {target: '无锡市', source: '苏州市', weight: 0.9},
                {target: '无锡市', source: '无锡市', weight: 0.9},
                {target: '无锡市', source: '南通市', weight: 0.9},
                {target: '无锡市', source: '常州市', weight: 0.9},
                {target: '无锡市', source: '徐州市', weight: 0.9},
                {target: '无锡市', source: '盐城市', weight: 0.9},
                {target: '无锡市', source: '扬州市', weight: 0.9},
                {target: '无锡市', source: '泰州市', weight: 0.9},
                {target: '无锡市', source: '镇江市', weight: 0.9},
                {target: '无锡市', source: '淮安市', weight: 0.9},
                {target: '无锡市', source: '连云港市', weight: 0.9},
                {target: '无锡市', source: '无锡市', weight: 0.9},
            ],
            2016:[
                {source: '南京市', target: '苏州市', weight: 1.5},
                {source: '南京市', target: '无锡市', weight: 1.5},
                {source: '南京市', target: '南通市', weight: 1.5},
                {source: '南京市', target: '常州市', weight: 1.5},
                {source: '南京市', target: '徐州市', weight: 1.5},
                {source: '南京市', target: '盐城市', weight: 1.5},
                {source: '南京市', target: '扬州市', weight: 1.5},
                {source: '南京市', target: '泰州市', weight: 1.5},
                {source: '南京市', target: '镇江市', weight: 1.5},
                {source: '南京市', target: '淮安市', weight: 1.5},
                {source: '南京市', target: '连云港市', weight: 1.5},
                {source: '南京市', target: '无锡市', weight: 1.5, name: '流出'},

                {source: '苏州市', target: '苏州市', weight: 3},
                {source: '苏州市', target: '无锡市', weight: 3},
                {source: '苏州市', target: '南通市', weight: 3},
                {source: '苏州市', target: '常州市', weight: 3},
                {source: '苏州市', target: '徐州市', weight: 3},
                {source: '苏州市', target: '盐城市', weight: 3},
                {source: '苏州市', target: '扬州市', weight: 3},
                {source: '苏州市', target: '泰州市', weight: 3},
                {source: '苏州市', target: '镇江市', weight: 3},
                {source: '苏州市', target: '淮安市', weight: 3},
                {source: '苏州市', target: '连云港市', weight: 3},
                {source: '苏州市', target: '无锡市', weight: 3, name: '流出'},

                {source: '无锡市', target: '苏州市', weight: 0.9},
                {source: '无锡市', target: '无锡市', weight: 0.9},
                {source: '无锡市', target: '南通市', weight: 0.9},
                {source: '无锡市', target: '常州市', weight: 0.9},
                {source: '无锡市', target: '徐州市', weight: 0.9},
                {source: '无锡市', target: '盐城市', weight: 0.9},
                {source: '无锡市', target: '扬州市', weight: 0.9},
                {source: '无锡市', target: '泰州市', weight: 0.9},
                {source: '无锡市', target: '镇江市', weight: 0.9},
                {source: '无锡市', target: '淮安市', weight: 0.9},
                {source: '无锡市', target: '连云港市', weight: 0.9},
                {source: '无锡市', target: '无锡市', weight: 0.9, name: '流出'},

                {target: '南京市', source: '苏州市', weight: 0.9},
                {target: '南京市', source: '无锡市', weight: 0.9},
                {target: '南京市', source: '南通市', weight: 0.9},
                {target: '南京市', source: '常州市', weight: 0.9},
                {target: '南京市', source: '徐州市', weight: 0.9},
                {target: '南京市', source: '盐城市', weight: 0.9},
                {target: '南京市', source: '扬州市', weight: 0.9},
                {target: '南京市', source: '泰州市', weight: 0.9},
                {target: '南京市', source: '镇江市', weight: 0.9},
                {target: '南京市', source: '淮安市', weight: 0.9},
                {target: '南京市', source: '连云港市', weight: 0.9},
                {target: '南京市', source: '无锡市', weight: 0.9},

                {target: '苏州市', source: '苏州市', weight: 0.9},
                {target: '苏州市', source: '无锡市', weight: 0.9},
                {target: '苏州市', source: '南通市', weight: 0.9},
                {target: '苏州市', source: '常州市', weight: 0.9},
                {target: '苏州市', source: '徐州市', weight: 0.9},
                {target: '苏州市', source: '盐城市', weight: 0.9},
                {target: '苏州市', source: '扬州市', weight: 0.9},
                {target: '苏州市', source: '泰州市', weight: 0.9},
                {target: '苏州市', source: '镇江市', weight: 0.9},
                {target: '苏州市', source: '淮安市', weight: 0.9},
                {target: '苏州市', source: '连云港市', weight: 0.9},
                {target: '苏州市', source: '无锡市', weight: 0.9},

                {target: '无锡市', source: '苏州市', weight: 0.9},
                {target: '无锡市', source: '无锡市', weight: 0.9},
                {target: '无锡市', source: '南通市', weight: 0.9},
                {target: '无锡市', source: '常州市', weight: 0.9},
                {target: '无锡市', source: '徐州市', weight: 0.9},
                {target: '无锡市', source: '盐城市', weight: 0.9},
                {target: '无锡市', source: '扬州市', weight: 0.9},
                {target: '无锡市', source: '泰州市', weight: 0.9},
                {target: '无锡市', source: '镇江市', weight: 0.9},
                {target: '无锡市', source: '淮安市', weight: 0.9},
                {target: '无锡市', source: '连云港市', weight: 0.9},
                {target: '无锡市', source: '无锡市', weight: 0.9},
            ],
        }

        var option = {
            timeline:{
                data:[
                    '2014','2015','2016'
                ],
                x:'5%',
                width:'80%',
                autoPlay : true,
                playInterval : 10000,
                symbol:'circle',
                lineStyle:{
                    color:'#fff',
                    type:'solid',
                },
                label:{
                    textStyle:{
                    }
                },
                controlStyle:{
                    normal:{
                        color:'#fff',
                    }
                }
            },
            options:[
                {
                    backgroundColor: '#1F3044',//背景色
                    title : {
                        text: '主要城市OD分析',
                        textStyle:{
                            fontSize:16,
                            color:"#ffffff",
                            fontWeight:'normal'
                        },
                        x:20,
                        y:20
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'right',
                        data:['南京市', '苏州市', '无锡市'],
                        textStyle : {
                            fontSize:15,
                            color:"#ffffff"
                        }
                    },
                    tooltip: {},
                    series : [
                        {
                            type:'chord',
                            sort : 'ascending',
                            sortSub : 'descending',
                            center : ['50%', '50%'],
                            showScale : false,
                            itemStyle : {
                                normal : {
                                    label : {
                                        show: false,
                                        rotate : true,
                                        textStyle:{
                                            color:'#fff'
                                        }
                                    }
                                },
                                emphasis:{
                                    label:{
                                        show:true,
                                        rotate : true,
                                        textStyle:{
                                            color:'#fff'
                                        }
                                    }
                                }
                            },
                            // 使用 nodes links 表达和弦图
                            nodes: [
                                {name:'南京市'},
                                {name:'苏州市'},
                                {name:'无锡市'},
                                {name:'南通市'},
                                {name:'常州市'},
                                {name:'徐州市'},
                                {name:'盐城市'},
                                {name:'扬州市'},
                                {name:'泰州市'},
                                {name:'镇江市'},
                                {name:'淮安市'},
                                {name:'连云港市'},
                                {name:'无锡市'},
                            ],
                            links: dataMap.links['2014']
                        }
                    ]
                },
                {
                    series : [{links: dataMap.links['2015']}]
                },
                {
                    series : [{links: dataMap.links['2016']}]
                }

            ]
    }

        // 为echarts对象加载数据
        myChart.setOption(option);
    }
);