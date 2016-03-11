angular.module('moose').controller('ag3nuevoController', ag3nuevoController);

ag3nuevoController.inject$=[];

function ag3nuevoController(){
  var vm=this;

  vm.nuevo = {
    referidos: 5,
    llamadas: 6,
    contactos: 23,
    citas: 7,
    eini: 4,
    ecierre: 2,
    tventa: 8000,
    singresadas: 77,
    comisiones: 3465,
    ppagadas: 10,
  };
}
