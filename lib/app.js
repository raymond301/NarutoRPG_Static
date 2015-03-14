var app = angular.module('myApp',['ui.bootstrap', 'myApp.services','ngRoute']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            // Home Page - Records list
            .when('/', {
                templateUrl: 'html/chakra_pool.html',
                controller: 'EarningController'
            })
            // Display Record
            .when('/pick_hero', {
                templateUrl: 'html/hero_picker.html',
                controller: 'HeroController'
            })
            .when('/pick_mission', {
                templateUrl: 'html/mission_picker.html',
                controller: 'MissionController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

app.controller('MainController', ['$scope','StoryLineBackground','MyAttributes', function($scope,StoryLineBackground,MyAttributes){
    $scope.my_background =  StoryLineBackground.get();
    $scope.myAttr = MyAttributes;
    $scope.hero = undefined;

}]);


app.controller('EarningController', ['$scope','$location','MyAttributes', function ($scope,$location,MyAttributes) {
    $scope.add_chakra = MyAttributes.chakra;
    // Contains myAttr, super from Main
}]);

app.controller('HeroController', ['$scope','$location', function ($scope,$location) {
    $scope.pick_hero = function(p){
        $scope.myAttr.hero = p;
        $location.path("#/");
    }
}]);

app.controller('MissionController', ['$scope','$location', function ($scope,$location) {
    // Contains myAttr, super from Main

}]);