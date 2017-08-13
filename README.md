# webApp2

仿豆瓣app：

使用bower包管理器和gulp构建工具

文件夹：src:未经过任何处理的开发代码
       build:程序运行代码
       dist:经过丑化，合并的代码
       
使用框架，angular1.6和angular-ui-router

使用jsonp配合后台PHP代码进行跨域数据获取

在src文件夹中：
  js文件夹存放的是：
  Config:  路由的配置/白名单的配置
  Controller:对应模块的控制器，通过$http中不同的URL获取不同的数据
  Directive:自定义指令，底部的tabBar和头部的navDir
  style文件夹存放的是:
  template_css:存放的是各个模块的less样式
  index.less:存放的是用到的需要@import的template_css文件夹中各个模块的less样式
  normalize.less ：存放的是对各个表签默认样式初始化
  variable.less：设置了不同的变量对应css中对应的属性及属性值的转换
  views:视图文件
  
实现思路：
  1.在index.html首页设置头部，内容和导航栏，头部（navs）和导航栏(tabBar)用自定义指令设置，内容板块的数量根据tabBar的栏目设置，
  通过ng-show 传入的参数控制是否显示，并且ui-view对应的值等于该参数，ui-view多视图显示位置，点击到的显示，剩下的隐藏,配置index.js文件，
  定义angular模块和控制器，设置项目title，然后在index.html中绑定控制器和绑定模块
  2.使用广播是navs和tabBar之间能通信，即点击哪个tabBar，navs中能显示当前是哪个模块；具体实现：在设置tabBar模块，通过ng-click
  的时候函数传入参数，让index.html中判断哪个ui-view显示，在tabBar自定义指令js中，把templateUrl指向tabBar模块，通过自定义函数中的link
  函数把ng-click的函数绑定上去，向上通过$emit把当前点击的函数里面的参数传进去，然后在index.js中通过$on的回调函数通过$brodcast传到navs
  自定义指令js中，把templateUrl指向navs模块,在link函数中通过参数$scope.$on接收传过来的值，绑定到$scope中，然后通过switch判断传过来的
  是哪个值，ng-show等于这个值的那个ui-view就显示
  3.配置router，上步获取到了ui-view的值，通过$stateProvider.state路由配置，设置当views为哪个模板的时候就templateUrl引入该模块到ui-view中，
  不同的模块抽取出来对应不同的tpl,不同的Controller,tpl里面对应的是该模块的html，全部controller放在一个文件夹，不同的模块的controller通过
  $http中的URL引导不同的PHP文件中，回调函数就是获取数据，最后显示到tpl中，PHP文件是后台编写，把要获取对应的数据的豆瓣地址通过file_get_contents
  变成字符串赋予自定义的参数如$res，然后通过$_GET()获取callback参数，最后echo出去，（jsonp跨域获取数据的原理），因为在controller中$httpf的method
  设置为jsop.默认会发送一个callback参数给后台，后台获取到个这参数并返回一个以这个参数为函数名的函数并包裹数据返回，还要记得配置白名单！


