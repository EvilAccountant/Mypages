/**
 * Created by LayWin on 2017/7/10.
 */

var myChart = echarts.init(document.getElementById('radar'));

option = {
    title: {
        text: '相关性分析'
    },
    tooltip: {},
    legend: {
        // data: ['相关性分析', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '人口', max: 6500},
            { name: '高速里程', max: 16000},
            { name: '公路里程', max: 30000},
            { name: '货车', max: 38000},
            { name: '客车', max: 52000},
            { name: 'GDP', max: 25000}
        ]
    },
    series: [{
        name: '相关性分析',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
            },
        ]
    }]
};

myChart.setOption(option);