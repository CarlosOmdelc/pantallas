angular.module( 'moose' ).directive( 'agentProfile', agentProfile );

agentProfile.$inject = [];

function agentProfile() {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'js_components/directives/agent_profile/agentProfile.html',
		link: function( iScope, iElement, iAttrs ) {

			var vm = iScope;

			vm.agent = {
				name: 'Fernando',
				lastname_1: 'Garza',
				lastname_2: 'Gomez',
				education : 'Lic. Artes Obscuras',
				sex: 'Macho Alfa',
				hobby: 'Picarse la nariz',
				university: 'Universidad de Monterrey',
				civil_status : 'Don Juan',
				birthdate: '21-06-1982',
				rfc: '123456789012',
				spouse: {
					name: 'Blanca',
					lastname_1: 'Orozco',
					lastname_2: 'Gallegos',
					education: 'Arquitecta',
					telephone: '83569845',
					birthdate: '30-02-2001',
					mobile: '8116459875',
					anniversary_date: '04-04-2010'
				},
				executive: {
					name: 'Fernando',
					lastname_1: 'Garza',
					lastname_2: 'Garza',
					agency: 'AXA Seguros',
					source: 'Bolsa de trabajo',
					subsource: 'Bolsa de trabajo',
				}
			};

			vm.selectThis = function() {
				var target = document.getElementById( e );
				var element = angular.element( target );
				if( element.hasClass( 'is-selected' ) ){
					element.removeClass( 'is-selected' );
				}
				else{
					element.addClass( 'is-selected' );
				}
			}

			vm.disableInputs = true;

			vm.sections = [
				{ name: 'informacion-personal', editable: false },
				{ name: 'control-interno', editable: false },
				{ name: 'conyuge', editable: false }
			];

			vm.closeThis = function( openedItem ) {
				angular.forEach( vm.sections, function( obj, key ) {
					if( obj.name === openedItem ){
						obj.editable = false;
					}
				});
			}

			vm.editThis = function( selectedItem, e ) {
				angular.forEach( vm.sections, function( obj, key ) {
					if( obj.name === selectedItem ){
						obj.editable = true;
					}
					else{
						obj.editable = false;
					}
				});
			}

		}
	}
}
