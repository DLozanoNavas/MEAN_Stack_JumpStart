var app = angular.module('MeanCommerce',[]);


app.controller('mainController', ["$scope",function($scope){

}]);

app.controller('mainMenuController', ["$scope",function($scope){
    $scope.StoreName = "MeanCommerce"
}]);

app.controller('footerController', ["$scope",function($scope){
    $scope.CompanyName = "Fenix Alliance Group";
    $scope.CurrentYear = new Date().getFullYear();
    $scope.PrivacyPolicyURL = "https://fenixalliance.com.co";
}]);