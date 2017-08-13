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