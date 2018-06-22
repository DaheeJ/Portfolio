import React from 'react';
import './MenuBar.css'
import Home from '@material-ui/icons/Home'
import Book from '@material-ui/icons/Book'
import Opacity from '@material-ui/icons/Opacity'
import Grade from '@material-ui/icons/Grade'

const MenuBar = () => (
    <div className="barName">
        <div className="quickBooks">< Book /> Quick Books</div>
        <div> < Home /> Home </div>
        <div> < Opacity /> Coustomers </div>
        <div> < Grade /> Apps</div>

    </div>
)

export default MenuBar;