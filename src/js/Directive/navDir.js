/**
 * Created by Administrator on 2017/6/23.
 */
angular.module('app').directive('navs',function(){
    return {
        restrict :'EA',
        templateUrl:'../views/nav_tpl.html',
        link:function($scope,ele,attr){
            $scope.$on('nav',function(e,args){
                // args tabBar传过来的参数对象 Object {type: "home"}
                $scope.type = args.type;
                switch ($scope.type){
                    case 'home':
                        navTitle = '首页';
                        break;
                    case 'author':
                        navTitle = '作者';
                        break;
                    case 'content':
                        navTitle = '栏目';
                        break;
                    case 'my':
                        navTitle = '我的';
                        break;
                }
                ele.find('span').html(navTitle)

            })
        }
    }
});


