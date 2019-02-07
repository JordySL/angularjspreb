myApp.service('myService', function($http) {
    vm = this;
    
    vm.select = function(){
      var response = httpPost('post','http://localhost/template/data/data.json')
       .then(function(data) {
         return data;
        })
       .catch(function(errdata) {
         return errdata;
        });
       return response;
    }

    function httpPost(method,url){
      var data = $http({
        method: method,
        url: url
      }).then(function successCallback(response) {
          return response.data;
        }, function errorCallback(response) {
          return response;
        });
      return data;
    }
});