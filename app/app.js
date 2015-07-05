var app = angular.module('debts', []);


app.controller('firstController', function ($scope, $http) {
    $scope.model = {};

    $http.get("https://debtsforme.herokuapp.com/all").success(function (data) {
        console.log(data);
        $scope.model.items = data;

        $scope.find = function (actiontext) {
            $http.get("http://localhost:4000/id/" + actiontext).success(function (data) {
                console.log(data);
                model.items = data;
            });
        };


        $scope.miss = function () {
            $http.get("http://localhost:4000/miss/0").success(function (data) {
                console.log(data);
                model.items = data;
            });
        };
        $scope.avail = function () {
            $http.get("http://localhost:4000/miss/1").success(function (data) {
                console.log(data);
                model.items = data;
            });
        };
        $scope.all = function () {
            $http.get("http://localhost:4000/all").success(function (data) {
                console.log(data);
                model.items = data;
            });
        };

    });

    $scope.debtsSum = function () {
        var temp = 0;
        angular.forEach($scope.model.items, function (item) {
            temp += item.debt;
            console.log("item.debt");
        });
        return temp;
    };


});