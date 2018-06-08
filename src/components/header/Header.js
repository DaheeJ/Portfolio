import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


const Header = ({ value,insideComponent})=> (
    <div className='barStyle'>
        <AppBar position="static">
            <Tabs value={value}>
                <Tab label="HOME" />
                <Tab label="Item Two" />
                <Tab label="Item Three" href="#basic-tabs" />
            </Tabs>
        </AppBar>
        {insideComponent}
    </div>
    
)

export default Header