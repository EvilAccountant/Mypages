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
        map: '山西',
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
            {name:'逃费路口',icon:'circle'},
            {name:'煤矿分布',icon:'triangle'}],
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
                    color:"#F3E925"
                }
            },
            data:[]
        },
        {
            name: '逃费路口',
            type: 'effectScatter',
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
                {name: '长治高速', value:[113.0031400000,36.2396500000]},
                {name: '朔州高速', value:[112.4510800000,39.3408300000]},
                {name: '大同高速', value:[113.2020900000,40.0710300000]},
                {name: '忻州高速', value:[112.6856200000,38.4275000000]},
                {name: '晋城高速', value:[112.9426700000,35.5684300000]},
                {name: '临汾环城高速', value:[111.6481600000,36.2061200000]},
            ]
        },
        {
            name: '煤矿分布',
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
                {name: '长治市壶关县', value:[113.2073300000,36.1156700000]},
                {name: '长治市长安县', value:[111.0513500000,36.0531200000]},
                {name: '长治市郊区', value:[113.1572100000,36.2216100000]},
                {name: '长治市武乡县', value:[112.8638700000,36.8378000000]},
                {name: '长治市襄垣县', value:[113.0530600000,36.5358100000]},
                {name: '长治市潞城市', value:[113.2289300000,36.3341800000]},
                {name: '长治市屯留县', value:[112.8922100000,36.3155300000]},
                {name: '晋城市陵川县',value:[113.2806100000,35.7751200000]},
                {name: '晋城市泽州县',value:[112.9436600000,35.5004300000]},
                {name: '晋城市阳城县',value:[112.4149100000,35.4861800000]},
                {name: '晋城市沁水县',value:[112.1866000000,35.6901500000]},
                {name: '晋中市介休市',value:[111.9167200000,37.0271000000]},
                {name: '晋中市灵石县',value:[111.7787900000,36.8478800000]},
                {name: '晋中市寿阳县',value:[113.1766600000,37.8949800000]},
                {name: '晋中市和顺县',value:[113.5697200000,37.3290500000]},
                {name: '晋中市昔阳县',value:[113.7071800000,37.6128200000]},
                {name: '吕梁市离石区',value:[111.1508100000,37.5176100000]},
                {name: '吕梁市孝义市',value:[111.7790300000,37.1453400000]},
                {name: '吕梁市岚县',value:[111.6719500000,38.2793900000]},
                {name: '吕梁市临县',value:[110.9920800000,37.9510600000]},
                {name: '吕梁市方山县',value:[111.2439600000,37.8947000000]},
                {name: '吕梁市柳林县',value:[110.8893700000,37.4290200000]},
                {name: '吕梁市交口县',value:[111.1810700000,36.9821700000]},
                {name: '吕梁市汾阳县',value:[111.7877700000,37.2654200000]},
                {name: '大同市浑源县',value:[113.6908000000,39.6987300000]},
                {name: '大同市矿区',value:[113.1774300000,40.0370500000]},
                {name: '城区',value:[113.2985300000,40.0756700000]},
                {name: '朔州市右玉县',value:[112.4670500000,39.9891300000]},
                {name: '朔州市朔城区',value:[112.4331400000,39.3191800000]},
                {name: '朔州市怀仁县',value:[113.1001200000,39.8278800000]},
                {name: '朔州市平鲁区',value:[112.2883200000,39.5123800000]},
                {name: '忻州市原平市',value:[112.7109200000,38.7305100000]},
                {name: '忻州市五台县',value:[113.2713603973,38.7329289371]},
                {name: '阳泉市平定县',value:[113.6580400000,37.7868500000]},
            ]
        },

    ]
};
myChart.setOption(option);
