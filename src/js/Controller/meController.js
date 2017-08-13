/**
 * Created by Administrator on 2017/6/23.
 */
angular.module('app').controller('meController',['$scope','$http',function($scope,$http){
        $http({
            url:'http://127.0.0.1/Angular/webApp/me.php/',
            method:'jsonp'
        }).then(function(res){
            console.log(res.data.posts);
            $scope.listDate = res.data;
        }).catch(function(err){
            console.log(err);
        })
}]);
