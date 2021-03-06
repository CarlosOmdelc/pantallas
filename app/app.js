angular.module( 'moose', [
  'ui.router',
  'ngMaterial',
  'angular-click-outside'
]).
config( [ '$stateProvider', '$urlRouterProvider', '$mdThemingProvider', function( $stateProvider, $urlRouterProvider, $mdThemingProvider ) {

	/*
	configuracion del tema
	requiere mdThemingProvider
	*/

	$mdThemingProvider.definePalette('main', {
		'50': '#fcfeff',
		'100': '#b0e4ff',
		'200': '#78d1ff',
		'300': '#30b8ff',
		'400': '#12aeff',
		'500': '#009ff2',
		'600': '#008bd3',
		'700': '#0077b5',
		'800': '#006396',
		'900': '#004f78',
		'A100': '#fcfeff',
		'A200': '#b0e4ff',
		'A400': '#12aeff',
		'A700': '#0077b5',
		'contrastDefaultColor': 'light',
		'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
	});

	$mdThemingProvider.definePalette('accent', {
		'50': '#ffffff',
		'100': '#fffbfc',
		'200': '#ffc3d8',
		'300': '#ff7ba9',
		'400': '#ff5d95',
		'500': '#ff3e81',
		'600': '#ff1f6d',
		'700': '#ff0159',
		'800': '#e1004e',
		'900': '#c30044',
		'A100': '#ffffff',
		'A200': '#fffbfc',
		'A400': '#ff5d95',
		'A700': '#ff0159',
		'contrastDefaultColor': 'light',
		'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
	});

	$mdThemingProvider.theme( 'moose' )
	.primaryPalette( 'main' )
    .accentPalette( 'pink' );

	$mdThemingProvider.setDefaultTheme( 'moose' );

	/*
	Rutas y estados
	*/
	$urlRouterProvider.otherwise( 'home' );
	$stateProvider.
	state( 'home', {
		url: '/home',
		views: {
			'': { /* no caracter ni espacios coloca esta view como la default */
				templateUrl: 'states/home/home.view.html',
				controller: 'homeController'
			}
		}
	}).
  state( 'new_prospects', {
    parent: 'home',
    url: '/nuevo_prospecto',
    views: {
      '': {
        templateUrl:  'states/new_prospects/new_prospects.view.html',
        controller: 'new_prospectsController'
      }
    }
  }).

  state( 'team',{
    parent: 'home',
    url: '/team',
    views: {
      '':{
        templateUrl: 'states/team/team.view.html',
        controller: 'teamController'
      }
    }
  }).

  state('ag2', {
    parent: 'home',
    url: '/ag2dos',
    views: {
      '': {
        templateUrl: 'states/ag2/ag2dos.view.html',
        controller: 'ag2dosController'
      }
    }
  }).

  state('ag3', {
    parent: 'home',
    url: '/ag3',
    views: {
      '': {
        templateUrl: 'states/ag3/ag3.view.html',
        controller: 'ag3Controller'
      }
    }
  }).

  state('ag3nuevo', {
    parent: 'home',
    url: '/ag3nuevo',
    views: {
      '': {
        templateUrl: 'states/ag3nuevo/ag3nuevo.view.html',
        controller: 'ag3nuevoController'
      }
    }
  }).

  state('oia', {
    parent: 'home',
    url: '/oia',
    views: {
      '': {
        templateUrl: 'states/OIA/oia.view.html',
        controller: 'oiaController'
      }
    }
  }).

  state('oialista', {
    parent: 'home',
    url: '/oialista',
    views: {
      '': {
        templateUrl: 'states/OIALista/oialista.view.html',
        controller: 'oialistaController'
      }
    }
  }).

  state('oiaconsulta', {
    parent: 'home',
    url: '/oiaconsulta',
    views:{
      '': {
        templateUrl: 'states/OIAConsulta/oiaconsulta.view.html',
        controller: 'oiaconsultaController'
      }
    }
  }).

  state('compromisos', {
    parent: 'home',
    url: '/compromisos',
    views: {
      '': {
        templateUrl: 'states/compromisos/compromisos.view.html',
        controller: 'compromisosController'
      }
    }
  }).

	state( 'agent', {
		parent: 'home',
		url: '/agent', /* se le suma al url del padre = '/home' + '/agent' */
		views: {
			'': {
				templateUrl: 'states/agent/agent.view.html',
				controller: 'agentController'
			},
			'profile@agent': { /* @agent hace que ui-view="profile" sea activado solamente si el estado agent esta activo */
				templateUrl: 'states/agent/profile/agent.profile.view.html',
				controller: 'agentProfileController'
			},
			'recruit@agent': {
				templateUrl: 'states/agent/recruit/agent.recruit.view.html',
				controller: 'agentRecruitController'
			}
		}
	});
}]);
