/**
 * Created by Administrator on 2017/6/23.
 */
angular.module('app').config(['$sceDelegateProvider',function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://127.0.0.1/Angular/webApp/**'
    ])
}]);