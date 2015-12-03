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

	$scope.name = "Brenda";

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

$scope.topic = '';
$scope.description = '';
$scope.venue = '';
$scope.time = '';
$scope.date = '';
$scope.events = [
{id:1, topic:'teenage pregnancy', description:"Things we need to do as parents in our children to make sure they are not affected by this issue", venue: "Langa", date: 2015/12/13, time: 12h00-14h00 },
{id:2, topic:'teenage pregnancy', description:"Things we need to do as parents in our children to make sure they are not affected by this issue", venue: "Langa", date: 2015/12/13, time: 12h00-14h00  },
{id:3, topic:'teenage pregnancy', description:"Things we need to do as parents in our children to make sure they are not affected by this issue", venue: "Langa", date: 2015/12/13, time: 12h00-14h00  },
{id:4, topic:'teenage pregnancy', description:"Things we need to do as parents in our children to make sure they are not affected by this issue", venue: "Langa", date: 2015/12/13, time: 12h00-14h00 },
{id:5, topic:'teenage pregnancy', description:"Things we need to do as parents in our children to make sure they are not affected by this issue", venue: "Langa", date: 2015/12/13, time: 12h00-14h00  },
{id:6, topic:'teenage pregnancy', description:"Things we need to do as parents in our children to make sure they are not affected by this issue", venue: "Langa", date: 2015/12/13, time: 12h00-14h00  }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 
$scope.hideform = true; 
$scope.editEvent = function(id) {
  $scope.hideform = false;
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.topic = '';
	$scope.description = '';
	$scope.venue = '';
	$scope.time = '';
	$scope.date = '';
    } else {
    $scope.edit = false;
    $scope.topic = $scope.events[id-1].topic;
    $scope.description = $scope.events[id-1].description;
    $scope.venue = $scope.events[id-1].venue; 
    $scope.date = $scope.events[id-1].date; 
    $scope.time = $scope.events[id-1].time;  
  }
};

// $scope.$watch('passw1',function() {$scope.test();});
// $scope.$watch('passw2',function() {$scope.test();});
// $scope.$watch('fName', function() {$scope.test();});
// $scope.$watch('lName', function() {$scope.test();});

// $scope.test = function() {
//   if ($scope.passw1 !== $scope.passw2) {
//     $scope.error = true;
//     } else {
//     $scope.error = false;
//   }
//   $scope.incomplete = false;
//   if ($scope.edit && (!$scope.fName.length ||
//   !$scope.lName.length ||
//   !$scope.passw1.length || !$scope.passw2.length)) {
//      $scope.incomplete = true;
//   }
// };

}]);
