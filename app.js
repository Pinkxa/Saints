var EduApp = angular.module("EduApp", []);
EduApp.controller('MainCtrl', ['$scope', function($scope){

	$scope.venues = [
				{
					name : "Langa Primary",
					latitude : 555,
					longitude : 200
		},
		{
					name : "Khayelitsha Primary",
					latitude : 850,
					longitude : 500
		},
		{
					name : "Nyanga Primary",
					latitude : 600,
					longitude : 300
		}
	]

	$scope.name = "Pretty";

  // var mysrclat= 0; var mysrclong = 0;
  // $scope.latitude = "123";
  // $scope.latitudeDisplay = function(){
  // 	return $scope.latitude;
  // }

  // $scope.longitude = "123";
  // $scope.longitudeDisplay = function(){
  // 	return $scope.longitude;
  // }


  $scope.getLocation = function(position){
  	$scope.latitude = position.coords.latitude; 
  	$scope.longitude = position.coords.longitude;
  	    $scope.$apply(); //this triggers a $digest

               
                // console.log(mysrclat);
                // console.log(mysrclong);
  };

  $scope.nearMe = function() {
  	
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition($scope.getLocation);
        
    }
    //$scope.latitude = "HELLO";
}
}]);
