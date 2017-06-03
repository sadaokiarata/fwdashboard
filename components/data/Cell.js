/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Cell
 */

import React, {Component} from 'react';
import { Link } from 'react-router';
import moment from 'moment';

export default class Cell extends Component {
	render() {

		const {cellType, value, schemaName} = this.props;

		switch(cellType) {
			case 'id' : 
				return (<td><Link className="btn btn-rounded btn-sm btn-dark" to={`/data/${schemaName}/${value}`}>{value}</Link></td>);
			case 'Reference' : 
				return (<td><a className="btn btn-rounded btn-sm btn-info" href={'#/data/'+schemaName+'/'+value}>{value}</a></td>);
      case 'FirmwareStatus' :
        
        switch (value) {
          case 'Pending Firmware':
            return (<td><a className="btn btn-xs btn-warning">{value}</a></td>);
          case 'Rejected Firmware':
            return (<td><a className="btn btn-xs btn-danger">{value}</a></td>);
          case 'Approved Firmware':
            return (<td><a className="btn btn-xs btn-info">{value}</a></td>);
          case 'Expired Campaign':
            return (<td><a className="btn btn-xs btn-grey">{value}</a></td>);
          case 'Pending Campaign':
            return (<td><a className="btn btn-xs btn-warning">{value}</a></td>);
          case 'Rejected Campaign':
            return (<td><a className="btn btn-xs btn-danger">{value}</a></td>);
          case 'Running Campaign':
            return (<td><a className="btn btn-xs btn-success">{value}</a></td>);
          case 'Close Campaign':
            return (<td><a className="btn btn-xs btn-grey">{value}</a></td>);
          case 'Paused Campaign':
            return (<td><a className="btn btn-xs btn-yellow">{value}</a></td>);
          default:
            return (<td><a className="btn btn-xs btn-warning">{value}</a></td>);
        }
			case 'Array' : 
        var buttonlabel = 'View Relations';
        var buttonColor = 'btn-default';

        if (value.length != 0) {
            buttonColor = 'btn-primary';
            buttonlabel = 'View Relations ('+value.length+')';
        }
        return (
          <td>
              <a className={'btn btn-rounded btn-sm ' + buttonColor}>{buttonlabel}</a>
          </td>);
      case 'Date' : 
      	var day = moment(value);
        console.log(day);
      	return (<td>{day.format('DD-MM-YYYY')}</td>);
      case 'Boolean' : 
        return (<td>{value ? `true` : `false`}</td>);
      default: return (<td>{value}</td>);
		}
	}
}
