import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h2 className="navbar-logo">BlendedBits<i className="fab fa-blendedbits"></
                i></h2>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                        <Link to="/collection">
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        </Link>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar