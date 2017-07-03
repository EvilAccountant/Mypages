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
    [{name:'南京市', smoothness:0.1}, {name:'南京市',value:100}],
    [{name:'南京市', smoothness:0.1}, {name:'苏州市',value:100}],
    [{name:'南京市', smoothness:0.1}, {name:'无锡市',value:95}],
    [{name:'南京市', smoothness:0.1}, {name:'南通市',value:90}],
    [{name:'南京市', smoothness:0.1}, {name:'常州市',value:85}],
    [{name:'南京市', smoothness:0.1}, {name:'徐州市',value:80}],
    [{name:'南京市', smoothness:0.1}, {name:'盐城市',value:70}],
    [{name:'南京市', smoothness:0.1}, {name:'扬州市',value:60}],
    [{name:'南京市', smoothness:0.1}, {name:'泰州市',value:50}],
    [{name:'南京市', smoothness:0.1}, {name:'镇江市',value:40}],
    [{name:'南京市', smoothness:0.1}, {name:'淮安市',value:30}],
    [{name:'南京市', smoothness:0.1}, {name:'连云港市',value:20}],
    [{name:'南京市', smoothness:0.1}, {name:'宿迁市',value:10}]
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
    series.push({
            name: '南京',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.8,
                symbolSize: 4
            },
            lineStyle: {
                normal: {
                    type:'solid',
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        {
            name: '南京',
            type: 'effectScatter',
            coordinateSystem: 'geo',
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
            symbolSize: 10,
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
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
    toolbox: {
        show : true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
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
    animationDurationUpdate: 2000, // for update animation, like legend selected.
    legend: {
        orient: 'vertical',
        top: 'top',
        left: 'left',
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
        roam: 'scale',
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
    series: series
};
myChart.setOption(option);
