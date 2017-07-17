'use strict';


angular
.module('yapp', [
  'ui.router',
  'ngAnimate',
  'angularFileUpload',
  'ngDialog'
  ])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('/dashboard', '/dashboard/1');
  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('base', {
    abstract: true,
    url: '',
    templateUrl: 'views/base.html'
  })
  .state('login', {
    url: '/login',
    parent: 'base',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .state('dashboard', {  
    abstract: true,
    url: '/dashboard',
    parent: 'base',
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .state('newcontent', {
    url: '/cont/:id',
    parent: 'base',
    templateUrl: 'views/dashboard/newcontent.html',
    controller: 'NewConCtrl'
  })
  .state('menu', {
    url: '/:menu_id',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/content.html',
    controller: 'Menu'
  })
  .state('slider', {
    url: '/slider',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/slider.html',
    controller: 'Slider'
  })
  .state('banner', {
    url: '/banner',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/banner.html',
    controller: 'Banner'
  })  .state('product', {
    url: '/product',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/product.html',
    controller: 'Product'
  })
   .state('newproduct', {
    url: '/newproduct',
    parent: 'base',
    templateUrl: 'views/dashboard/newproduct.html',
    controller: 'NewProCtrl'
  })
   .state('report', {
    url: '/report',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/reports.html',
    controller: 'ReportCtrl'
  })
});
