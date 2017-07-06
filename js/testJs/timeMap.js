/**
 * Created by EvilAccountant on 2017/7/4.
 */
var myChart = echarts.init(document.getElementById('timeMap'));

var dataMap = {};

dataMap.dataNJLines = {
    2016:[
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '苏州市', value: 100, coord: [120.619585,31.299379]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '无锡市', value: 50, coord: [120.301663,31.574729]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '南通市', value: 36, coord: [120.864608,32.016212]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '常州市', value: 15, coord: [119.946973,31.772752]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '徐州市', value: 20, coord: [117.184811,34.261792]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '盐城市', value: 9, coord: [120.139998,33.377631]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '扬州市', value: 20, coord: [119.421003,32.393159]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '泰州市', value: 18, coord: [119.915176,32.484882]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '镇江市', value: 6, coord: [119.452753,32.204402]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '淮安市', value: 9, coord: [119.021265,33.597506]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '连云港市', value: 10, coord: [119.178821,34.600018]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '宿迁市', value: 10, coord: [118.275162,33.963008]}]
    ],
    2015:[
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '苏州市', value: 98, coord: [120.619585,31.299379]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '无锡市', value: 40, coord: [120.301663,31.574729]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '南通市', value: 34, coord: [120.864608,32.016212]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '常州市', value: 13, coord: [119.946973,31.772752]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '徐州市', value: 19, coord: [117.184811,34.261792]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '盐城市', value: 10, coord: [120.139998,33.377631]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '扬州市', value: 20, coord: [119.421003,32.393159]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '泰州市', value: 20, coord: [119.915176,32.484882]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '镇江市', value: 6, coord: [119.452753,32.204402]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '淮安市', value: 6, coord: [119.021265,33.597506]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '连云港市', value: 8, coord: [119.178821,34.600018]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '宿迁市', value: 10, coord: [118.275162,33.963008]}]
    ],
    2014:[
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '苏州市', value: 100, coord: [120.619585,31.299379]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '无锡市', value: 36, coord: [120.301663,31.574729]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '南通市', value: 28, coord: [120.864608,32.016212]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '常州市', value: 17, coord: [119.946973,31.772752]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '徐州市', value: 17, coord: [117.184811,34.261792]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '盐城市', value: 11, coord: [120.139998,33.377631]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '扬州市', value: 17, coord: [119.421003,32.393159]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '泰州市', value: 17, coord: [119.915176,32.484882]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '镇江市', value: 8, coord: [119.452753,32.204402]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '淮安市', value: 8, coord: [119.021265,33.597506]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '连云港市', value: 11, coord: [119.178821,34.600018]}],
        [{name: '南京市', coord: [118.767413,32.041544]}, {name: '宿迁市', value: 8, coord: [118.275162,33.963008]}]
    ],
}

dataMap.dataNJScatter={
    2016:[
        {name: '苏州市', value:[120.619585,31.299379,100]},
        {name: '无锡市', value:[120.301663,31.574729,90]},
        {name: '南通市', value:[120.864608,32.016212,85]},
        {name: '常州市', value:[119.946973,31.772752,80]},
        {name: '徐州市', value:[117.184811,34.261792,75]},
        {name: '盐城市', value:[120.139998,33.377631,70]},
        {name: '扬州市', value:[119.421003,32.393159,60]},
        {name: '泰州市', value:[119.915176,32.484882,50]},
        {name: '镇江市', value:[119.452753,32.204402,40]},
        {name: '淮安市', value:[119.021265,33.597506,30]},
        {name: '连云港市', value:[119.178821,34.600018,20]},
        {name: '宿迁市', value:[118.275162,33.963008,10]}
    ],
    2015:[
        {name: '苏州市', value:[120.619585,31.299379,0]},
        {name: '无锡市', value:[120.301663,31.574729,0]},
        {name: '南通市', value:[120.864608,32.016212,0]},
        {name: '常州市', value:[119.946973,31.772752,0]},
        {name: '徐州市', value:[117.184811,34.261792,0]},
        {name: '盐城市', value:[120.139998,33.377631,0]},
        {name: '扬州市', value:[119.421003,32.393159,0]},
        {name: '泰州市', value:[119.915176,32.484882,0]},
        {name: '镇江市', value:[119.452753,32.204402,0]},
        {name: '淮安市', value:[119.021265,33.597506,0]},
        {name: '连云港市', value:[119.178821,34.600018,0]},
        {name: '宿迁市', value:[118.275162,33.963008,0]}
    ],
    2014:[
        {name: '苏州市', value:[120.619585,31.299379,55]},
        {name: '无锡市', value:[120.301663,31.574729,55]},
        {name: '南通市', value:[120.864608,32.016212,55]},
        {name: '常州市', value:[119.946973,31.772752,55]},
        {name: '徐州市', value:[117.184811,34.261792,55]},
        {name: '盐城市', value:[120.139998,33.377631,55]},
        {name: '扬州市', value:[119.421003,32.393159,55]},
        {name: '泰州市', value:[119.915176,32.484882,55]},
        {name: '镇江市', value:[119.452753,32.204402,55]},
        {name: '淮安市', value:[119.021265,33.597506,55]},
        {name: '连云港市', value:[119.178821,34.600018,55]},
        {name: '宿迁市', value:[118.275162,33.963008,55]}
    ],
}

//        dataMap.dataSZLines = {
//            //max : 3600,
//            2016:[844.59,227.88,513.81],
//            2015:[821.5,183.44,467.97],
//            2014:[658.3,156.64,397.14],
//        };
//
//        dataMap.dataWXLines = {
//            //max : 3200,
//            2016:[1519.19,368.1,420.74],
//            2015:[1302.77,288.17,347.65],
//            2014:[982.37,186.87,284.04],
//        };


option = {
    baseOption: {
        backgroundColor: '#1b1b1b',
        color: ['gold','aqua','lime'],
        title : {
            text: '模拟迁徙',
            subtext:'数据纯属虚构，如有雷同，不胜荣幸',
            x:'center',
            textStyle : {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
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
        animationDurationUpdate: 2000, // for update animation, like legend selected.
        geo: {
            map: '江苏',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',//地图颜色
                    borderColor: '#404a59'//地图轮廓颜色
                },
                emphasis: {
                    areaColor: '#2a333d'//地图区域激活颜色
                }
            }
        },
        timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 2000,
            data: ['2014', '2015','2016']
        },
        legend: {
            x: 'left',
            selectedMode: "single",
            data: ['南京',],
//                        '苏州', '无锡'],
            selected: {
                '苏州': false, '无锡': false
            }
        },
        series: [
            {
                name: '南京',
                type: 'lines',
                coordinateSystem: 'geo',
                zlevel: 1,
                smooth: false,
                symbol: ['none', 'arrow'],//起始点标志，终点标志
                effect: {
                    show: true,
                    period: 5,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        curveness: 0.1,
                        opacity: 1
                    }
                }
            },
            {
                name: '南京',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                symbolSize: 13,
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                }
            },
//                    {name: '苏州', type: 'lines',coordinateSystem: 'geo', zlevel: 1},
//                    {name: '苏州', type: 'effectScatter',coordinateSystem: 'geo', zlevel: 2},
//                    {name: '无锡', type: 'lines',coordinateSystem: 'geo', zlevel: 1},
//                    {name: '无锡', type: 'effectScatter',coordinateSystem: 'geo', zlevel: 2}
        ]
    },
    options: [
        {
            title : {text: '2014江苏省'},
            series : [
                {data: dataMap.dataNJLines['2014']},
                {data: dataMap.dataNJScatter['2014']},

            ]
        },
        {
            title : {text: '2015江苏省'},
            series : [
                {data: dataMap.dataNJLines['2015']},
                {data: dataMap.dataNJScatter['2015']},

            ]
        },
        {
            title : {text: '2016江苏省'},
            series : [
                {data: dataMap.dataNJLines['2016']},
                {data: dataMap.dataNJScatter['2016']},

            ]
        }
    ]
};

myChart.setOption(option);