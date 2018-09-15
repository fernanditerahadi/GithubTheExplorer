import React, { Component } from 'react';

import { Pagination, Badge } from 'antd';

import './List.css'

import Loading from './Loading'



class List extends Component {
    render() {

        return (
            <div className="List">
                <h4 className="List-header">{this.props.title}&nbsp;
                <Badge count={this.props.count}
                        overflowCount={1000000}
                        style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} /></h4>
                <hr></hr>

                <div className="List-item-container">
                    {this.props.isFetching ? <Loading /> : this.props.item}
                </div>
                <hr></hr>
                <div className="List-pagination">
                    <Pagination
                        total={this.props.count}
                        pageSize={30}
                        defaultCurrent={1}
                        current={this.props.currentPage}
                        onChange={(page) => this.props.onChange(page)}
                        hideOnSinglePage
                        size="small"
                    />
                </div>


            </div>
        );
    }
}

export default List