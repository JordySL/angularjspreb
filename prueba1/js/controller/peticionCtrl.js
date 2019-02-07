myApp.controller('peticionCtrl', function ($scope, $location, myService, $q, DTOptionsBuilder, DTColumnBuilder) {
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
    $scope.formPeticion = function(P){
        if(typeof P.FechaApertura !== 'string'){
            P.FechaApertura = datefix(P.FechaAperturanot);
        }
        if(typeof P.FechaVencimiento !== 'string'){
            P.FechaVencimiento = datefix(P.FechaVencimientonot);
        }
        var insert = myService.insertPeticion(P);
        insert.then(function(data) {
            return data;
        })
          .catch(function(fallback) {
            return fallback;
        });
    }
    if(localize == '/listpeticiones'){
        vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
            var defer = $q.defer();
            var select = myService.promisePeticion();
            select.then(function(data) {
                defer.resolve(data);
            })
            return defer.promise;
        }).withPaginationType('full_numbers')
        .withLanguage(language);
        vm.dtColumns = [
            DTColumnBuilder.newColumn('Id').withTitle('ID'),
            DTColumnBuilder.newColumn('Titulo').withTitle('Titulo'),
            DTColumnBuilder.newColumn('IdEstado').withTitle('Estado'),
            DTColumnBuilder.newColumn('FechaApertura').withTitle('Fecha Apertura'),
            //DTColumnBuilder.newColumn('FechaVencimiento').withTitle('Fecha Vencimiento'),
            DTColumnBuilder.newColumn('IdCategoria').withTitle('Categoria'),
            DTColumnBuilder.newColumn('Solicitante').withTitle('Solicitante'),
            //DTColumnBuilder.newColumn('SolicitanteCorreo').withTitle('Solicitante Correo'),
            DTColumnBuilder.newColumn('Asignado').withTitle('Asignado'),
            //DTColumnBuilder.newColumn('AsignadoCorreo').withTitle('Asignado Correo'),
            DTColumnBuilder.newColumn('OrigenPeticion').withTitle('OrigenPeticion'),
            DTColumnBuilder.newColumn('Descripcion').withTitle('Descripcion'),
            DTColumnBuilder.newColumn('Ubicacion').withTitle('Ubicacion'),
            DTColumnBuilder.newColumn('IdTipo').withTitle('Tipo'),
        ];
    }
    function datefix(d){
        var day = d.getDate();
        var month = d.getMonth()+1;
        var year = d.getFullYear();
        var fecha = year+'-'+month+'-'+day;
        return fecha;
    }

});