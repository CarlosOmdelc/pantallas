angular.module( 'moose', [
  'ui.router',
  'ngMaterial'
]).
config( [ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {

	$urlRouterProvider.otherwise( 'home' );

	$stateProvider.
	state( 'home', {
		url: '/home',
		templateUrl: 'states/home/homeView.html',
		controller: 'homeController',
	}).
	state( 'agent', {
		parent: 'home',
		url: '/agent',
		views: {
			'profile': {
				templateUrl: 'states/agent_profile/agentProfileView.html',
				controller: 'agentProfileController',
			},
			'recruit': {
				templateUrl: 'states/agent_recruit/agentRecruitView.html',
				controller: 'agentRecruitController',
			},
			'development': {
				templateUrl: 'states/agent_development/agentDevelopmentView.html',
				controller: 'agentDevelopmentController',
			},
		}
	});
}]);
