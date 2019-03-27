
import Dropdown from '/page/biz/components/dropdown';

Page({
  ...Dropdown,
  data: {    
    dropdownSelectData: {
      active: false,
      selectedNav: 0,
      keyword: "",
      filter: false,
      sort: false,
      listData: [
        {
          nav: 'Masterlab-Dev',
          selectedItem: '',
          data: [
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '项目2'
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

      filterData: [
        {
          name: "第一条",
          data: [
            {
              title: "第一条第一个子项"
            },
            {
              title: "第一条第二个子项"
            },
            {
              title: "第一条第三个子项"
            }
          ]
        },
        {
          name: "第二条",
          data: [
            {
              title: "第二条第一个子项"
            },
            {
              title: "第二条第二个子项"
            },
            {
              title: "第二条第三个子项"
            }
          ]
        },
        {
          name: "第三条",
          data: [
            {
              title: "第三条第一个子项"
            },
            {
              title: "第三条第二个子项"
            },
            {
              title: "第三条第三个子项"
            }
          ]
        }
      ],
      mainIndex: 0,
      subIndex: 0,
      sortData: {
        title: "",
        role: "",
        members: [],
        startTime: "",
        endTime: "",
        startDay: 0,
        endDay: 0,
        startPerformance: 0,
        endPerformance: 0,
        desc: ""
      }
    },
    tempRole: "",
    roleIndex: 0,
    tempTag: "",
    rolesPicker: false,
    timePicker: false,
    tiemName: "start",
    selectedLables: '已解决',
    tags: [
        {
            label: '待处理',
            selected: false,
            onChange: 'onTagChange1',
        },
        {
            label: '进行中',
            selected: true,
            onChange: 'onTagChange2',
        },
        {
            label: '已解决',
            selected: false,
            onChange: 'onTagChange3',
        },
    ],
    roles: ["负责人", "确认人", "指派人", "创建人"],
    members: [
      {
        id: 1,
        name: "张三",
        job: "前端"
      },
      {
        id: 2,
        name: "李四",
        job: "后端"
      },
      {
        id: 3,
        name: "王五",
        job: "设计"
      }
    ]
  },

  onTagChange1(e) {
      this.onTagChange(e.currentTarget.dataset.selected, 0);
  },
  onTagChange2(e) {
      this.onTagChange(e.currentTarget.dataset.selected, 1);
  },
  onTagChange3(e) {
      this.onTagChange(e.currentTarget.dataset.selected, 2);
  },
  onTagChange(selected, index) {
      const tempTag = [].concat(this.data.tags);
      tempTag[index].selected = !selected;
      const labels = tempTag.map((item) => item.selected ? item.label : '').join(',');
      this.setData({
          tags: tempTag,
          selectedLables: labels,
      });
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
      active: false,
      filter: false,
      sort: false
    });
  },
  bindKeyInput(e) {
    this.setData({
      "dropdownSelectData.keyword":  e.detail.value
    });
  },
  sortIssue(e) {
    let sort = this.data.dropdownSelectData.sort;

    this.setData({
      "dropdownSelectData.sort":  !sort,
      "dropdownSelectData.active":  false,
      "dropdownSelectData.filter":  false
    });
  },
  filterIssue(e) {
    let filter = this.data.dropdownSelectData.filter;

    this.setData({
      "dropdownSelectData.filter":  !filter,
       "dropdownSelectData.active":  false,
      "dropdownSelectData.sort":  false
    });
  },
  setMainIndex(e) {
    let index = e.target.dataset.index;
    this.setData({
      "dropdownSelectData.mainIndex":  index,
      "dropdownSelectData.subIndex":  0
    });
  },
  setSubIndex(e) {
    let index = e.target.dataset.index;
    this.setData({
      "dropdownSelectData.subIndex":  index
    });
  },
  clearFilter(e) {
    this.setData({
      "dropdownSelectData.mainIndex":  0,
      "dropdownSelectData.subIndex":  0
    });
  },
  saveFilter(e) {    
    this.setData({
      "dropdownSelectData.filter":  false,
      "dropdownSelectData.mainIndex":  0,
      "dropdownSelectData.subIndex":  0
    });
  },
  selectRole(e) {
    let temp = this.data.rolesPicker;
    this.setData({
      rolesPicker: !temp
    });
  },
  roleChange(e) {
    let index = e.detail.value;
    let value = this.data.roles[index];
    this.setData({
        tempRole: value
    });
  },
  saveRoleChange(e) {
    let temp = this.data.tempRole;
    alert(temp);
     this.setData({
        rolesPicker: false,
        "dropdownSelectData.sortData.role": temp
    });
  }
});
