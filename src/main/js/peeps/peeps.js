import React from 'react';
import Peep from './peep';
import AddPeep from './addpeep'

const defaultProps = {
    peeps: []
};

class Peeps extends React.Component {
	render() {
		var peeps = this.props.peeps.map(item =>
			<Peep key={item._links.self.href} peep={item}/>
		);
		return (
		<div>
      <div className='row'>
        <div className='col-sm-12'>
            <h1 className='title'>
             Peeps
            </h1>
        </div>
       </div>
       <div className='row'>
         <div className='col-sm-12'>
         <AddPeep />
         </div>
       </div>
       <div className='row'>
         <div className='col-sm-8 offset-sm-2'>
  			<div className='peeps'>
  				{peeps}
  		    </div>
  	    </div>
  	  </div>
  	  </div>



		)
	}
}

Peeps.defaultProps = defaultProps;

export default Peeps;
