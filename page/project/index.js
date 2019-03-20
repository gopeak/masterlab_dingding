import lifecycle from '/util/lifecycle';
import animModal from '/util/items';
import Dropdown from '/page/biz/components/dropdown';
import Grid from '/page/biz/components/grid';

const lastComponents = [
  {
    icon: '/image/canvas.png',
    title: '画布',
    entitle: 'Canvas',
    page: 'canvas',
  },
];

 

Page({
  ...lifecycle,
  ...animModal.animOp,
  data: {
   
    listData: {
      header: '我负责未解决的',
      data: [
        {
          thumb: '/image/icon/issue_type/new.png',
          prority:'高',
          title: '数据库设计',
          arrow: 'horizontal',
          extra: '3.22'
        },
        {
          thumb: '/image/icon/issue_type/new.png',
          prority:'高',
          title: '产品PRD功能说明书',
          arrow: 'horizontal',
          extra: '3.28'
        },
        {
          thumb: '/image/icon/issue_type/task.png',
          prority:'中',
          title: '技术架构设计',
          arrow: 'horizontal',
          extra: '3.29'
        },
        {
          thumb: '/image/icon/issue_type/bug.png',
          prority:'高',
          title: '关于业务逻辑的bug',
          arrow: 'horizontal',
          extra: '3.29'
        }
      ]
    },
    grid: {
            list: [
                {
                    "color": "coral",
                    "header": "待处理",
                    "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
                    "text": "1"
                },
                {
                   "header": "进行中",
                    "color": "blue",
                    "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
                    "text": "2"
                },
                {
                   "header": "已解决",
                   "color": "green",
                    "icon": "https://zos.alipayobjects.com/rmsportal/HMVRwQoJUDyxZVkTyIqF.png",
                    "text": "3"
                },
            ],
            columnNum: 3
        },
    handleItemTap(e) {
        dd.showToast({
          content: `第${e.currentTarget.dataset.index}个Item`,
          success: (res) => {
            
          },
        });
    },
    dropdownSelectData: {
      active: false,
      selectedNav: 0,
      listData: [
        {
          nav: 'Masterlab-Dev',
          selectedItem: '',
          data: [
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '项目1'
            },
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '项目2',
            },
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '项目3',
            },
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '项目4',
            },
          ]
        },
      ],
    },
    ...animModal.data,
    pageName: 'project/index',
    pageInfo: {
      pageId: 0,
    },
    hidden: true,
    curIndex: 0,
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
  onGridItemTap(e) {
    const curIndex = e.currentTarget.dataset.index;
    const childList = this.data.arr.list[curIndex];
    if (childList.subs) {
      this.setData({
        hidden: !this.data.hidden,
        curIndex,
      });
      this.createMaskShowAnim();
      this.createContentShowAnim();
    } else {
      this.onChildItemTap({
        currentTarget: {
          dataset: { page: childList.page },
        },
      });
    }
  },
  onChildItemTap(e) {
    const { page } = e.currentTarget.dataset;
    dd.navigateTo({
      url: `${page}/${page}`,
    });
  },
  onModalCloseTap() {
    this.createMaskHideAnim();
    this.createContentHideAnim();
    setTimeout(() => {
      this.setData({
        hidden: true,
      });
    }, 210);
  },
});
