if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$.js?appxworker=1');
require('./importScripts$.js?appxworker=1');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../../app.js?appxworker=1');
require('../../node_modules/dd-charts/es/f2/index.js?appxworker=1');
require('../../page/project/index.js?appxworker=1');
require('../../page/project/issue2/index.js?appxworker=1');
require('../../page/project/workbench/index.js?appxworker=1');
require('../../page/biz/index.js?appxworker=1');
require('../../page/biz/pages/collapse/index.js?appxworker=1');
require('../../page/biz/pages/dropdown/index.js?appxworker=1');
require('../../page/biz/pages/error-view/index.js?appxworker=1');
require('../../page/biz/pages/grid/index.js?appxworker=1');
require('../../page/biz/pages/list/index.js?appxworker=1');
require('../../page/project/list/index.js?appxworker=1');
require('../../page/project/sprint/index.js?appxworker=1');
require('../../page/project/stat/index.js?appxworker=1');
require('../../page/biz/pages/tag/index.js?appxworker=1');
require('../../page/project/more/index.js?appxworker=1');
require('../../page/project/all/index.js?appxworker=1');
}
self.bootstrapApp ? self.bootstrapApp({ success: success }) : success();
}