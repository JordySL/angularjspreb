myApp.service('myService', function($http, $resource) {
    vm = this;

    vm.selectPeticion = function(){
     var response = httpPost('post','php/callfunctions/selectpeticiones.php')
      .then(function(data) {
        return data;
      })
      .catch(function(errdata) {
        return errdata;
      });
      return response
    }
    vm.selectCatalogo = function(){
      var response = httpPost('post','php/callfunctions/selectcatalogo.php')
       .then(function(data) {
         return data;
        })
       .catch(function(errdata) {
         return errdata;
        });
       return response;
    }
    vm.insertPeticion = function(data){
      var response = httpPostData('post','php/callfunctions/insertpeticiones.php',data)      
      .then(function(data) {
        return data;
      })
      .catch(function(errdata) {
        return errdata;
      });
      return response;
    }
    vm.insertCatalogo = function(data){
      var response = httpPostData('post','php/callfunctions/insertcatalogo.php',data)      
      .then(function(data) {
        return data;
      })
      .catch(function(errdata) {
        return errdata;
      });
      return response;
    }
    vm.promiseCatalogo = function(){ 
      var response = $resource('php/callfunctions/selectcatalogo.php').query().$promise;
      response.then(function(data) {
        return data;
      });
      return response;
    }
    vm.promisePeticion = function(){ 
      var response = $resource('php/callfunctions/selectpeticiones.php').query().$promise;
      response.then(function(data) {
        return data;
      });
      return response;
    }

    function httpPost(method,url){
      var data = $http({
        method: method,
        url: url
      }).then(function successCallback(response) {
          return response;
        }, function errorCallback(response) {
          return response;
        });
      return data;
    }
    function httpPostData(method,url,data){
      var data = $http({
        method: method,
        data: data,
        url: url
      }).then(function successCallback(response) {
          return response;
        }, function errorCallback(response) {
          return response;
        });
    return data;
    }
});