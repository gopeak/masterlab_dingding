Page({
  data: {    
    picker: false,
    tempRole: "",
    roleIndex: 0,
    memberIndex: 0,
    timeIndex: 0,
    tempTag: "",
    membersPicker: false,
    rolesPicker: false,
    timePicker: false,
    issuePicker: false,
    timeName: "start",
    tempMember: {},
    selectedLables: '已解决',  
    tabs: [
      {
        id: 1,
        name: "全部项目"
      },
      {
        id: 2,
        name: "我参与的"
      },
      {
        id: 3,
        name: "我负责的"
      }
    ],  
    issues: [
      {
        id: 1,
        title: "数据库设计（表结构 字典 存储过程）",
        status: "已解决",
        statusClass: "",
        member: "李健",
        prioirty: "高",
        time: "2019-4-4",
        memberImg: "/image/icon/issue_type/new.png",
        prioirtyImg: "/image/icon/issue_type/new.png"
      },
      {
        id: 2,
        title: "架构设计（数据库 开发语言 服务器）",
        status: "进行中",
        statusClass: "status-open",
        member: "韦朝夺",
        prioirty: "中",
        time: "2019-4-4",
        memberImg: "/image/icon/issue_type/new.png",
        prioirtyImg: "/image/icon/issue_type/new.png"
      }
    ],
    curIssues: [],
    tab: 1,
    actions: [
      {
        id: 1,
        name: "详情",
        img: "/image/logo.png",
        desc: "查看该事项下的详细信息"
      },
      {
        id: 2,
        name: "编辑",
        img: "/image/logo.png",
        desc: "编辑事项内容"
      },
      {
        id: 3,
        name: "删除",
        img: "/image/logo.png",
        desc: "删除该事项"
      },
      {
        id: 4,
        name: "加入迭代",
        img: "/image/logo.png",
        desc: "将该事项加入某个迭代"
      }
    ],
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
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    addIssue: false,
    masker: false,
    issue: {
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
    },
    sort: ["升序", "降序"]
  },

  onLoad(query) {
    this.setData({
      curIssues: this.data.issues
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
      picker: !temp,
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
        picker: false,
        rolesPicker: false,
        "issue.role": temp
    });
  },
  addMember(e) {
    let temp = this.data.membersPicker;
    this.setData({
      picker: !temp,
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
    let length = this.data.issue.members.length;
    this.data.issue.members = this.data.issue.members.push(temp);
    this.setData({
      picker: false,
      membersPicker: false
    });  
  },
  setTime(e) {
    let temp = this.data.timePicker;
    let name = e.target.dataset.name;
    this.setData({
      picker: !temp,
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
    let data = this.data.issue;
    let year = this.data.years[this.data.yearIndex];
    let month = this.data.months[this.data.monthIndex];
    let day = this.data.days[this.data.dayIndex];
    let date = year + '-' + month + '-' + day;

    let startDay = data.startTime;
    let endDay = data.endTime;

    if(this.data.timeName === "start"){
      startDay = date;
    } else {
      endDay = date;
    }

     this.setData({
        picker: false,
        timePicker: false,
        "issue.startTime": startDay,
        "issue.endTime": endDay
    });
  },
  cancelChange(e) {
    this.setData({
      picker: false,
      timePicker: false,
      rolesPicker: false,
      membersPicker: false
    });
  },
  issueAction(e) {
    let issue_id = e.target.dataset.id;
    let temp = this.data.issuePicker;
    this.setData({
      picker: !temp,
      issuePicker: !temp
    });
  },
  closeIssuePickeer(e) {
    this.setData({
      picker: false,
      issuePicker: false
    });
  },
  issueAdd(e) {
    this.setData({
      masker: true,
      addIssue: true
    });
  },
  maskerHidden(e) {
    this.setData({
      masker: false,
      addIssue: false
    });
  },
  backIssue(e) {
    this.setData({
      masker: false,
      addIssue: false,
      picker: false,
      issuePicker: false,
      rolesPicker: false,
      membersPicker: false
    });
  },
  cancelIssue(e) {
    this.setData({
      masker: false,
      addIssue: false
    });
  },
  changeTab(e) {
    let index = e.target.dataset.tab;
    let temp = this.data.issues;
    if (index > 0) {
        temp = [];
        temp[0] = this.data.issues[index - 1];
    }
    this.setData({
      curIssues: temp,
      tab: index + 1
    });
  }
});
