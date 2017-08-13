/**
 * Created by Administrator on 2017/6/23.
 */
angular.module('app').controller('authorController',['$scope','$http',function($scope,$http){
        $http({  //获取本周推荐的作者
            url:'http://127.0.0.1/Angular/webApp/author.php/',
            method:'jsonp'
        }).then(function(res){
            // console.log(res.data.authors);
            $scope.listDate = res.data.authors;
        }).catch(function(err){
            console.log(err);
        }),
            $http({  //获取热门作者
                url:'http://127.0.0.1/Angular/webApp/author_2.php/',
                method:'jsonp'
            }).then(function(res){
                // console.log(res.data.authors);
                $scope.listDate2 = res.data.authors;
            }).catch(function(err){
                console.log(err);
            })
}]);
