angular.module('eventos.controllers', [])

.controller('EventosCtrl', function($scope, EventosService) {
	$scope.eventos = EventosService.todos();
  $scope.deletar = function($index){
    EventosService.deletar($index);
  };
})

.controller('EventoDetailCtrl', function($scope, $stateParams, EventosService) {
	$scope.evento = EventosService.get($stateParams.eventoId);
})

.controller('NovoEventoCtrl', function($scope, EventosService){
  $scope.salvar = function(evento){
    EventosService.salvar(evento);
  };
});
