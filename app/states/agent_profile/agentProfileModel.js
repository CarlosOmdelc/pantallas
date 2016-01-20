angular.module( 'moose' ).factory( 'agentProfileModel', agentProfileModel);

agentProfileModel.$inject = [];

function agentProfileModel(){

    function agentProfileModel () {

    };

    agentProfileModel.prototype = {
        exampleMethod: exampleMethod,
    };

    //////////////////////////////////////////////////////////////////////////////

    function exampleMethod() {
		console.log( 'lewl' );
    };

    //////////////////////////////////////////////////////////////////////////////

    return agentProfileModel;

};
agentProfileModel
