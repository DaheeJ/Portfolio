import React from 'react';

import Divider from '@material-ui/core';
import './ColorMenu.css'




const ColorMenu = () => (

    <div class="columns bigit">
        <div class="column has-background-primary ">
         A
    </div>
        <div class="column has-background-info">
            B
    </div>
        <div class="column has-background-success">
            C
    </div>
        <div class="column has-background-warning">
            D
    </div>
        <div class="column has-background-danger">
        E
    </div>
    </div>

)
// error 28 - 37 "export 'default' (imported as 'ColorMenu') was not found in './components/demo/colorfulMenu/ColorMenu'
// not found usually means you forgot to export or you gave the wrong path
export default ColorMenu