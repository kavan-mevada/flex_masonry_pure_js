flex_masonry = function () {
  var element = document.querySelector(".masonry");
  var gutter_h = 20;

  Array.max = function(array){
 	    return Math.max.apply(Math, array);
 	}

  flex_magic = {

  render: function() {
      var child_e = new Array();

      var child_e = document.querySelectorAll(".masonry")[0].children;
      var childInfo = childElementInfo(child_e[0]);
      var width = childInfo['width'];
      console.log(width);
      var columns = childInfo['num'];
      column_matrix = initialRange(columns);

      for (var i = 0, len = child_e.length; i < len; i++) {
        var height = child_e[i].clientHeight;
        var col = 0;
        var addToCol = minIndex(column_matrix);
        var leftPos = (addToCol*(childInfo['width']));
        //var leftPos = Math.round((addToCol * width) * 10) / 10;


        child_e[i].style.position = 'absolute';
        child_e[i].style.top = column_matrix[addToCol] + 'px';
        child_e[i].style.left = leftPos + '%';

        column_matrix[addToCol] = column_matrix[addToCol]+height+gutter_h;
      }

      for (var i = 0; i < child_e.length; i++) {
        child_e[i].style.overflow = 'hidden';
        child_e[i].style.zoom = '1';
      }

      //element.style.position = "relative";
      element.style.height = Array.max(column_matrix) + 'px';
    }

  };

  window.addEventListener('resize', flex_magic.render);
  element.classList.add('sm-loaded');
  flex_magic.render();

  function childElementInfo(elem) {
 		var width_e = elem.offsetWidth;
 		var parentWidth = elem.parentElement.offsetWidth;
 		return {
 			'width' : (100 * (width_e / parentWidth)),
 			'num'   : Math.round(parentWidth / width_e)
 		};
 	}

  function initialRange(num) {
 		var arry = [];
 		for ( var i=0; i < num; i++ )
 			arry.push(0);
 		return arry;
 	}

  function minIndex(arry) {
 		var minValue = Math.min.apply(Math, arry);
 		return arry.indexOf(minValue,arry);
 	}

}
