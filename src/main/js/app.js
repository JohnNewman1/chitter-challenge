const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

import Peeps from './peeps/peeps';
import Header from './header/header'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {peeps: []};
	}

  componentDidMount() {
    client({method: 'GET', path: '/api/peeps'}).then(response => {
      this.setState({peeps: response.entity._embedded.peeps});
    });
  }

  render() {
    return (
    <div className="container">
        <Header />
        <Peeps peeps={this.state.peeps.reverse()}/>
    </div>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
