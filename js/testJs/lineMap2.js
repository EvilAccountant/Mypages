/**
 * Created by EvilAccountant on 2017/7/3.
 */
var myChart = echarts.init(document.getElementById('main'));

var geoCoordMap = {
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
};

var NJData=[
    [{name: '南京市', smoothness: 0.6, coord: [118.767413,32.041544]}, {name: '苏州市', value: 100, coord: [120.619585,31.299379]}],
    [{name: '南京市', smoothness: 0.1, coord: [118.767413,32.041544]}, {name: '无锡市', value: 95, coord: [120.301663,31.574729]}],
    [{name: '南京市', smoothness: 0.1, coord: [118.767413,32.041544]}, {name: '南通市', value: 90, coord: [120.864608,32.016212]}],
    [{name: '南京市', smoothness: 0.1, coord: [118.767413,32.041544]}, {name: '常州市', value: 85, coord: [119.946973,31.772752]}],
    [{name: '南京市', smoothness: 0.1, coord: [118.767413,32.041544]}, {name: '徐州市', value: 80, coord: [117.184811,34.261792]}],
    [{name: '南京市', smoothness: 0.1, coord: [118.767413,32.041544]}, {name: '盐城市', value: 70, coord: [120.139998,33.377631]}],
    [{name: '南京市', smoothness: 0.1, coord: [118.767413,32.041544]}, {name: '扬州市', value: 60, coord: [119.421003,32.393159]}],
    [{name: '南京市', smoothness: 0.1, coord: [118.767413,32.041544]}, {name: '泰州市', value: 50, coord: [119.915176,32.484882]}],
    [{name: '南京市', smoothness: 0.1, coord: [118.767413,32.041544]}, {name: '镇江市', value: 40, coord: [119.452753,32.204402]}],
    [{name: '南京市', smoothness: 0.1, coord: [118.767413,32.041544]}, {name: '淮安市', value: 30, coord: [119.021265,33.597506]}],
    [{name: '南京市', smoothness: 0.1, coord: [118.767413,32.041544]}, {name: '连云港市', value: 20, coord: [119.178821,34.600018]}],
    [{name: '南京市', smoothness: 0.1, coord: [118.767413,32.041544]}, {name: '宿迁市', value: 10, coord: [118.275162,33.963008]}]
];

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};

var series = [];

[['南京', NJData]].forEach(function (item, i) {
    series.push(
        {
            name: '南京',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 1,
            smooth: false,
            // symbol: ['none', 'arrow'],//起始点标志，终点标志
            // effect: {
            //     period: 6,
            //     trailLength: 0.7,
            //     color: '#fff',
            //     symbolSize: 3
            // },
            lineStyle: {
                normal: {
                    width: 1,
                    curveness: 0.1,
                    opacity: 1
                }
            },
            data: [
                [{name: '南京市->苏州市', coord: [118.767413,32.041544]}, {name: '苏州市', value: 100, coord: [120.619585,31.299379]}],
                [{name: '南京市->无锡市', coord: [118.767413,32.041544]}, {name: '无锡市', value: 95, coord: [120.301663,31.574729]}],
                [{name: '南京市->南通市', coord: [118.767413,32.041544]}, {name: '南通市', value: 90, coord: [120.864608,32.016212]}],
                [{name: '南京市->常州市', coord: [118.767413,32.041544]}, {name: '常州市', value: 85, coord: [119.946973,31.772752]}],
                [{name: '南京市->徐州市', coord: [118.767413,32.041544]}, {name: '徐州市', value: 80, coord: [117.184811,34.261792]}],
                [{name: '南京市->盐城市', coord: [118.767413,32.041544]}, {name: '盐城市', value: 70, coord: [120.139998,33.377631]}],
                [{name: '南京市->扬州市', coord: [118.767413,32.041544]}, {name: '扬州市', value: 60, coord: [119.421003,32.393159]}],
                [{name: '南京市->泰州市', coord: [118.767413,32.041544]}, {name: '泰州市', value: 50, coord: [119.915176,32.484882]}],
                [{name: '南京市->镇江市', coord: [118.767413,32.041544]}, {name: '镇江市', value: 40, coord: [119.452753,32.204402]}],
                [{name: '南京市->淮安市', coord: [118.767413,32.041544]}, {name: '淮安市', value: 30, coord: [119.021265,33.597506]}],
                [{name: '南京市->连云港市', coord: [118.767413,32.041544]}, {name: '连云港市', value: 20, coord: [119.178821,34.600018]}],
                [{name: '南京市->宿迁市', coord: [118.767413,32.041544]}, {name: '宿迁市', value: 10, coord: [118.275162,33.963008]}]
            ]
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
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        }
    );
});

option = {
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
    legend: {
        orient: 'vertical',
        top: 'top',
        x: 'left',
        data:['南京'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
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
    timeline:{
        show: true,
        type: 'slider',
        axisType: 'time',
        autoPlay: true,
        playInterval:2000,
        data:[
            '2002','2003','2004','2005','2006',
            '2007','2008','2009','2010','2011',
        ],
    },

    series: series
};
myChart.setOption(option);
