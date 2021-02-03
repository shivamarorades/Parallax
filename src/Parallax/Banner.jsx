import React from 'react';
import image from './img/background1.jpg';
import M from 'materialize-css/dist/js/materialize.min.js';
let Banner=()=>{

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
  });
	return(
<>
<div className="parallax-container sm:max-h-96 center"style={{backgroundColor:"rgba(0,0,0,0.65)"}}>
<div className="row my-20">
<div className="container">
<div className="xl12 s12 m12 l12 col">
<h1 className="deep-purple-text text-lighten-2 text-6xl capitalize">Parallax template</h1><br/>
<br/>
<p className="text-gray-200 text-2xl  font-thin bg-transparent">A modern responsive front-end framework based on Material Design</p>
<br/>
<button className="deep-purple rounded-xl waves-effect waves-light focus:outline-none btn text-gray-50 uppercase text-lg tracking-normal btn-large">get started</button>
</div>
</div>
</div>
<div className="parallax">
<img src={image} className="responsive-img" />
</div>
</div>
</>
		);
}
export default Banner;