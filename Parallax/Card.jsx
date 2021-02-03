import React from 'react';
import {Sdata2} from './Array.jsx';
let Card=()=>{
let Card_props=(props)=>{
	return(
<>
<div className="xl4 md12 s12 l4 col">
<div className="icon-block">
<i className="material-icons brown-text  text-6xl">{props.icons}</i>
</div>
<br/>
<div className="font-normal text-black center-align  left-align capitalize text-2xl">{props.titles}</div>
<br/>
<p className="text-grey-400 font-light leading-8 left-align  font-thin">{props.paras}</p>
</div>
</>
		);
};
let Card_val=(val)=>{
	return(
<>
<Card_props icons={val.icon} titles={val.title} paras={val.para} />
</>
		);
}
	return(
<>
<div className="row my-20">
<div className="mx-64 center">
{Sdata2.map(Card_val)}
</div>
</div>
</>
		);
}
export default Card;