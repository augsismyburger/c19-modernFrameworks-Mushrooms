'use strict';

var app = angular.module("shroomApp", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.
    when('/', {
        templateUrl: "../partials/shroomBody.html",
        controller: 'shroomCtrl'
    })
    .otherwise('/');
});