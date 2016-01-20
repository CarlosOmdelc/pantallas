angular.module( 'moose' ).controller( 'homeController', homeController );

homeController.$inject  = [ 'homeModel', '$mdSidenav' ];

function homeController( homeModel, $mdSidenav ) {

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
