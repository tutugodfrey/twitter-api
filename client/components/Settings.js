import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

class Settings extends React.Component {
  constructor () {
    super();
    this.state = {
      settings: {},
    };
  }
  componentWillMount() {
    const settings = JSON.parse(localStorage.getItem('settings'));
    if(settings) {
      this.setState({
        ...this.state,
        settings: {
          columns: settings.columns,
          colour: settings.colour,
        },
      });
    }
  }
  
  handleChange(event) {
    this.setState({
      ...this.state,
      settings: {
        ...this.state.settings,
        [event.target.name]: event.target.value,
      }
    });
  }

  saveSettings(event) {
    event.preventDefault();
    localStorage.setItem('settings', JSON.stringify(this.state.settings));
    this.props.setSettings(this.state.settings);
  }

  render() {
    const colour = this.state.settings.colour;
    return (
      <div>
        <form>
          <p>Please provide settings of how you want Tweets to be displayed</p>
          <div>
            <p>Number of columns</p>
            <input type="radio" name="columns" id="two" className="rounded mr-3" defaultValue="2" onChange={this.handleChange.bind(this)}/>
            <label htmlFor="two">2</label><br />
            <input type="radio" name="columns" id="three" className="rounded mr-3" defaultValue="3" onChange={this.handleChange.bind(this)}/>
            <label htmlFor="three">3</label>
          </div>
          <div>
            <p>Choose your preferred display colour</p>
            <input type="radio" name="colour" id="primary" className={"bg-primary border-0 rounded m-1"} defaultValue="primary" onClick={this.handleChange.bind(this)} />
            <label htmlFor="primary"><input disabled="disabled" className={"bg-primary border-0 rounded m-1"}/></label><br />
            <input type="radio" name="colour" id="success" className={"bg-success border-0 rounded m-1"}  defaultValue="success" onClick={this.handleChange.bind(this)} />
            <label htmlFor="success"><input disabled="disabled" className={"bg-success border-0 rounded m-1"}/></label><br />
            <input type="radio" name="colour" id="warning" className={"bg-warning border-0 rounded m-1"}  defaultValue="warning" onClick={this.handleChange.bind(this)} />
            <label htmlFor="warning"><input disabled="disabled" className={"bg-warning border-0 rounded m-1"}/></label><br />
            <input type="radio" name="colour" id="info" className={"bg-info border-0 rounded m-1"} defaultValue="info" onClick={this.handleChange.bind(this)} />
            <label htmlFor="info"><input disabled="disabled" className={"bg-info border-0 rounded m-1"}/></label><br />
          </div>
          <input type="submit" className={`bg-${colour} text-white rounded`} value="Save Settings" onClick={this.saveSettings.bind(this)}/>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setSettings } = actions;
  return bindActionCreators({
    setSettings
  }, dispatch);
}
export default connect(null, mapDispatchToProps)(Settings);
