'use strict';
var app=angular.module('yapp');
app.controller('DashboardCtrl', function($scope, $state,$stateParams) {
	$scope.$state = $state;

});

app .controller('Menu', function($scope, $state,$stateParams,$http,FileUploader,ngDialog) {

	var menu_id=$stateParams.menu_id;
	$scope.Main_menu_id=menu_id;
	$scope.update = function() {
		getdata(""+   $scope.selectedItem.id);
	}
	$scope.$state = $state;
	if(!isNaN(menu_id)){
		console.log(menu_id);
	$http.get("/kyoto/services/menu.php?id="+menu_id+"&hl=MN_mn").success(function(data) {

		if(data.error_number==1000){
			
			$scope.menu1=data.data;
			$scope.selectedItem=$scope.menu1[0];
			getdata(""+$scope.selectedItem.id);
			
		}
	}).error(function(data) {
		console.log(data);
	});
	}
	$scope.deleteMenu=function(){
		console.log($scope.selectedItem.id);
		$http.get("../services/admin/delete_menu.php?id="+$scope.selectedItem.id).success(function(data){

			$scope.openPlain(data.error_description);


		}).error(function(data) {
			console.log(data);

		});

	};
		$scope.deleteContent=function(array,index,id){

		$http.get("../services/admin/delete_content.php?id="+id).success(function(data){

			$scope.openPlain(data.error_description);
			if(data.error_number==1000){
				 array.splice(index, 1);
			}

		}).error(function(data) {
			console.log(data);

		});

	};
	$scope.addMenu=function(data){
		data.menu_id=menu_id;

		$http.post("/kyoto/services/admin/addMenu.php",data).success(function(data){

			$scope.openPlain(data.error_description);

		}).error(function(data) {
			console.log(data);
		});
	};
	$scope.openPlain = function (text) {
		ngDialog.open({
			template: text,
			className: 'ngdialog-theme-plain',
			plain:true,
		});
	};


	function getdata(id){
		console.log(id);
		$http.get("/kyoto/services/leftmenu.php?id="+id+"&hl=MN_mn").success(function(data) {
			if(data.error_number==1000){
				console.log(data);
				$scope.contents = data.data;
				console.log(data.menu);
				$scope.menuDatas=data.menu;

			}
		}).error(function(data) {
			console.log(data);
		});;

	}
	var uploader = $scope.uploader = new FileUploader({
		url: '../upload.php'
	});
	uploader.filters.push({
		name: 'customFilter',
		fn: function(item /*{File|FileLikeObject}*/, options) {
			return this.queue.length < 10;
		}
	});

	uploader.onCompleteItem = function(fileItem, response, status, headers) {
		$scope.uploader.progress=0;
		console.log(response.path);
		$scope.img={
			"path":response.path,
			"menu_id":$scope.selectedItem.id
		}
		console.log($scope.img)
		$http.post("../services/admin/change_menu_pic.php",$scope.img).success(function(data){
			console.log(data);
			if(data==1 || data==2)
				$scope.openPlain('Амжилттай нэмэгдлээ');
			else
				$scope.openPlain('Хүсэлт амжилтгүй боллоо');

		}).error(function(data) {
			console.log(data);
		});
	};
	uploader.onCompleteAll = function() {
		console.info('onCompleteAll');
	};

	console.info('uploader', uploader);
});

app.directive('ngConfirmClick', [
	function(){
		return {
			priority: -1,
			restrict: 'A',
			link: function(scope, element, attrs){
				element.bind('click', function(e){
					var message = attrs.ngConfirmClick;
					if(message && !confirm(message)){
						e.stopImmediatePropagation();
						e.preventDefault();
					}
				});
			}
		}
	}
	]);
app .controller('Product', function($scope, $state,$stateParams,$http,FileUploader,ngDialog) {

  $http.get("/kyoto/services/product.php?hl=MN_mn").success(function(data) {
    if(data.error_number==1000){
      console.log(data);
      $scope.product = data.data;


    }
  }).error(function(data) {
    console.log(data);
  });;
		$scope.deleteContent=function(array,index,id){
			console.log("product id _"+id);
		$http.get("../services/admin/deleteProduct.php?id="+id).success(function(data){

			$scope.openPlain(data.error_description);
			if(data.error_number==1000){
				 array.splice(index, 1);
			}

		}).error(function(data) {
			console.log(data);

		});

	};

	$scope.openPlain = function (text) {
		ngDialog.open({
			template: text,
			className: 'ngdialog-theme-plain',
			plain:true,
		});
	};
var uploader = $scope.uploader = new FileUploader({
		url: '../upload.php'
	});
	uploader.filters.push({
		name: 'customFilter',
		fn: function(item /*{File|FileLikeObject}*/, options) {
			return this.queue.length < 10;
		}
	});

	uploader.onCompleteItem = function(fileItem, response, status, headers) {
		$scope.uploader.progress=0;
		console.log(response.path);
		$scope.newcontent.path=response.path;
		$scope.newcontent.menu_id=$stateParams.menu_id;
		
		console.log($scope.newcontent)
		$http.post("../services/admin/addProduct.php",$scope.newcontent).success(function(data){
			console.log(data);
			$scope.openPlain(data.error_description);


		}).error(function(data) {
			console.log(data);
		});
	};
	uploader.onCompleteAll = function() {
		console.info('onCompleteAll');
	};

});

app .controller('NewConCtrl', function($scope, $state,$stateParams,$http,FileUploader,ngDialog) {
	$scope.openPlain = function (text) {
		ngDialog.open({
			template: text,
			className: 'ngdialog-theme-plain',
			plain:true,
		});
	};


	console.log("stateParams---"+$stateParams.menu_id);

	var uploader = $scope.uploader = new FileUploader({
		url: '../upload.php'
	});
	uploader.filters.push({
		name: 'customFilter',
		fn: function(item /*{File|FileLikeObject}*/, options) {
			return this.queue.length < 10;
		}
	});

	uploader.onCompleteItem = function(fileItem, response, status, headers) {
		$scope.uploader.progress=0;
		console.log(response.path);
		$scope.newcontent.path=response.path;
		$scope.newcontent.menu_id=$stateParams.menu_id;
		
		console.log($scope.newcontent)
		$http.post("../services/admin/addContent.php",$scope.newcontent).success(function(data){
			console.log(data);
			$scope.openPlain(data.error_description);


		}).error(function(data) {
			console.log(data);
		});
	};
	uploader.onCompleteAll = function() {
		console.info('onCompleteAll');
	};


});
app .controller('Slider', function($scope, $state,$stateParams,$http,FileUploader,ngDialog) {
	$scope.openPlain = function (text) {
		ngDialog.open({
			template: text,
			className: 'ngdialog-theme-plain',
			plain:true,
		});
	};

 $http.get("/kyoto/services/img_slider.php").success(function(data) {

    console.log(data);
    if(data.error_number==1000){

      $scope.img_slider=data.data;
    }
  }).error(function(data) {
    console.log(data);
  });;

$scope.deletePic=function(array,index,id){


		$http.get("/kyoto/services/admin/deletePic.php?id="+id).success(function(data){

			$scope.openPlain(data.error_description);
			if(data.error_number==1000){
				 array.splice(index, 1);
			}
		}).error(function(data) {
			console.log(data);
		});
	};
	$scope.openPlain = function (text) {
		ngDialog.open({
			template: text,
			className: 'ngdialog-theme-plain',
			plain:true,
		});
	};

	var uploader = $scope.uploader = new FileUploader({
		url: '../upload.php'
	});
	uploader.filters.push({
		name: 'customFilter',
		fn: function(item /*{File|FileLikeObject}*/, options) {
			return this.queue.length < 10;
		}
	});

	uploader.onCompleteItem = function(fileItem, response, status, headers) {
		$scope.uploader.progress=0;
	

		$scope.img={
			"path":response.path,
		
		};
		
		console.log($scope.newcontent)
		$http.post("../services/admin/addSlider.php",$scope.img).success(function(data){
			console.log(data);
			$scope.openPlain(data.error_description);


		}).error(function(data) {
			console.log(data);
		});
	};
	uploader.onCompleteAll = function() {
		console.info('onCompleteAll');
	};

	console.info('uploader', uploader);
});
app .controller('Banner', function($scope, $state,$stateParams,$http,FileUploader,ngDialog) {
	$scope.openPlain = function (text) {
		ngDialog.open({
			template: text,
			className: 'ngdialog-theme-plain',
			plain:true,
		});
	};

 $http.get("/kyoto/services/banner.php").success(function(data) {

    console.log(data);
    if(data.error_number==1000){

      $scope.img_slider=data.data;
    }
  }).error(function(data) {
    console.log(data);
  });;

$scope.deletePic=function(array,index,id){

		$http.get("/kyoto/services/admin/deleteBanner.php?id="+id).success(function(data){

			$scope.openPlain(data.error_description);
			if(data.error_number==1000){
				 array.splice(index, 1);
			}
		}).error(function(data) {
			console.log(data);
		});
	};
	$scope.openPlain = function (text) {
		ngDialog.open({
			template: text,
			className: 'ngdialog-theme-plain',
			plain:true,
		});
	};

	var uploader = $scope.uploader = new FileUploader({
		url: '../upload.php'
	});
	uploader.filters.push({
		name: 'customFilter',
		fn: function(item /*{File|FileLikeObject}*/, options) {
			return this.queue.length < 10;
		}
	});

	uploader.onCompleteItem = function(fileItem, response, status, headers) {
		$scope.uploader.progress=0;
	

		$scope.img={
			"path":response.path,
		
		};
		
		console.log($scope.newcontent)
		$http.post("../services/admin/addBanner.php",$scope.img).success(function(data){
			console.log(data);
			$scope.openPlain(data.error_description);


		}).error(function(data) {
			console.log(data);
		});
	};
	uploader.onCompleteAll = function() {
		console.info('onCompleteAll');
	};

	console.info('uploader', uploader);
});

app .controller('ReportCtrl', function($scope, $http,ngDialog) {
	$scope.openPlain = function (text) {
		ngDialog.open({
			template: text,
			className: 'ngdialog-theme-plain',
			plain:true,
		});
	};

 $http.get("/kyoto/services//admin/reports.php").success(function(data) {

    console.log(data);
    if(data.error_number==1000){

      $scope.reports=data.data;
    }
  }).error(function(data) {
    console.log(data);
  });;

$scope.delete=function(array,index,id){

		$http.get("/kyoto/services/admin/delete_report.php?id="+id).success(function(data){

			$scope.openPlain(data.error_description);
			if(data.error_number==1000){
				 array.splice(index, 1);
			}
		}).error(function(data) {
			console.log(data);
		});
	};
	$scope.openPlain = function (text) {
		ngDialog.open({
			template: text,
			className: 'ngdialog-theme-plain',
			plain:true,
		});
	};




});
