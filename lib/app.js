var app = angular.module('myApp',['ui.bootstrap', 'myApp.services']);

app.controller('MainController', ['$scope','StoryLineBackground', function($scope,StoryLineBackground){
    //$scope.image="http://momentumbooks.com.au/wp-content/uploads/2013/06/space.jpg";
    //$scope.my_background = "url(" + $scope.image + ") no-repeat center center fixed";

    $scope.my_background =  StoryLineBackground.get();
    console.log($scope.my_background);
}]);
