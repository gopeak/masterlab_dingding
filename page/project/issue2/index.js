
import Dropdown from '/page/biz/components/dropdown';

Page({
  ...Dropdown,
  data: {
    dropdownSelectData: {
      active: false,
      selectedNav: 0,
      listData: [
        {
          nav: '项目1',
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
        {
          nav: '优先级',
          selectedItem: '',
          data: [
            {
              title: '紧急'
            },
            {
              title: '高',
            },
            {
              title: '一般',
            },
            {
              title: '低',
            },
          ]
        },
        {
          nav: '迭代',
          selectedItem: '',
          data: [
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '第一次迭代'
            },
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '第二次迭代',
            },
            {
              thumb: 'https://zos.alipayobjects.com/rmsportal/NTuILTPhmSpJdydEVwoO.png',
              title: '第三次迭代',
            },
          ]
        },
      ],
    },
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
      active: false
    });
  }
});
