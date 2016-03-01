angular.module('moose').controller('ag3Controller', ag3Controller);

ag3Controller.$inject =[];

function ag3Controller(){
  var vm=this;

  vm.lissemana = [
    {Parametro: "Referidos obtenidos", Actual:"35", Pasado: "54", Suma: "312", Promedio:"21"},
    {Parametro: "Llamadas realizadas", Actual:"150", Pasado: "12", Suma: "273", Promedio:"18"},
    {Parametro: "Contactos ", Actual:"21", Pasado: "12", Suma: "207", Promedio:"14"},
    {Parametro: "Citas Agendadas", Actual:"12", Pasado: "54", Suma: "227", Promedio:"15"},
    {Parametro: "Entrevistas iniciales", Actual:"1", Pasado: "98", Suma: "299", Promedio:"20"},
    {Parametro: "Entrevistas de cierre", Actual:"5", Pasado: "45", Suma: "270", Promedio:"18"},
    {Parametro: "Total horas de venta", Actual:"7", Pasado: "21", Suma: "114", Promedio:"8"},
    {Parametro: "Solicitudes ingresadas", Actual:"10", Pasado: "12", Suma: "89", Promedio:"6"},
    {Parametro: "Comisones 1er año", Actual:"0", Pasado: "51247", Suma: "51249", Promedio:"3417"},
    {Parametro: "Polizas pagadas", Actual:"10", Pasado: "0", Suma: "12", Promedio:"1"},
    ];

    function sumatoria(){

      vm.lissemana.size();
    }
    vm.sumatoria=sumatoria;
  }
