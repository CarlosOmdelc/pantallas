angular.module( 'moose' ).controller( 'agentRecruitController', agentRecruitController );

agentRecruitController.$inject = [];

function agentRecruitController() {

	var vm = this;

	// objeto contact
	vm.contact = {
		executive: 'Fernando Garza Morales',
		date: '12-12-2016'
	};

}
