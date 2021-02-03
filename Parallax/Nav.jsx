import React from 'react';
import Sdata from './Array.jsx';
let Nav=()=>{
	let Nav_props=(props)=>{
		return(
<>
<a href="#" className="rounded-xl hover:text-gray-50 font-semibold  hover:shadow-xl transition-all duration-200 waves-effect waves-light tracking-widest hover:bg-purple-800  uppercase hover:ring-2 hover:ring-purple-500 p-3 text-sm text-black   tracking-wide">{props.list}</a>
</>
			);
	};
	let Nav_val=(val)=>{
		return(
<>
<Nav_props list={val.lists} />
</>
			);
	}
	return(
<>
<nav className="container white flex justify-around items-center">
	<div className="flex items-center">
	<span className="font-bold  px-2 transform rotate-12 mx-1 rounded-lg tracking-widest text-gray-50 deep-purple text-4xl uppercase ">
	l</span>
	<span className="font-bold px-2 transform rotate-8 mx-1 rounded-lg tracking-widest  text-gray-50 deep-purple text-4xl uppercase ">o
	</span>
<span className="font-bold mx-2 tracking-widest transform rotate-12  px-2 rounded-lg text-gray-50 deep-purple text-4xl uppercase ">g
	</span>
<span className="font-bold mx-2 tracking-widest  transform rotate-6  px-2 rounded-lg text-gray-50 deep-purple text-4xl uppercase ">o
	</span>
	</div>
	<div>

	{Sdata.map(Nav_val)}
	</div>
</nav>
</>
		);
}
export default Nav;