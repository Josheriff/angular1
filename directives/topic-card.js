angular.module("appArg")
	.directive("topicCard",[topicCard]);

function topicCard(){
	return { 
		templateUrl: 'views/directives/topic-card.html', 	
		scope: { data:'=data' },
		link: function(scope,elem,args){
			console.log(scope,'<<<<<<<<<');
		}
	};
}
