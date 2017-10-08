
angular.module("appArg")
	.controller("topicController", ["topics","$stateParams", topicCtrl]);

function topicCtrl(topics,$stateParams){
	const me = this;

	// services
	me.topics = topics;
	me.index = $stateParams.index;


	// ngclicks functions (methods)
	// me.send = function (){
	// 	const topic = {user: me.user,
	// 				   title: me.title,
	// 				   text: me.text };
	// 	me.topics.add(topic);
	// }
	// me.clear = function(){
	// 	me.user = "";
	// 	me.title = "";
	// 	me.text = "";

	// }
}