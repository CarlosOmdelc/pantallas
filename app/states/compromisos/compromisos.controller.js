angular.module('moose').controller('compromisosController', compromisosController);

compromisosController.inject$=['$filter'];

function compromisosController($filter){
  var vm=this;

  var orderBy  = $filter( 'orderBy' );
	vm.ordering = 'ASC';
	vm.ordernar = ordenar; // se declara asi hasta arriba como interface

  vm.datos = [
    {fecha: "15/12/16", tema:"Se esta presentando un caso de bla bla ya que el asesor piensa que bla bla", usuario: "Ejecutivo: David Chavez-Espejo", compromiso: "Revisión exhaustiva de los detalles tal y tal con tal de que el asesor logre cumplir las metas tal y tal", fechacum:"15/12/16"},
    {fecha: "15/12/16", tema:"Se esta presentando un caso de bla bla ya que el asesor piensa que bla bla", usuario: "Ejecutivo: David Chavez-Espejo", compromiso: "Revisión exhaustiva de los detalles tal y tal con tal de que el asesor logre cumplir las metas tal y tal", fechacum:"15/12/16"},
    {fecha: "15/12/16", tema:"Se esta presentando un caso de bla bla ya que el asesor piensa que bla bla", usuario: "Ejecutivo: David Chavez-Espejo", compromiso: "Revisión exhaustiva de los detalles tal y tal con tal de que el asesor logre cumplir las metas tal y tal", fechacum:"15/12/16"},
    {fecha: "15/12/16", tema:"Se esta presentando un caso de bla bla ya que el asesor piensa que bla bla", usuario: "Ejecutivo: David Chavez-Espejo", compromiso: "Revisión exhaustiva de los detalles tal y tal con tal de que el asesor logre cumplir las metas tal y tal", fechacum:"15/12/16"}
  ];

    active();

/***************************************************/
// despues las funciones se manipulan con puro javascript
  function active() {
  vm.reversa = false;
  vm.datos = orderBy( vm.datos, 'usuario', false );
  }

  function ordenar( predicado ) { // es importante declarar la funcion y asignarla a una variable del vm
  vm.ordering = ( vm.ordering === 'ASC' ) ? 'DESC' : 'ASC';
  vm.predicado = predicado;
  vm.reversa = ( vm.predicado === predicado ) ? !vm.reversa : false;
  vm.datos = orderBy( vm.datos, vm.predicado, vm.reversa );
  }

  function click(eventoclick){

    console.log( 1 );
  }
  vm.click=click;

  this.announceClick = function() {
  $mdDialog.show(
    $mdDialog.alert()
      .targetEvent(originatorEv)
      .clickOutsideToClose(true)
      .parent('body')
      .title('Suddenly, a redial')
      .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
      .ok('That was easy')
  );
  originatorEv = null;
};
/*
  var originatorEv;
  this.openMenu = function($mdOpenMenu, ev) {
  originatorEv = ev;
  $mdOpenMenu(ev);
};*/

}
