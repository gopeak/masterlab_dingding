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
          nav: 'APP项目',
          selectedItem: '',
          data: [
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '标题文字1'
            },
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '标题图片',
            },
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '标题文字',
            },
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '标题文字',
            },
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '标题文字',
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
    arr: {
      onItemTap: 'onGridItemTap',
      onChildItemTap: 'onChildItemTap',
      list: [
        {
          icon: '/image/view.png',
          title: '视图容器',
          entitle: 'View',
          subs: [
            {
              title: '基础视图',
              entitle: 'View',
              page: 'view',
            },
            {
              title: '滚动视图',
              entitle: 'ScrollView',
              page: 'scroll-view',
            },
            {
              title: '滑动视图',
              entitle: 'Swiper',
              page: 'swiper',
            },
          ],
        }, {
          icon: '/image/basic.png',
          title: '基础内容',
          entitle: 'Basic Content',
          subs: [
            {
              title: '文字',
              entitle: 'Text',
              page: 'text',
            },
            {
              title: '图标',
              entitle: 'Icon',
              page: 'icon',
            },
            {
              title: '进度条',
              entitle: 'Progress',
              page: 'progress',
            },
          ],
        }, {
          icon: '/image/form.png',
          title: '表单组件',
          entitle: 'Form',
          subs: [
            {
              title: '按钮',
              entitle: 'Button',
              page: 'button',
            },
            {
              title: '复选框',
              entitle: 'Checkbox',
              page: 'checkbox',
            },
            {
              title: '表单',
              entitle: 'Form',
              page: 'form',
            },
            {
              title: '文本输入',
              entitle: 'Input',
              page: 'input',
            },
            {
              title: '标签',
              entitle: 'Label',
              page: 'label',
            },
            {
              title: '选择器视图',
              entitle: 'PickerView',
              page: 'picker-view',
            },
            {
              title: '选择器',
              entitle: 'Picker',
              page: 'picker',
            },
            {
              title: '单选框',
              entitle: 'Radio',
              page: 'radio',
            },
            {
              title: '滑动条',
              entitle: 'Slider',
              page: 'slider',
            },
            {
              title: '开关',
              entitle: 'Switch',
              page: 'switch',
            },
            {
              title: '多行输入',
              entitle: 'Textarea',
              page: 'textarea',
            },
          ],
        }, {
          icon: '/image/feedback.png',
          title: '操作反馈',
          entitle: 'Feedback',
          subs: [
            {
              title: '动作面板',
              entitle: 'ActionSheet',
              page: 'action-sheet',
            },
            {
              title: '对话框',
              entitle: 'Modal',
              page: 'modal',
            },
            {
              title: '轻提示',
              entitle: 'Toast',
              page: 'toast',
            },
            {
              title: '加载提示',
              entitle: 'Loading',
              page: 'loading',
            },
          ],
        }, {
          icon: '/image/navigator.png',
          title: '导航',
          entitle: 'Navigator',
          page: 'navigator',
        }, {
          icon: '/image/media.png',
          title: '媒体组件',
          entitle: 'Media', page: 'image',
        }, 
        // {
        //   icon: '/image/map.png',
        //   title: '地图',
        //   entitle: 'Map',
        //   page: 'map',
        // },
        ...lastComponents,
      ],
    },
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
