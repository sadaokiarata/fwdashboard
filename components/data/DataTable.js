/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule DataTable
 */

import React, {Component} from 'react';
import DataRow from './Row';
import {Pager} from '../../components/ui/';
export default class DataTable extends Component {
    
  headers() {
    const {schema} = this.props;
    return Object.keys(schema.fields).reverse().map((key,i) => {
      return <th key={'header-key-'+key + '-' + i} key={key}>{key}<span className="caret m-l-xs"></span>
      {/*<i className="fa fa-search m-l-xs"></i>*/}
      </th>; 
    })
  }

  deleteRow(id) {
    this.props.onDelete(id);
  }

  renderrows() {
    const {rows, schema} = this.props;
    const headerkeys = Object.keys(schema.fields).reverse();

    return rows.map(row => {
      return <DataRow 
        key={row._id}
        schema={schema}
        keys={headerkeys}
        onDelete={(id)=>this.deleteRow(id)}
        row={row} 
      />
    });
  }

  render() {
    const {rows, schema} = this.props;
    /*<div className="btn-group"> 
              <button className="btn btn-danger m-t-xs btn-xs dropdown-toggle  m-r-sm" data-toggle="dropdown">Delete <span className="caret"></span></button> 
                <ul className="dropdown-menu"> 
                <li><a href="#">Delete Field</a></li> 
                <li><a href="#">Delete All Data</a></li>
                <li className="divider"></li> 
                <li><a href="#">Delete Dataset</a></li>
              </ul>
            </div>*/
    return (
      <section>
        <header style={{height:32}} className="panel-heading">
          <span className=" m-l-sm pull-right"> 
            
            <a href="#" className="btn btn-success btn-xs m-t-xs"><i className="fa fa-plus m-l-sm"></i>Add Firmware</a>
            <a href="#" className="btn btn-grey btn-xs m-t-xs m-l-sm"><i className="fa fa-th-list m-l-sm"></i>Columns</a>
            <span className="m-l-sm">Show rows</span>
            <select className="m-l-sm m-r-sm">
              <option value="volvo">10</option>
              <option value="saab">15</option>
              <option value="opel">20</option>
              <option value="audi">30</option>
            </select>
            EXPORT<span className="caret m-l-xs"></span>
            {/*<li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <span className="thumb-sm avatar pull-left">
                  <img src={this.props.profile ? this.props.profile.avatar : ''}/>      
                </span>
                <b className="caret"></b>
              </a>
              <ul className="dropdown-menu animated fadeInRight">
                <span className="arrow top"></span>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/account">Account</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li className="divider"></li>
                <li>
                  <Link to="/landing">Logout</Link>
                </li>
              </ul>
            </li>*/}
          </span>
        </header>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                {this.headers()}
                <th style={{
                  fontSize: '6px',
                  width: '20px'
                }}></th>
              </tr>
            </thead>
            <tbody>
              {this.renderrows()}
            </tbody>
          </table>
        </div>
        <footer className="pull-right">
          <Pager currentPage={0} itemsPerPage={10} totalItems={this.props.totalRows} />
        </footer>
      </section>
    ); 
  }
}
