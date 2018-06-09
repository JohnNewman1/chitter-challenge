import React from 'react';



class AddPeeps extends React.Component {
	render() {

		return (
		<div>
        <form method="post" action="/">
        	<div className="form-group">
        		<label className="control-label">Add a peep: </label>
        		<input type="text" name="peep" className="form-control" />
        		<input type="submit" value="Add" className="btn"/>
        	</div>
        </form>
  	  </div>



		)
	}
}

export default AddPeeps;
