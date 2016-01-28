(function(){
    var app = angular.module('vegeto', []);
    
    app.controller('CookbookController', function($scope) {
        $scope.filters = '';
        this.recipeList = recipes;
    });

})();