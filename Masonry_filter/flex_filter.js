
function flex_filter(b, filter_list) {
	group = new Array();
	var a = document.getElementById(filter_list).children;

	for (var j = 0; j < a.length; j++) {
		a[j].style.display = "none";
	}

	var string = b.getAttribute('data-filter');
	var group = string.split(', ');

	for (var i = 0; i < group.length; i++) {

		for (var j = 0; j < a.length; j++) {
			if (a[j].getAttribute('data-cat') == group[i]) {
				a[j].style.display = "block";
			}
		}

	}

}

ab = new Array();

ab = document.getElementsByClassName('tag');

for(var i=0; i< ab.length; i++) {
			ab[i].addEventListener("click", bindClick(i));
}

function bindClick(i) {
	 return function(){
		 flex_filter(ab[i], 'portfoliolist');
		 flex_masonry(".masonry");
	 }
}
