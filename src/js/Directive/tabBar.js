/**
 * Created by Administrator on 2017/6/23.
 */
angular.module('app').directive('tabar',function(){
    return {
        restrict :'EA',
        templateUrl:'../views/tabBar_tpl.html',
        link:function($scope,ele,attr){
            $scope.changeNav = function(type){
                //type==>tabBar里面click传入的参数
                $scope.$emit('tabBar',{type:type})
            }
        }
    }
});