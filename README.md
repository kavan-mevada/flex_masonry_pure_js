# flex_masonry_pure_js
Responsive Flexible Masonry pure javascript


# CSS Style
```
.grid {
  width: 80%;
  position: relative; /* Nessesory */
  margin: 0 auto; /* (Optional) for cotanier centering */
}

.grid > div {
  width: 240px;           /* This is the place you can change with in % or px */
  transition: all 0.5s;   /* (Optional) for animations */
}
```

# HTML
```
<div class="grid masonry"> 	<!-- masonry class optional                     -->
  <div>Element_1</div>		<!-- relate with below flex_masonry(".masonry") -->
  <div>Element_2</div>
  <div>Element_3</div>
  <div>Element_4</div>
  <div>Element_5</div>
  <div>Element_6</div>
  <div>Element_7</div>
</div>
```

# JavaScript
```
<script src="flex_masonry.js"></script>
<script>
flex_masonry(".masonry"); 
</script>
```

Features:

	1) Fully responsive
	2) Animated positioning
	3) No other third-party plugin require
	4) Vanilla JS
	5) Element width can be in % for fixed column
	6) For fixed width auto margining column
	7) No need of custom settings in js
	   Changes are done by css property
	8) Light weight plugin



DEMO: https://kavanmevada.github.io/flex_masonry_pure_js/

Thanks to @David DeSandro for explaining me concept....

Please ask me before use it comercially....


© 2016 Kavan Mevada.
