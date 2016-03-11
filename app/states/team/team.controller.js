angular.module('moose').controller('teamController', teamController);

teamController.$inject =['$filter'];

function teamController($filter){
  var vm=this;

  var orderBy  = $filter( 'orderBy' );
	vm.ordering = 'ASC';
	vm.ordernarNombres = ordernarNombres; // se declara asi hasta arriba como interface

  vm.equipo = [
    {Nombre: "David Chavez Espejo", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Ramón Ornelas Aguirre", UP:"Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Salvador Herrara Tamez", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Carlos Vargas Gutierrez", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Gabriel García Márquez", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Carlos Alberto Ortega Martín del Campo", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Alejandra María Sánchez Abia", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Alejandra María Sánchez Abia", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    {Nombre: "Alejandra María Sánchez Abia", UP:"Escuela Fundamental", Duracion: "24 d", FechaP: "12/12/2015", Telefono:"8111011010"},
    ];

    active();

/***************************************************/
// despues las funciones se manipulan con puro javascript
  function active() {
  vm.reversa = false;
  vm.equipo = orderBy( vm.equipo, 'Nombre', false );
  }

  function ordernarNombres( predicado ) { // es importante declarar la funcion y asignarla a una variable del vm
  vm.ordering = ( vm.ordering === 'ASC' ) ? 'DESC' : 'ASC';
  vm.predicado = predicado;
  vm.reversa = ( vm.predicado === predicado ) ? !vm.reversa : false;
  vm.equipo = orderBy( vm.equipo, vm.predicado, vm.reversa );
  }
}
