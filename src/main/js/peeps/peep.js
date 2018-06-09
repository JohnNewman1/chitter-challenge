import React from 'react';

class Peep extends React.Component{
	render() {
		return (
			<div className='peeps'>
        {this.props.peep.peep}
      </div>
		)
	}
}

export default Peep;
