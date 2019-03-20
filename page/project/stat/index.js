import list from '/page/biz/components/list';
import Dropdown from '/page/biz/components/dropdown';
const chartDataNew = [
    { date: "2017-06-25", value: 71 },
    { date: "2017-06-26", value: 106 },
    { date: "2017-06-27", value: 84 },
    { date: "2017-06-28", value: 93 },
    { date: "2017-06-29", value: 85 },
    { date: "2017-06-30", value: 73 },
    { date: "2017-07-01", value: 83 },
    { date: "2017-07-02", value: 125 },
    { date: "2017-07-03", value: 107 },
    { date: "2017-07-04", value: 82 },
    { date: "2017-07-05", value: 44 },
    { date: "2017-07-06", value: 72 },
    { date: "2017-07-07", value: 106 },
    { date: "2017-07-08", value: 107 },
    { date: "2017-07-09", value: 66 },
    { date: "2017-07-10", value: 91 },
    { date: "2017-07-11", value: 92 },
    { date: "2017-07-12", value: 113 },
    { date: "2017-07-13", value: 107 },
    { date: "2017-07-14", value: 131 },
    { date: "2017-07-15", value: 111 },
    { date: "2017-07-16", value: 64 },
    { date: "2017-07-17", value: 69 },
    { date: "2017-07-18", value: 88 },
    { date: "2017-07-19", value: 77 },
    { date: "2017-07-20", value: 83 },
    { date: "2017-07-21", value: 111 },
    { date: "2017-07-22", value: 57 },
    { date: "2017-07-23", value: 55 },
    { date: "2017-07-24", value: 60 }
  ]

  const map = {
    '待处理': '40%',
    '进行中': '20%',
    '已完成': '18%',
    '逾期': '15%',
    '已关闭': '5%',
    '其他': '2%'
  }

const pieChartDataNew = [{
          name: '待处理',
          percent: 0.4,
          a: '1'
        }, {
          name: '进行中',
          percent: 0.2,
          a: '1'
        }, {
          name: '已完成',
          percent: 0.18,
          a: '1'
        }, {
          name: '逾期',
          percent: 0.15,
          a: '1'
        }, {
          name: '已关闭',
          percent: 0.05,
          a: '1'
        }, {
          name: '其他',
          percent: 0.02,
          a: '1'
        }]

let app = getApp()
Page({
  ... Dropdown,
  ...list,
  data: {
       width_line:400,
       heigh_linet:400,
       width_pie:200,
       heigh_pie:200,
       chart: null,
       dropdownSelectData: {
       active: false,
       selectedNav: 0,
       listData: [
        {
          nav: '第一次迭代',
          selectedItem: '',
          data: [
            {
              title: '第二次迭代'
            },
            { 
              title: '第三次迭代',
            },
            { 
              title: '第四次迭代',
            },
          ]
        },
      ],
    },
    
    grid: {
        list: [
                {
                    "color": "coral",
                    "header": "时间",
                    "text": "2019.3.21--2019.3.30"
                },
                {
                   "header": "倒计时",
                    "color": "blue",
                    "text": "10天 20时 20分"
                },
            ],
            columnNum: 2
        },
        handleItemTap(e) {
            dd.showToast({
              content: `第${e.currentTarget.dataset.index}个Item`,
              success: (res) => {
                
              },
            });
        },
        listData: {
          onItemTap: 'handleListItemTap',
          header: '负责人统计',
          data: [
            {
              thumb: '/image/avatar/avatar.png',
              count: '12',
              rate: '30',
              assignee: 'sven'
            },
            {
              thumb: '/image/avatar/girl.png',
              count: '10',
              rate: '25',
              assignee: '松青'
            },
            {
              thumb: '/image/avatar/boy.png',
              count: '8',
              rate: '20',
              assignee: '赵龙'
            },
            {
              thumb: '/image/avatar/boy.png',
              count: '10',
              rate: '25',
              assignee: '李健'
            }
          ]
        },
      },
  
    onLoad(){
        let sysInfo = app.globalData.sysInfo
        this.setData({
            width_pie: sysInfo.screenWidth,
            height_pie: sysInfo.screenHeight,
            width_line: sysInfo.screenWidth,
            height_line: sysInfo.screenHeight,
        })
    },
    onReady(){
       
    },
    onDraw(lineChart){
        //dd-charts组件内部会回调此方法，返回图表实例ddChart
        //提示：可以把异步获取数据及渲染图表逻辑放onDraw回调里面
        lineChart.clear()
        lineChart.source(chartDataNew, {
            value: {
              tickCount: 5,
              min: 0
            },
            date: {
              type: 'timeCat',
              range: [ 0, 1 ],
              tickCount: 3
            }
        })
        lineChart.tooltip({
          showItemMarker: false,
          onShow(ev) {
            const { items } = ev;
            items[0].name = items[0].title;
          }
        })
        lineChart.axis('date', {
            label(text, index, total) {
            const textCfg = {};
            if (index === 0) {
                textCfg.textAlign = 'left';
            }
            if (index === total - 1) {
                textCfg.textAlign = 'right';
            }
            return textCfg;
            }
        });
        lineChart.line().position('date*value');
        lineChart.render()
    },
    onPieDraw(pieChart){
        //dd-charts组件内部会回调此方法，返回图表实例ddChart
        //提示：可以把异步获取数据及渲染图表逻辑放onDraw回调里面
        pieChart.clear()
        pieChart.source(pieChartDataNew, {
          percent: {
            formatter: function formatter(val) {
              return val * 100 + '%';
            }
          }
        })
        pieChart.legend({
          position: 'right',
          itemFormatter: function itemFormatter(val) {
            return val + '  ' + map[val];
          }
        })
        pieChart.tooltip(false)
        pieChart.coord('polar', {
          transposed: true,
          radius: 0.85
        })
        pieChart.axis(false);
        pieChart.interval().position('a*percent').color('name', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0']).adjust('stack').style({
          lineWidth: 1,
          stroke: '#fff',
          lineJoin: 'round',
          lineCap: 'round'
        }).animate({
          appear: {
            duration: 1200,
            easing: 'bounceOut'
          }
        })
        pieChart.render();
    },
  onDropdownNavItemTap(e, index) {
    const { selectedNav, active } = this.data.dropdownSelectData;

    let nextactive = !active;
    if (selectedNav !== index) {
      nextactive = true;
    }

    this.setData({
      dropdownSelectData: {
        ...this.data.dropdownSelectData,
        active: nextactive,
        selectedNav: index
      }
    });
  },
  catchDropdownNavItemTap(e, parentIndex, index, title) {
    const { listData } = this.data.dropdownSelectData;

    const data = listData[parentIndex];

    data.selectedItem = index;

    dd.showToast({
      content: `你选中了第${parentIndex + 1}个tab的第${index + 1}个元素`, // 文字内容
      success: (res) => {

      },
    });
    this.setData({
      dropdownSelectData: {
        ...this.data.dropdownSelectData,
        active: false,
        listData
      }
    });
  },
  catchDropdownBgTap(e) {
    this.setData({
      active: false
    });
  },
  handleListItemTap(e) {
    dd.showToast({
      content: `第${e.currentTarget.dataset.index}个Item`,
      success: (res) => {

      },
    });
  }
})