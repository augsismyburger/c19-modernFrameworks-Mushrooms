"use strict";

app.controller('shroomCtrl', function($scope, shroomFactory) {

    let mush = [];
    shroomFactory.getShrooms()
    .then(function(data) {
        for (let i in data) {
            mush.push(data[i]);
        }
        console.log(data);
        $scope.shrooms = mush;
    });

});