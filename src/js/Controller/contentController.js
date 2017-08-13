/**
 * Created by Administrator on 2017/6/23.
 */
angular.module('app').controller('contentController',['$scope','$http',function($scope,$http){
        $http({
            url:'http://127.0.0.1/Angular/webApp/content.php/',
            method:'jsonp'
        }).then(function(res){
            // console.log(res.data);
            $scope.listDate = res.data.columns;
        }).catch(function(err){
            console.log(err);
        })
}]);
