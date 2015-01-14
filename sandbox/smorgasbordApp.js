/*global angular */
var smorgasbordModule = angular.module('smorgasbord', []);

var navCtrl = smorgasbordModule.controller('navigationController', [
    '$scope',
    function ($scope) {
        "use strict";
        $scope.bleh = "fdkdfskdsfkldfsk";
    }
]);
