
angular.module("appArg")
	.controller("topicListController", ["topics", topicListCtrl]);

function topicListCtrl(topics){
	const me = this;

	// services
	me.topics = topics;

	// ngclicks functions (methods)
	me.send = function (){
		const topic = {user: me.user,
					   title: me.title,
					   text: me.text };
		me.topics.add(topic);
	}
	me.clear = function(){
		me.user = "";
		me.title = "";
		me.text = "";

	}
}
