
var BlogApp = angular.module('BlogApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


BlogApp.controller('BlogController', function($scope, $http) {
  $scope.loadBlogs = function() {
    $http.get("https://public-api.wordpress.com/rest/v1.1/freshly-pressed").success(function(response){
      console.log(response);
      $scope.posts = response.posts;
    })
    .finally(function(){
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
});