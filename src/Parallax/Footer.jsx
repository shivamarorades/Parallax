import React from 'react';
import {Sdata3,Sdata4} from './Array.jsx';
let Footer=()=>{
	let para="We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.";
	let Footer_props=(props)=>{
let Footer_props2=(props)=>{
	return(
<>
<a href="#"className="  tracking-wide  capitalize text-gray-50">{props.links}</a><br/>
</>
		);
};
let Footer_val2=(val)=>{
	return(
<>
<Footer_props2 links={val.link} />
</>
		);
};
		return(
<>
<div className="col xl3 s6 my-7">
<h1 className="text-gray-50 text-2xl capitalize mb-3">{props.head}</h1>
{Sdata4.map(Footer_val2)}
</div>
</>
			);
	};
	let Footer_val=(val)=>{
		return(
<>
<Footer_props head={val.heads} />
</>
			);
	};
	return(
<>
<footer className="deep-purple footer h-64">
<div className="row ">
<div className="mx-52 ">
<div className="col s12 xl6 my-7">
<h3 className="text-gray-50 text-3xl capitalize">Company Bio</h3>
<p className="text-gray-50 tracking-normal  leading-7 mt-5 leading-5">{para}</p>
</div>
{Sdata3.map(Footer_val)}
</div>
</div>
</footer>
<div className="deep-purple darken-1 h-14 flex items-center" ><h6 className="text-gray-100  mx-52">Made by <span className="text-gray-400 capitalize font-semibold ">materialize	</span></h6></div>
</>
		);
}
export default Footer;