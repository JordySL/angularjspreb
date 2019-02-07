'use strict';
myApp.config( function($urlRouterProvider,$stateProvider) {

        var index = {
          name: 'index',
          url: ' ',
          templateUrl: 'template/body.html'
        } 
        var peticiones = {
          name: 'peticiones',
          url: 'formpeticion',
          templateUrl: 'subpageform/formPeticiones.html'
        }
      
        var catalogo = {
          name: 'catalogo',
          url: 'formcatalogo',
          templateUrl: 'subpageform/formCatalogo.html'
        }

        var listcatalogo = {
          name: 'listcatalogo',
          url: 'listcatalogo',
          templateUrl: 'subpagelist/listCatalogo.html'
        }

        var listpeticiones = {
          name: 'listpeticiones',
          url: 'listpeticiones',
          templateUrl: 'subpagelist/listPeticiones.html'
        }

        $urlRouterProvider.otherwise('/');

        $stateProvider.state(index);
        $stateProvider.state(peticiones);
        $stateProvider.state(catalogo);
        $stateProvider.state(listcatalogo);
        $stateProvider.state(listpeticiones);
});