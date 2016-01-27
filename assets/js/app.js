(function(){
    var app = angular.module('vegeto', []);
    
    app.controller('CookbookController', function() {
        this.recipeList = recipes;
    });

})();