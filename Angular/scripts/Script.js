/// <reference path="angular.min.js" />

// create a module

var myApp = angular.module("myModule", []);

// register module with controller

myApp.controller("myController", function ($scope) {

    var employees = [
        { name: "john", dateOfBirth: new Date("June 6, 1993"), gender: "Male", salary: "100000.0001" },
        { name: "henry", dateOfBirth: new Date("June 16, 1998"), gender: "Male", salary: "10000.0111" },
        { name: "louis", dateOfBirth: new Date("January 6, 1990"), gender: "Male", salary: "1000.9898" },
        { name: "napolean", dateOfBirth: new Date("April 6, 1983"), gender: "Male", salary: "1000.999" },
        { name: "alex", dateOfBirth: new Date("May 6, 1991"), gender: "Male", salary: "10000.12145" },
        { name: "sara", dateOfBirth: new Date("December 6, 1992"), gender: "Female", salary: "10000.989898" },

    ]

    $scope.employees = employees;
    $scope.rowLimit = 3;
});