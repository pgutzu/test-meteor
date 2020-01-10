import React, { Component } from 'react'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom';

import './AccountUI.scss'


export default class AccountsUI extends Component {

    logout = () => Meteor.logout();
    auth = () => this.props.history.push('/auth');

    render() {
        const { loggedIn } = this.props;
        return (
            <div >
                {
                    loggedIn ?
                        <NavLink to="/login" onClick={() => Meteor.logout()}>
                            <Button>
                                Logout
                    </Button>
                        </NavLink>
                        :
                        <NavLink to="/auth">
                            <Button>
                                Login
                      </Button>
                        </NavLink>
                }
            </div>
        )
    }
}