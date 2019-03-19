import list from '/page/biz/components/list';
import Dropdown from '/page/biz/components/dropdown';
const chartDataNew = [
    { date: "2017-06-05", value: 116 },
    { date: "2017-06-06", value: 129 },
    { date: "2017-06-07", value: 135 },
    { date: "2017-06-08", value: 86 },
    { date: "2017-06-09", value: 73 },
    { date: "2017-06-10", value: 85 },
    { date: "2017-06-11", value: 73 },
    { date: "2017-06-12", value: 68 },
    { date: "2017-06-13", value: 92 },
    { date: "2017-06-14", value: 130 },
    { date: "2017-06-15", value: 245 },
    { date: "2017-06-16", value: 139 },
    { date: "2017-06-17", value: 115 },
    { date: "2017-06-18", value: 111 },
    { date: "2017-06-19", value: 309 },
    { date: "2017-06-20", value: 206 },
    { date: "2017-06-21", value: 137 },
    { date: "2017-06-22", value: 128 },
    { date: "2017-06-23", value: 85 },
    { date: "2017-06-24", value: 94 },
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

let app = getApp()
Page({
  ... Dropdown,
  ...list,
  data: {
    width:200,
       height:200,
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
      header: '事 项',
      data: [
        {
          thumb: '/image/icon/issue_type/new.png',
          title: '数据库设计',
          arrow: 'horizontal',
          extra: 'sven'
        },
        {
          thumb: '/image/icon/issue_type/new.png',
          title: '产品PRD功能说明书',
          arrow: 'horizontal',
          extra: '松青'
        },
        {
          thumb: '/image/icon/issue_type/task.png',
          title: '技术架构设计',
          arrow: 'horizontal',
          extra: '赵龙'
        },
        {
          thumb: '/image/icon/issue_type/bug.png',
          title: '关于业务逻辑的bug',
          arrow: 'horizontal',
          extra: '李健'
        }
      ]
    },
  },
  
    onLoad(){
        let sysInfo = app.globalData.sysInfo
        this.setData({
            width: sysInfo.screenWidth,
            height: sysInfo.screenHeight,
        })
    },
    onReady(){
       
    },
    onDraw(ddChart){
        //dd-charts组件内部会回调此方法，返回图表实例ddChart
        //提示：可以把异步获取数据及渲染图表逻辑放onDraw回调里面
        ddChart.clear()
        ddChart.source(chartDataNew, {
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
        ddChart.tooltip({
          showItemMarker: false,
          onShow(ev) {
            const { items } = ev;
            items[0].name = items[0].title;
          }
        })
        ddChart.axis('date', {
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
        ddChart.line().position('date*value');
        ddChart.render()
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