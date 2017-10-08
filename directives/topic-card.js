angular.module("appArg")
	.directive("topicCard",[topicCard]);

function topicCard(){
	return { templateUrl: 'views/directives/topic-card.html' };
}
