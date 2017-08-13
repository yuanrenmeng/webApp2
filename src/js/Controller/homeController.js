/**
 * Created by Administrator on 2017/6/23.
 */
angular.module('app').controller('homeController',['$scope','$http',function($scope,$http){
        $http({
            url:'http://127.0.0.1/Angular/webApp/home.php/',
            method:'jsonp'
        }).then(function(res){
            // console.log(res.data);
            $scope.listDate = res.data.posts;
        }).catch(function(err){
            console.log(err);
        })
}]);
