/**
 * Created by EvilAccountant on 2017/7/3.
 */
var myChart = echarts.init(document.getElementById('main'));

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
        x:'left',
        data:['南京市', '苏州市'],
        selectedMode: 'single',
        selected:{
            '苏州市' : false,
        },
        textStyle : {
            color: '#fff'
        }
    },
    series: [
        {
        name:'南京市',
        type:'map',
        map:'江苏',
        roam: true,
        hoverable: false,
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
        //点
        markPoint : {
            symbol: 'effectCircle',
            symbolSize : 22,
            effect : {
                show: true,
                shadowBlur : 0
            },
            itemStyle:{
                normal:{
                    label:{
                        show:false
                    }
                },
                emphasis: {
                    label:{
                        position:'top'
                    }
                }
            },
            data : [
                {name: '苏州市', coord: [120.619585,31.299379]},
                {name: '南京市', coord: [120.619585,31.299379]},
                {name: '无锡市', coord: [120.301663,31.574729]},
                {name: '南通市', coord: [120.864608,32.016212]},
                {name: '常州市', coord: [119.946973,31.772752]},
                {name: '徐州市', coord: [117.184811,34.261792]},
                {name: '盐城市', coord: [120.139998,33.377631]},
                {name: '扬州市', coord: [119.421003,32.393159]},
                {name: '泰州市', coord: [119.915176,32.484882]},
                {name: '镇江市', coord: [119.452753,32.204402]},
                {name: '淮安市', coord: [119.021265,33.597506]},
                {name: '连云港市', coord: [119.178821,34.600018]},
                {name: '宿迁市', coord: [118.275162,33.963008]}
            ]
        },
        markLine : {
            smooth:true,
            effect : {
                show: false,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
            },
            itemStyle : {
                normal: {
                    borderWidth:1,
                    label: {
                        show: false
                    },
                    lineStyle: {
                        type: 'solid',
                        shadowBlur: 10
                    }
                }
            },
            data : [
                [{name: '南京市', coord: [118.767413,32.041544]}, {name: '苏州市', value: 100, coord: [120.619585,31.299379]}],
                [{name: '南京市', coord: [118.767413,32.041544]}, {name: '无锡市', value: 95, coord: [120.301663,31.574729]}],
                [{name: '南京市', coord: [118.767413,32.041544]}, {name: '南通市', value: 90, coord: [120.864608,32.016212]}],
                [{name: '南京市', coord: [118.767413,32.041544]}, {name: '常州市', value: 85, coord: [119.946973,31.772752]}],
                [{name: '南京市', coord: [118.767413,32.041544]}, {name: '徐州市', value: 80, coord: [117.184811,34.261792]}],
                [{name: '南京市', coord: [118.767413,32.041544]}, {name: '盐城市', value: 70, coord: [120.139998,33.377631]}],
                [{name: '南京市', coord: [118.767413,32.041544]}, {name: '扬州市', value: 60, coord: [119.421003,32.393159]}],
                [{name: '南京市', coord: [118.767413,32.041544]}, {name: '泰州市', value: 50, coord: [119.915176,32.484882]}],
                [{name: '南京市', coord: [118.767413,32.041544]}, {name: '镇江市', value: 40, coord: [119.452753,32.204402]}],
                [{name: '南京市', coord: [118.767413,32.041544]}, {name: '淮安市', value: 30, coord: [119.021265,33.597506]}],
                [{name: '南京市', coord: [118.767413,32.041544]}, {name: '连云港市', value: 20, coord: [119.178821,34.600018]}],
                [{name: '南京市', coord: [118.767413,32.041544]}, {name: '宿迁市', value: 10, coord: [118.275162,33.963008]}]
            ]
        },
    },
        {
            name:'苏州市',
            type:'map',
            map:'江苏',
            roam: true,
            hoverable: false,
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
            //点
            markPoint : {
                symbol: 'circle',
                symbolSize : 22,
                effect : {
                    show: true,
                    shadowBlur : 0
                },
                itemStyle:{
                    normal:{
                        label:{
                            show:false
                        }
                    },
                    emphasis: {
                        label:{
                            position:'top'
                        }
                    }
                },
                data : [
                    {name: '苏州市', value: 100, coord: [120.619585,31.299379]},
                    {name: '南京市', value: 95, coord: [120.619585,31.299379]},
                    {name: '无锡市', value: 95, coord: [120.301663,31.574729]},
                    {name: '南通市', value: 90, coord: [120.864608,32.016212]},
                    {name: '常州市', value: 85, coord: [119.946973,31.772752]},
                    {name: '徐州市', value: 80, coord: [117.184811,34.261792]},
                    {name: '盐城市', value: 70, coord: [120.139998,33.377631]},
                    {name: '扬州市', value: 60, coord: [119.421003,32.393159]},
                    {name: '泰州市', value: 50, coord: [119.915176,32.484882]},
                    {name: '镇江市', value: 40, coord: [119.452753,32.204402]},
                    {name: '淮安市', value: 30, coord: [119.021265,33.597506]},
                    {name: '连云港市', value: 20, coord: [119.178821,34.600018]},
                    {name: '宿迁市', value: 10, coord: [118.275162,33.963008]}
                ]
            },
            markLine : {
                smooth:true,
                effect : {
                    show: false,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        borderWidth:1,
                        label: {
                            show: false
                        },
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data : [
                    [{name: '南京市', coord: [118.767413,32.041544]}, {name: '苏州市', value: 100, coord: [120.619585,31.299379]}],
                    [{name: '南京市', coord: [118.767413,32.041544]}, {name: '无锡市', value: 95, coord: [120.301663,31.574729]}],
                    [{name: '南京市', coord: [118.767413,32.041544]}, {name: '南通市', value: 90, coord: [120.864608,32.016212]}],
                    [{name: '南京市', coord: [118.767413,32.041544]}, {name: '常州市', value: 85, coord: [119.946973,31.772752]}],
                    [{name: '南京市', coord: [118.767413,32.041544]}, {name: '徐州市', value: 80, coord: [117.184811,34.261792]}],
                    [{name: '南京市', coord: [118.767413,32.041544]}, {name: '盐城市', value: 70, coord: [120.139998,33.377631]}],
                    [{name: '南京市', coord: [118.767413,32.041544]}, {name: '扬州市', value: 60, coord: [119.421003,32.393159]}],
                    [{name: '南京市', coord: [118.767413,32.041544]}, {name: '泰州市', value: 50, coord: [119.915176,32.484882]}],
                    [{name: '南京市', coord: [118.767413,32.041544]}, {name: '镇江市', value: 40, coord: [119.452753,32.204402]}],
                    [{name: '南京市', coord: [118.767413,32.041544]}, {name: '淮安市', value: 30, coord: [119.021265,33.597506]}],
                    [{name: '南京市', coord: [118.767413,32.041544]}, {name: '连云港市', value: 20, coord: [119.178821,34.600018]}],
                    [{name: '南京市', coord: [118.767413,32.041544]}, {name: '宿迁市', value: 10, coord: [118.275162,33.963008]}]
                ]
            },
        }
        ]
};
myChart.setOption(option);
