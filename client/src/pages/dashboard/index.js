import React, {Component } from 'react';

// need nav
import NavMain from "../../components/topNav/index"


import SideNav from "../../components/sideNav/index"


import "./index.css"

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<>

<div>
    <NavMain />
</div>



               <div>
                   <SideNav />
               </div>

</>
         );
    }
}
 
export default DashBoard;