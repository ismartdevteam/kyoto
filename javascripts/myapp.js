app = angular.module("App", ['ngRoute', 'pascalprecht.translate','ngCookies','ngDialog']);

app.config(['$translateProvider', function ($translateProvider) {
  // add translation tables
  $translateProvider.useStaticFilesLoader({
    prefix: 'locale-',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('mn_MN');

}]);

app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider.

    when('/LEFT/:menu_id', {
      templateUrl: 'view/content.html',
      controller: 'LEFT'
    }).
    when('/PRODUCT', {
      templateUrl: 'view/product.html',
      controller: 'ProductCtrl'
    }).
    when('/CONTACT', {
      templateUrl: 'view/contact.html',
      controller: 'ContactCtrl'
    }).
    

    when('/ABOUT', {
      templateUrl: 'view/about-us.html',
      controller: 'ABoutCtrl'
    }).
    when('/CONTACT', {
      templateUrl: 'view/contact.html',
      controller: 'ContactCtrl'
    }).
    when('/TOURS/:tour_id', {
      templateUrl: 'view/tour_det.html',
      controller: 'TourCtrlDet'
    }).
    otherwise({
      redirectTo: '/LEFT/11'
    });

  }]);

app.controller('MainCtrl', function ($translate, $scope, $location, $rootScope, $log, $location,$http) {
 $http.get("/kyoto/services/img_slider.php").success(function(data) {
  console.log(data);
  if(data.error_number==1000){

    $scope.img_slider=data.data;
  }
}).error(function(data) {
  console.log(data);
});

$http.get("/kyoto/services/banner.php").success(function(data) {

  if(data.error_number==1000){

    $scope.banner=data.data;
  }
}).error(function(data) {
  console.log(data);
});
$scope.selectedIndex = 1; 

$scope.changeLanguage = function (langKey) {
  if(langKey=='en_US')
    $scope.selectedIndex=0;
  else
    $scope.selectedIndex=1;
   //  $scope.selectedIndex = $index;
   $translate.use(langKey);

   setTimeout(function(){
     $scope.$apply(function(){
       getMenuTitle('1');
       getMenuTitle('2');
       getMenuTitle('3');
       getMenuTitle('4');
     }
     )
   }, 1500);
   
   setTimeout(function(){
     $scope.$apply(function(){
       $location.path('#');
     }
     )
   }, 1500);

 };
 getMenuTitle('1');
 getMenuTitle('2');
 getMenuTitle('3');
 getMenuTitle('4');
 function getMenuTitle(menu_id){

  $http.get("/kyoto/services/menu.php?id="+menu_id+"&hl="+$translate.use()).success(function(data) {
    console.log(menu_id);
    if(data.error_number==1000){

      switch(menu_id) {
        case '1':
        $scope.menu1=data.data;

        break;
        case '2':
        $scope.menu2=data.data;
        break;
        case '3':
        $scope.menu3=data.data;
        break;
        case '4':
        $scope.menu4=data.data;
        break;
      }
      console.log($scope.menu1);
    }
  }).error(function(data) {
    console.log(data);
  });;

}


$rootScope.$on("$locationChangeStart", function(event, next, current) { 
  var path=next+"";
  if(path.indexOf('LEFT')>-1)
    $scope.main=false;
  else
    $scope.main=true;
  $log.info("location changing to:" + next); 
});
});


app.controller("ProductCtrl", function($scope,$http,$translate,ngDialog) {
  $scope.openDialog=function(data){
    ngDialog.open({
      template: 'view/productDialog.html',
      controller: ['$scope', function($scope) {
        // controller logic
        $scope.content=data;
      }]
    });


  }
  $http.get("/kyoto/services/product.php?hl="+$translate.use()).success(function(data) {
    if(data.error_number==1000){
      console.log(data);
      $scope.product = data.data;


    }
  }).error(function(data) {
    console.log(data);
  });;

});
app.controller("LEFT", function($scope,$http,$routeParams,$translate,ngDialog) {
  $scope.openDialog=function(data){
    ngDialog.open({
      template: 'view/contentDialog.html',
      controller: ['$scope', function($scope) {
        // controller logic
        $scope.content=data;
      }]
    });


  }

  $http.get("/kyoto/services/leftmenu.php?id="+$routeParams.menu_id+"&hl="+$translate.use()).success(function(data) {
    if(data.error_number==1000){
      console.log(data);
      $scope.contents = data.data;

      $scope.menuDatas=data.menu;

    }
  }).error(function(data) {
    console.log(data);
  });;

});
app.controller("ABoutCtrl", function($scope,$http) {
});
app.controller("ContactCtrl", function($scope,$http,$translate,ngDialog) {
  $scope.openPlain = function (text) {
    ngDialog.open({
      template: text,
      className: 'ngdialog-theme-plain',
      plain:true,
    });
  };

  $scope.report=function(data){
    console.log("report----");
    console.log(data);
    $http.post("/kyoto/services/report.php",data).success(function(data) {

      $scope.openPlain(data.error_description);
      $scope.contact=null;

    }).error(function(data) {
      console.log(data);
    });
  };

});


