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
}])