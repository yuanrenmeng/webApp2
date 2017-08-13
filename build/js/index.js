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

/**
 * Created by Administrator on 2017/6/23.
 */
angular.module('app').config(['$sceDelegateProvider',function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://127.0.0.1/Angular/webApp/**'
    ])
}]);
/**
 * Created by Administrator on 2017/6/23.
 */
// (function (angular) {

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        url: '/',
        views:{
            home:{
                templateUrl:'../views/home_tpl.html',
                controller:'homeController'
            },
            author:{
                templateUrl:'../views/author_tpl.html',
                controller:'authorController'
            },
            content:{
                templateUrl:'../views/content_tpl.html',
                controller:'contentController'
            },
            my: {
                templateUrl: '../views/me_tpl.html',
                controller: 'meController'
            }
        }
    });
    $urlRouterProvider.otherwise('/')

}]);

// })(angular)
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
/**
 * Created by Administrator on 2017/6/23.
 */

