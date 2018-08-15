import {ConnectedRouter} from "connected-react-router";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import React, {Component} from 'react';

import history from '../history';
import Layout from '../components/Layout';
import routes from '../routes';

import {
  initBlockHeader,
  processes as processesAction,
  versions as versionsAction,
  plugins as pluginsAction
} from '../actions';

class AppContainer extends Component {
  componentDidMount() {
    this.props.initBlockHeader();
    this.props.fetchProcesses();
    this.props.fetchVersions();
    this.props.fetchPlugins();
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Layout>
          {routes}
        </Layout>
      </ConnectedRouter>
    );
  }
}

AppContainer.propTypes = {
  initBlockHeader: PropTypes.func,
  fetchProcesses: PropTypes.func,
  fetchPlugins: PropTypes.func,
  fetchVersions: PropTypes.func
};

export default connect(
  null,
  {
    initBlockHeader,
    fetchProcesses: processesAction.request,

    fetchVersions: versionsAction.request,
    fetchPlugins: pluginsAction.request
  },
)(AppContainer);