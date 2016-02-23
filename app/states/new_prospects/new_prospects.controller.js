angular.module('moose').controller('new_prospectsController', new_prospectsController);

new_prospectsController.$inject =[];

function new_prospectsController(){
  var vm=this;

  vm.persona = {
    Ejecutivo: "Fernando Garza Gomez",
    Fuente: "Bolsa de Trabajo",
    Subfuente: "Bolsa de Trabajo",
    Agencia: "AXA Seguros",
    Telefono: "83476769",
    Celular: "8115283964",
    email: "dchavez5165@gmail.com",
    Nombre: "Fernando",
    ApellidoPaterno: "Garza",
    ApellidoMaterno: "Gomez",
  };

  function click(eventoclick){

    console.log( 1 );
  }
  vm.click=click;
}
