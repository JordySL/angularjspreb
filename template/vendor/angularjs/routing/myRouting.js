'use strict';
myApp.config( function($urlRouterProvider,$stateProvider) {

        var index = {
          name: 'index',
          url: '/',
          templateUrl: 'subpages/carousel-fade.html'
        }

        var category = {
            name: 'category',
            url: '/Categoria',
            templateUrl: 'subpages/card.html'
        }

        $urlRouterProvider.otherwise('/');

        $stateProvider.state(index);
        $stateProvider.state(category);
});