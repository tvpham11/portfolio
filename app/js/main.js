$(document).ready(function(){
  $('.parallax').parallax();
});

;(function () {

  'use strict';

  $(".button-collapse").sideNav();

  angular.module('app', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {

    }

  ]);

}());
