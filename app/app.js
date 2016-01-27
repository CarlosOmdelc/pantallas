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
		templateUrl: 'states/home/homeView.html',
		controller: 'homeController'
	}).
	state( 'agent', {
		parent: 'home',
		url: '/agent',
		templateUrl: 'states/agent/agentView.html',
		controller: 'agentController'
	});
}]);
