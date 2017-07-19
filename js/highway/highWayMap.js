/**
 * Created by EvilAccountant on 2017/7/3.
 */
var myChart = echarts.init(document.getElementById('highway'));

option = {
    backgroundColor: '#12101B',
    color: ['gold','aqua','lime'],
    title : {
        x:'center',
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: '{b}'
    },
    geo: {
        map: '陕西',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#12101B',
                borderColor: '#3E5FA2',
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    legend: {
        x: 'left',
        orient: 'vertical',//垂直排列
        y:'top',
        textStyle:{
            color:'#ffffff'
        },
        itemWidth: 15,
        itemGap: 18,
        data: [
            {name:'主要高速公路',icon:'line'},
            {name:'煤矿',icon:'triangle'},
            {name:'金属矿',icon:'diamond'},
            {name:'天然气',icon:'circle'}
        ],
    },
    series: [
        {
            name: '主要高速公路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 1,
            smooth: false,
            lineStyle: {
                normal: {
                    width: 1,
                    curveness: 0.1,
                    opacity: 1
                }
            },
            itemStyle:{
                normal:{
                    color:"#F3E925",
                    lineStyle:{
                        color: '#F3E925',
                    }
                },
            },
            data:[
                    [{coord: [111.2146,38.9316]}, {coord: [110.6021,38.953]}],
                    [{coord: [110.6021,38.953]}, {coord: [110.4469,38.8483]}],
                    [{coord: [110.4469,38.8483]}, {coord: [110.4469,39.0021]}],
                    [{coord: [110.4469,38.8483]}, {coord: [109.6957,38.3503]}],
                    [{coord: [109.6957,38.3503]}, {coord: [109.8303,39.504]}],
                    [{coord: [109.6957,38.3503]}, {coord: [108.8306,37.6229]}],
                    [{coord: [109.6957,38.3503]}, {coord: [110.2382,37.574]}],
                    [{coord: [108.8306,37.6229]}, {coord: [110.2382,37.574]}],
                    [{coord: [108.8306,37.6229]}, {coord: [107.5287,37.5576]}],
                    [{coord: [108.8306,37.6229]}, {coord: [109.4843,36.6684]}],
                    [{coord: [110.2382,37.574]}, {coord: [111.102,37.4836]}],
                    [{coord: [110.2382,37.574]}, {coord: [110.2039,36.873]}],
                    [{coord: [107.5287,37.5576]}, {coord: [106.8365,38.1173]}],
                    [{coord: [107.5287,37.5576]}, {coord: [108.2428,36.9323]}],
                    [{coord: [108.2428,36.9323]}, {coord: [109.4843,36.6684]}],
                    [{coord: [109.4843,36.6684]}, {coord: [110.2039,36.873]}],
                    [{coord: [109.4843,36.6684]}, {coord: [108.9789,34.9355]}],
                    [{coord: [110.2039,36.873]}, {coord: [110.7971,36.7917]}],
                    [{coord: [108.9789,34.9355]}, {coord: [108.1274,35.0255]}],
                    [{coord: [108.9789,34.9355]}, {coord: [108.9514,34.281]}],
                    [{coord: [108.1274,35.0255]}, {coord: [107.4847,35.351]}],
                    [{coord: [108.1274,35.0255]}, {coord: [108.2263,34.5179]}],
                    [{coord: [110.7916,36.0624]}, {coord: [109.1821,35.8891]}],
                    [{coord: [109.1821,35.8891]}, {coord: [108.3911,36.1601]}],
                    [{coord: [108.2263,34.5179]}, {coord: [108.9514,34.281]}],
                    [{coord: [108.9514,34.281]}, {coord: [108.1769,35.3779]}],
                    [{coord: [108.9514,34.281]}, {coord: [105.6885,34.5609]}],
                    [{coord: [108.9514,34.281]}, {coord: [110.7477,35.6127]}],
                    [{coord: [108.9514,34.281]}, {coord: [111.1157,34.7145]}],
                    [{coord: [108.9514,34.281]}, {coord: [111.1377,33.3993]}],
                    [{coord: [108.9514,34.281]}, {coord: [110.8466,32.6162]}],
                    [{coord: [108.9514,34.281]}, {coord: [109.0338,32.6671]}],
                    [{coord: [108.9514,34.281]}, {coord: [107.8473,33.1145]}],
                    [{coord: [107.3515,34.3468]}, {coord: [106.7679,35.2007]}],
                    [{coord: [110.8466,32.6162]}, {coord: [109.0338,32.6671]}],
                    [{coord: [109.0338,32.6671]}, {coord: [108.0615,32.0407]}],
                    [{coord: [109.0338,32.6671]}, {coord: [107.8473,33.1145]}],
                    [{coord: [109.0338,32.6671]}, {coord: [107.0123,33.0777]}],
                    [{coord: [108.0615,32.0407]}, {coord: [107.8473,33.1145]}],
                    [{coord: [107.8473,33.1145]}, {coord: [107.0123,33.0777]}],
                    [{coord: [107.0123,33.0777]}, {coord: [105.8588,32.6024]}],
                    [{coord: [107.0123,33.0777]}, {coord: [105.4797,33.6878]}],
                    [{coord: [107.0123,33.0777]}, {coord: [106.3998,33.9434]}],
            ]
        },
        {
            name: '天然气',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol:'circle',
            symbolSize: 14,
            zlevel: 3,
            rippleEffect: {
                brushType: 'stroke'
            },
            itemStyle:{
                normal:{
                    color:"#F3E925"
                }
            },
            data:[
                {value:[110.1664,37.7543]},
                {value:[109.02,37.7853]},
            ]
        },
        {
            name: '煤矿',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol:'triangle',
            symbolSize: 10,
            zlevel: 2,
            itemStyle:{
                normal:{
                    color:"#FFFFFF"
                }
            },
            data:[
                {value:[109.58,38.3725]},
                {value:[108.9729,37.82]},
                {value:[110.4263,39.2505]},
                {value:[109.5892,37.0903]},
                {value:[108.9269,35.602]},
                {value:[110.1549,35.2632]},
                {value:[107.9197,35.1877]},
            ]
        },
        {
            name: '金属矿',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol:'diamond',
            symbolSize: 10,
            zlevel: 2,
            itemStyle:{
                normal:{
                    color:"#F3E925"
                }
            },
            data:[
                {value:[107.0826,34.2]},
                {value:[106.3191,33.1154]},
                {value:[108.6004,34.0547]},
                {value:[110.1319,34.3527]},
                {value:[109.8882,33.5478]},
            ]
        },

    ]
};
myChart.setOption(option);
