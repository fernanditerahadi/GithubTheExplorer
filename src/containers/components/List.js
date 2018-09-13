import React, { Component } from 'react';

import { Pagination, Badge } from 'antd';

import './List.css'

class List extends Component {
    render() {

        return (
            <div className="List">
                <h4 className="List-header">{this.props.title}&nbsp;
                <Badge count={this.props.count}
                        overflowCount={1000000}
                        style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} /></h4>
                <hr></hr>
                <div className="List-item-container">{this.props.item}</div>
                <hr></hr>
                <div className="List-pagination">
                    <Pagination defaultCurrent={1} total={this.props.count} pageSize={30} hideOnSinglePage size="small" />
                </div>


            </div>
        );
    }
}

export default List