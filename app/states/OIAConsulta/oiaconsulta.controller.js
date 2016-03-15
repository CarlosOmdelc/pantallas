angular.module('moose').controller('oiaconsultaController', oiaconsultaController);

oiaconsultaController.inject$=[];

function oiaconsultaController(){
  var vm=this;

  vm.consulta = [
    {string: "Fecha", dato: "2015-12-23"},
    {string: "Semanas de Trabajo", dato:"54"},
    {string: "Objetivos de Ingresos", dato:"1,000,000"},
    {string: "Prima Promedio Anual", dato:"20,000"},
    ];

    vm.consultados = [
      {string: "Comisión Promedio/Poliza", dato: "20,000"},
      {string: "Comisión Promedio", dato:"30"},
      {string: "Meta en Pólizas Anual", dato:"-7"},
      {string: "% de NO tomadas", dato:"4%"},
      ];
}
