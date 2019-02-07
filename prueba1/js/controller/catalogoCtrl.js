myApp.controller('catalogoCtrl', function ($scope, $location, myService, $q, DTOptionsBuilder, DTColumnBuilder) {
    vm = this;
    vm.P = {};
    var language = {
        "processing": "Procesando...",
        "search": "Buscar:",
        "lengthMenu": "Mostrar _MENU_ elementos",
        "info": "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        "infoEmpty": "Mostrando ning&uacute;n elemento.",
        "infoFiltered": "(filtrado _MAX_ elementos total)",
        "infoPostFix": "",
        "loadingRecords": "Cargando registros...",
        "zeroRecords": "No se encontraron registros",
        "emptyTable": "No hay datos disponibles en la tabla",
        "paginate": {
          "first": "Primero",
          "previous": "Anterior",
          "next": "Siguiente",
          "last": "Último"
        },
        "aria": {
          "sortAscending": ": Activar para ordenar la tabla en orden ascendente",
          "sortDescending": ": Activar para ordenar la tabla en orden descendente"
        }
    }
    var localize = $location.path();
    $scope.formCatalogo = function(P){
        var insert=  myService.insertCatalogo(P);
        insert.then(function(data) {
            return data;
        })
          .catch(function(fallback) {
            return fallback;
        });
    }
    if(localize == '/listcatalogo'){
        vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
            var defer = $q.defer();
            var select = myService.promiseCatalogo();
            select.then(function(data) {
                defer.resolve(data);
            })
            return defer.promise;
        }).withPaginationType('full_numbers')
        .withLanguage(language); 
        vm.dtColumns = [
            DTColumnBuilder.newColumn('Id').withTitle('Id'),
            DTColumnBuilder.newColumn('CatalogoNombre').withTitle('Nombre'),
            DTColumnBuilder.newColumn('TareaNombre').withTitle('Tarea'),
            DTColumnBuilder.newColumn('Estado').withTitle('Estado'),
            DTColumnBuilder.newColumn('TiempoMaximoAtencion').withTitle('Tiempo')
        ];
    }
});