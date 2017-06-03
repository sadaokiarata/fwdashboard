/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule DataGrid
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocalReduxOutlet from '../outlets/LocalReduxOutlet';

import DataTable from '../components/data/DataTable';
import {Panel} from '../components/ui/';
import {Row, Col, Page} from '../components/ui/Layout';

const dataSchema = {
  name : 'messages',
  description : 'A simple messaging schema',
  fields : {
    "Reach": {
      "type":"String"
    },
    "Connected": {
      "type":"String"
    },
    "Successful": {
      "type":"String"
    },
    "Test Results": {
      "type":"String"
    },
    "EndDate": {
      "type":"Date"
    },
    "StartDate": {
      "type":"Date"
    },
    "Size": {
      "type":"String"
    },
    "Status": {
      "type":"FirmwareStatus"
    },
    "Type":{
      "type":"String"
    },
    "TargetBuild":{
      "type":"String",
      "reference":""
    },
    "Firmware":{
      "type":"String",
      "reference":""
    },
    "Model":{
      "type":"String",
      "reference":""
    },
    "Country":{
      "type":"String",
      "reference":""
    },
    "Carrier":{
      "type":"String",
      "reference":""
    },
    "Brand":{
      "type":"String",
      "reference":"User"
    }
  }
}

var shallowCompare = require('react-addons-shallow-compare');

let messageActions = LocalReduxOutlet('messages').actions;

class Firmware extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  handleItemDelete(id) {
    const {dispatch, token} = this.props;
    dispatch(messageActions.delete(token, {id:id}));
  }
  
  render() {
    let {messages} = this.props;
    return (
      <Page>
        <Row>
          <Col size={12}>
            <Panel>
              <DataTable 
                pageSize={10}
                page={0}
                totalRows={messages.list.length}
                schema={dataSchema} 
                rows={messages.list}
                onDelete={(id)=>this.handleItemDelete(id)} />
            </Panel>
          </Col>
        </Row>
      </Page>
	  );
	}
}

function mapStateToProps(state) {
  return {
    token: state.app.token,
    user: state.user,
    app:state.app,
    messages: state.firmwares
  };
}

export default connect(mapStateToProps)(Firmware);
