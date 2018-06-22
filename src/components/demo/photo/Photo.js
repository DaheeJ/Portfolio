import React from 'react'
import './Photo.css'

import mountain from '../../../images/mountain.jpeg'
import Menu from '@material-ui/icons/Menu'
import Search from '@material-ui/icons/Search'
const Photo = () => (
    <div>
    <div className="box">
    < Menu />
    < Search  className="search"/>
        <div className="letter"> Photopia.<br />
        <div className="letterTwo"> STOCK PHOTOS</div></div>
            <div className="pictureBox"><img src={mountain} />&nbsp; Mountain</div>
    </div>
    
    </div>
    
)

export default Photo;