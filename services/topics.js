angular.module("appArg").service("topics",[topicService])



function topicService(){
	const topic = { list: [],
					add};
	return topic;

	function add(item){
		topic.list.push(item);
	}
}