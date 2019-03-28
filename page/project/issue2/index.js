
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
        startTime: "请选择",
        endTime: "请选择",
        startDay: 0,
        endDay: 0,
        startPerformance: 0,
        endPerformance: 0,
        desc: ""
      }
    },
    tempRole: "",
    roleIndex: 0,
    memberIndex: 0,
    timeIndex: 0,
    tempTag: "",
    membersPicker: false,
    rolesPicker: false,
    timePicker: false,
    timeName: "start",
    tempMember: {},
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
    ],
    yearIndex: 0,
    monthIndex: 0,
    dayIndex: 0,
    years: ["2012", "2013", "2014", "2015", "2016"],
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
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
     this.setData({
        rolesPicker: false,
        "dropdownSelectData.sortData.role": temp
    });
  },
  addMember(e) {
    let temp = this.data.membersPicker;
    this.setData({
      membersPicker: !temp
    });
  },
  memberChange(e) {
    let index = e.detail.value;
    let temp = this.data.members[index];
    this.setData({
      tempMember: temp
    });
  },
  deleteMember(e) {
    let index = e.target.dataset.index;
    let members = this.data.dropdownSelectData.sortData.members;
    alert(typeof members);
  },
  saveMemberChange(e) {
    let temp = this.data.tempMember;
    let length = this.data.dropdownSelectData.sortData.members.length;
    this.data.dropdownSelectData.sortData.members = this.data.dropdownSelectData.sortData.members.push(temp);
    this.setData({
      membersPicker: false
    });  
  },
  setTime(e) {
    let temp = this.data.timePicker;
    let name = e.target.dataset.name;
    this.setData({
      timePicker: !temp,
      timeName: name
    });
  },
  timeChange(e) {
    let value = e.detail.value;    
    let yearIndex = value[0];
    let monthIndex = value[1];
    let dayIndex = value[2];
    let days = this.data.days;

    if(monthIndex == 1) {
      days = days.filter(function(n) {
        return n < 29;
      });
    } else if (monthIndex == 3 || monthIndex == 5 || monthIndex == 8 || monthIndex == 10) {
      days = days.filter(function(n) {
        return n < 31;
      });
    }

    this.setData({
      yearIndex: yearIndex,
      monthIndex: monthIndex,
      dayIndex: dayIndex,
      days: days
    });
  },
  saveTimeChange(e) {
    let data = this.data.dropdownSelectData;
    let year = this.data.years[this.data.yearIndex];
    let month = this.data.months[this.data.monthIndex];
    let day = this.data.days[this.data.dayIndex];
    let date = year + '-' + month + '-' + day;

    let startDay = data.sortData.startTime;
    let endDay = data.sortData.endTime;

    if(this.data.timeName === "start"){
      startDay = date;
    } else {
      endDay = date;
    }

     this.setData({
        timePicker: false,
        "dropdownSelectData.sortData.startTime": startDay,
        "dropdownSelectData.sortData.endTime": endDay
    });
  },
  cancelChange(e) {
    this.setData({
      timePicker: false,
      rolesPicker: false,
      membersPicker: false
    });
  }
});
