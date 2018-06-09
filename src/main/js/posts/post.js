import React from 'react';

class Post extends React.Component{
	render() {
		return (
			<div className='post-content'>
        {this.props.post.peep}
      </div>
		)
	}
}

export default Post;
