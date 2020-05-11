var buttons = document.getElementById('button');
var div = document.getElementById('cont');
history.replaceState({text:'A'},null);
buttons.onclick = function(e){
	var target = e.target;
	var text = target.innerHTML;
	cont.innerHTML = text;
	history.pushState({text:text},null);
};
window.onpopstate = function(e){
	if(e.state){
	var text = e.state.text;
	cont.innerHTML = text;
	}
};