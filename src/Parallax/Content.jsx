import React from 'react';

let Content=()=>{
	let Content_props="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;";
	return(
<>
<div className="row my-12">
<div className="mx-60">
<div className="col s12">
<h1 className="text-4xl center-align mb-3 text-grey-50 font-normal capitalize">contact us</h1>
<p className="text-grey-200 font-thin leading-7">{Content_props}</p>
</div>
</div>
</div>
</>
		);
}
export default Content;