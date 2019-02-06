import React from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import MakeSchool from '../components/MakeSchool';
import Home from '../components/Home';
import Settings from '../components/Settings';
import NewSyCombinator from '../components/NewSyCombinator';
import YCombinator from '../components/YCombinator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';

class Routes extends React.Component {
  constructor() {
    super();
    this.state = {
      settings: {
        columns: '3',
        colour: 'primary',
      }
    }
  }
  componentWillMount() {
    const settings = JSON.parse(localStorage.getItem('settings'));
    if (!settings) {
      localStorage.setItem('settings', JSON.stringify(this.state.settings));
      this.props.setSettings(this.state.settings);
    }
    this.props.setSettings(settings);
  }

  componentWillUpdate(props) {
    this.state.settings.colour = props.colour;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="bg-white">
          <div className={`navbar navbar-expand-md bg-${this.state.settings.colour}`}>
            <div className={"collapse navbar-collapse"}>
              <ul className={"navbar-nav"}>
                <li className={"px-2"}>
                  <Link to="/" className="text-white">Home</Link>
                </li>
                <li className={"px-2"}>
                  <Link to="/makeschool" className="text-white">Makeschool</Link>
                </li>
                <li className={"px-2"}>
                  <Link to="/newsycombinator" className="text-white">News Ycombinator</Link>
                </li>
                <li className={"px-2"}>
                  <Link to='/ycombinator' className="text-white">Ycombinator</Link>
                </li>
                <li className={"px-2 ml-auto"}>
                  <Link to='/settings' className="text-white">Settings</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={"container mt-4"}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/makeschool"  exact component={MakeSchool} />
              <Route path="/newsycombinator" exact component={NewSyCombinator} />
              <Route path="/ycombinator" component={YCombinator} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const { settings }= state.settings;
  return settings
}

const mapDispatchToProps = (dispatch) => {
  const { setSettings } = actions;
  return bindActionCreators({
    setSettings
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
