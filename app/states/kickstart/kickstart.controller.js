angular.module( 'moose' ).controller( 'kickstartController', kickstartController );

kickstartController.$inject = [];

function kickstartController() {
  var vm = this;

  vm.toppings = [
    {name: "Alejandra María Sánchez Abia", contact:"Contacto", wanted: true},
    {name: "Bertha Sánchez Abia", contact:"Contacto", wanted: false},
    {name: "Carlos María Sánchez", contact:"Contacto", wanted: false},
    {name: "David Sánchez Abia", contact:"Contacto", wanted: false},
    {name: "Eugenia María Sánchez Abia", contact:"Contacto", wanted: true},
    {name: "Alejandra María Sánchez Abia", contact:"Contacto", wanted: false},
    {name: "Pedro Alberto Sánchez", contact:"Contacto", wanted: false},
    {name: "Ramón Ortega Sánchez", contact:"Contacto", wanted: false}
  ];

}


/*
.controller('ListCtrl', function($scope, $mdDialog) {
  $scope.toppings = [
    { name: 'Pepperoni', wanted: true },
    { name: 'Sausage', wanted: false },
    { name: 'Black Olives', wanted: true },
    { name: 'Green Peppers', wanted: false }
  ];
};
*/
