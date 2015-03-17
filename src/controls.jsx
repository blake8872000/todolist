var React=require("react");
var actions=require("./actions");
var Controls=React.createClass({
  	add:function() {
		//actions.add(Math.random().toString().substr(2,3));
		//.getDOMNode().value 取得該值
		var todo=this.refs.todo.getDOMNode().value;
		this.refs.todo.getDOMNode().value="";
		
		//代表if todo&&actions要true才執行
		todo&&actions.add(todo);
	}
	,clear:function() {
		actions.clear();
	}
	
	,keypress:function(e){
		if(e.key=="Enter") this.add();
	}

	,render:function() {
		return <div>
			<input ref="todo" onKeyPress={this.keypress}/>
      		<button onClick={this.add}>Add</button>
      		<button onClick={this.clear}>Clear</button>
      	</div>
	}
});

module.exports=Controls;