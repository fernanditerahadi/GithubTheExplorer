import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import { Media } from 'reactstrap';
import './Item.css'

const MLink = ({ to, isExternal, ...props }) => isExternal ?
    <a href={to} target='_blank' {...props} /> :
    <Link to={to} {...props} />

class Item extends Component {
    render() {
        const media =
            <Media className="Item">
                <Media left>
                    {this.props.image ? <img className="Item-image" src={this.props.image} alt="github-explorer" /> : null}
                </Media>
                <Media body className="Item-name-container">
                    <Media heading className="Item-name">
                        {this.props.heading}
                    </Media>
                    {this.props.body}
                </Media>
            </Media>

        const { isExternal, to } = this.props

        return (
            <div>
                <MLink to={to} isExternal={isExternal}>
                    {media}
                </MLink>
                <hr />
            </div >

        )

    }
}

export default Item
