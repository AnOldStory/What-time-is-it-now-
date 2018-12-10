import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../../css/Nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            What time is it now?
                        </Typography>
                        <Tabs
                            value={this.props.page}
                            onChange={this.props.handle.bind(null)}
                            indicatorColor="secondary"
                            textColor="secondary"
                        >
                            <Tab icon={<FontAwesomeIcon icon="home" size="2x" />} label="메인" component={Link} to="/" />
                            <Tab icon={<FontAwesomeIcon icon="sticky-note" size="2x" />} label="글목록" component={Link} to="/post" />
                        </Tabs>
                        {this.props.match}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Nav;