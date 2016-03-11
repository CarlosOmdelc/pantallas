angular.module('moose').controller('oiaController', oiaController);

oiaController.inject$=[];

function oiaController(){
  var vm=this;

  vm.dato = {
    metaanual: 32000,
    primaprom: null,
    comisionprom: 7,
    comisionanualini: 6,
    primasgmm: null,
    comisionanualreno: null,
    ingresostot: null,
    primasvida: null,
    comisionpromreno: null,
    ingresosanuales: null,
    ingresosanualesdes: null,
    ingresosanualesgmm: null,
    ingresosanualesrenovida: null,
    ingresosanualeseces: null,
    comisionpromvida: null,
    primapromvida: null,
    indicevidas: null,
    casosvida: null,
    primaanual: null,
    llamadas: 31,
    contactos: 40,
    citas: 22,
    entrevistaini: null,
    entrevistacierre: null,
    semtrabajadas: null,
    gastom: null,
    difingresosanuales: null,
  };

  vm.nuevo = [
    {actividad: "Ingresos Anuales Necesiarios", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Casos Pagados de Vida", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "No Tomadas de Vida", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Solicitudes Ingresadas", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Entrevistas de Cierre", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Entrevistas Iniciales", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Citas Obtenidas", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Contactos Obtenidos", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    {actividad: "Llamadas Necesiarias", anual:0, semestral: 0, trimestral: 0, mensual:0, semanal: 0, diario: 0},
    ];

    vm.valor = [
      {actividad: "Valor de cada Llamada", resp:0},
      {actividad: "Valor de cada Prospecto", resp:0},
      {actividad: "Valor de cada Cita Obtenida", resp:0},
      ];

      vm.valordos = [
        {actividad: "Valor de cada Entrevista de Diagnóstico", resp:0},
        {actividad: "Valor de cada Entrevista de Cierre", resp:0},
        {actividad: "Valor de cada Caso Pagado", resp:0},
        ];
}
