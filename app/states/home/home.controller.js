angular.module( 'moose' ).controller( 'homeController', homeController );

homeController.$inject  = [ '$mdSidenav' ];

function homeController( $mdSidenav ) {

	var vm = this;

	// DOM functions
	vm.toggleSidemenu = toggleSidemenu;

	active();

	///////////////////////////////////////////////////

	function active() {

	}

	function toggleSidemenu() {
		$mdSidenav('sideMenu').toggle();
	}

}
