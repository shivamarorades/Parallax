import React from 'react';
import background from './img/background2.jpg';
import M from 'materialize-css/dist/js/materialize.min.js';
let Banner2=()=>{
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
  });
	return(
<>
<div className="parallax-container col s12 m12 sm:max-h-96 l12 flex justify-center items-center">
<div className="text-gray-100 font-thin text-2xl">A modern responsive front-end framework based on Material Design</div>

<div className="parallax">
	<img src={background} />
</div>
</div>

</>
		);
}
export default Banner2;