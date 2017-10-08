angular.module("appArg",['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', 
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');
			
			$stateProvider
				.state('list', {
					url: "/",
					templateUrl: "views/list.html"
				})
				.state('topic', {
					url: "/topic/:index",
					templateUrl: "views/topic.html"
				})
		}
	]);

