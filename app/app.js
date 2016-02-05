angular.module( 'moose', [
  'ui.router',
  'ngMaterial',
  'angular-click-outside'
]).
config( [ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise( 'home' );

	$stateProvider.
	state( 'home', {
		url: '/home',
		views: {
			'': { /* no caracter ni espacios coloca esta view como la default */
				templateUrl: 'states/home/homeView.html',
				controller: 'homeController'
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
		}
	});
}]);
