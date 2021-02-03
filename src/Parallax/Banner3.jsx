import React from 'react';
import image from './img/background3.jpg';
import M from 'materialize-css/dist/js/materialize.min.js';
let Banner3=()=>{
	document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
  });
	return(
<>
<div className="parallax-container col s12 m12 l12 sm:max-h-96 flex justify-center items-center">
<h1 className="text-gray-100 font-thin text-2xl">A modern responsive front-end framework based on Material Design</h1>
<div className="parallax ">
	<img src={image} />
</div>
</div>
</>
		);
}
export default Banner3;