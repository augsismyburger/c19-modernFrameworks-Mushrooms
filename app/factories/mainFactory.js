'use strict';

app.factory('shroomFactory', function($q, $http) {

    let getShrooms = () => {

        return $q((resolve, reject) => {
            $http.get('https://practice-6d645.firebaseio.com/.json')
            .then((data) => {
                resolve(data.data.mushrooms);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };
    return {getShrooms};
});