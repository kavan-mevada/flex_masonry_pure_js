flex_masonry = function(flex_ele) {
  var element = document.querySelector(flex_ele);
  var gutter_h = 15;
  //var gutter_v = 20;
  Array.max = function(array) {
    return Math.max.apply(Math, array);
  }
  flex_magic = {
    render: function() {
      var child_e = [];
      child_e = document.querySelectorAll(".masonry")[0].children;
      var childInfo = childElementInfo(child_e[0]);
      var width = childInfo['width'];
      //console.log(width);
      var columns = childInfo['num'];
      column_matrix = initialRange(columns);
      for (var i = 0, len = child_e.length; i < len; i++) {
        var height = child_e[i].clientHeight;
        var col = 0;
        var addToCol = minIndex(column_matrix);
        //console.log(addToCol);
        //console.log(childInfo['gutter_v']);
        if (addToCol < 0) {
          addToCol = 0;
        }
        var leftPos = (((addToCol * width) * 10) / 10) + ((childInfo['gutter_v']) * (addToCol + 1));
        if (leftPos < 0) {
          leftPos = 0;
        }
        child_e[i].style.position = 'absolute';
        child_e[i].style.top = column_matrix[addToCol] + 'px';
        child_e[i].style.left = leftPos + 'px';
        child_e[i].style.marginRight = childInfo['gutter_v'] + 'px';
        column_matrix[addToCol] = column_matrix[addToCol] + height + gutter_h;
      }
      for (var j = 0; j < child_e.length; j++) {
        child_e[j].style.overflow = 'hidden';
        child_e[j].style.zoom = '1';
      }
      //element.style.position = "relative";
      element.style.height = Array.max(column_matrix) + 'px';
    }
  };
  element.classList.add('sm-loaded');
  window.addEventListener('load', flex_magic.render);

  function childElementInfo(elem) {
    var width_e = elem.offsetWidth;
    var parentWidth = elem.parentElement.offsetWidth;
    var num = Math.floor((parentWidth + 1) / (width_e)); // Here +(gutter_v/2)
    var gutter_v = (parentWidth - (width_e * num)) / (num + 1);
    //console.log(gutter_v);
    return {
      'width': width_e,
      'num': num,
      'gutter_v': gutter_v
    };
  }

  function initialRange(num) {
    var arry = [];
    for (var i = 0; i < num; i++) arry.push(0);
    return arry;
  }
  function minIndex(arry) {
      var minValue = Math.min.apply(Math, arry);
      return arry.indexOf(minValue, arry);
    }
    //Debounce
  var myEfficientFn = debounce(function() {
    flex_magic.render();
  }, 350);
  window.addEventListener('resize', myEfficientFn);

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}
