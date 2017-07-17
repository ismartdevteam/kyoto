'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($http,$scope, $location) {

    $scope.login = function(data) {
	$http.post('../services/admin/user.php',data).success(function(data){
          
     
				if(data!=0){


				      $location.path('/dashboard');
				}	       
				else  {
					$scope.msgtxt='Нэвтрэх нэр эсхүл Нууц үг буруу байна';
					$location.path('/login');
				}
				}				   
);

      return false;
    }

  });
