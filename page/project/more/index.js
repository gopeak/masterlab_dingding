import list from '/page/biz/components/list';
import Dropdown from '/page/biz/components/dropdown';


let app = getApp()
Page({
  ... Dropdown,
  ...list,
  data: {
          projectOpts: {
            list: [
                {
                    "icon": "/image/icon/more/hover.png",
                    "text": "切换项目",
                    "link":""
                },
                {
                    "icon": "/image/icon/more/new.png",
                    "text": "新增项目",
                    "link":"page/project/all/index"
                },
                {
                    "icon": "/image/icon/more/manager.png",
                    "text": "全部项目",
                    "link":"page/project/all/index"
                },
                {
                    "icon": "",
                    "text": "",
                    "link":""
                }
            ],
            columnNum: 4
        },
        curProjectSetting: {
            list: [
                {
                    "icon": "/image/icon/more/info.png",
                    "text": "基本信息"
                },
                {
                    "icon": "/image/icon/more/module.png",
                    "text": "模 块"
                },
                {
                    "icon": "/image/toolbar/rocket_active.png",
                    "text": "迭 代"
                },
                {
                    "icon": "/image/icon/more/tag.png",
                    "text": "版 本"
                }
            ],
            columnNum: 4
        },
        personSetting: {
            list: [
                {
                    "icon": "/image/icon/more/index_setting.png",
                    "text": "首页设置"
                },
                {
                    "icon": "/image/icon/more/chart_setting.png",
                    "text": "统计设置"
                },
                {
                    "icon": "/image/icon/more/filter.png",
                    "text": "自定义过滤器"
                },
                {
                    "icon": "",
                    "text": ""
                }
            ],
            columnNum: 4
        }
  },
    handleItemTap(e) {

        console.log(e.currentTarget); 
        dd.navigateTo({
          url: '/page/project/all/index'
        });
 
    }

})