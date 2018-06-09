const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

import Posts from './posts/posts';
import Header from './header/header'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {posts: []};
	}

  componentDidMount() {
    client({method: 'GET', path: '/api/peeps'}).then(response => {
      this.setState({posts: response.entity._embedded.peeps});
    });
  }

  render() {
    return (<div>
       <Header />
      <Posts posts={this.state.posts}/></div>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
