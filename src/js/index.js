/**
 * Created by Administrator on 2017/6/23.
 */
(function(angular){
    var app = angular.module('app',['ui.router']);
    app.controller('myrController',['$scope',function($scope){
        $scope.title = 'webApp';
        $scope.navTitle = '首页';
        $scope.type = 'home';
        $scope.$on('tabBar',function(e,args){//广播
            $scope.$broadcast('nav',args);
        })
    }])
})(angular);
