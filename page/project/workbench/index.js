import list from '/page/biz/components/list';

Page({
  ...list,
  data: {
    listData: {
      onItemTap: 'handleListItemTap',
      header: '我负责未解决的',
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
  handleListItemTap(e) {
    dd.showToast({
      content: `第${e.currentTarget.dataset.index}个Item`,
      success: (res) => {

      },
    });
  }
})