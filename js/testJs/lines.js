/**
 * Created by LayWin on 2017/7/10.
 */

var myChart = echarts.init(document.getElementById('lines'));

option = {
    title: {
        text: 'TOP5城市拥堵指数'
    },
    legend:{
        top:'bottom',
        data:['南京','苏州','无锡','南通','徐州']
    },
    color: ["#FF0000", "#00BFFF", "#FF00FF", "#1ce322", "#000000", '#EE7942'],
    tooltip:{
        trigger: 'axis'
    },
    xAxis: {
        name:'attack type',
        data: ['南京', '苏州', '无锡', '南通', '徐州']
    },
    yAxis: {
        name:'shell'
    },
    series: [{
        name:'南京',
        type: 'line',
        data:[220, 182, 171, 214, 210, 310, 290,270]
    },
        {
            name:'苏州',
            type: 'line',
            data:[200, 162, 191, 204, 230, 290, 310,290]
        },
        {
            name:'无锡',
            type: 'line',
            data:[180, 142, 151, 234, 250, 250, 250,310]
        }
        ,{
            name:'南通',
            type: 'line',
            data:[220, 162, 131, 194, 270, 270, 290,270]
        },{
            name:'徐州',
            type: 'line',
            data:[160, 182, 171, 174, 290, 330, 270,250]
        }]
};

myChart.setOption(option);