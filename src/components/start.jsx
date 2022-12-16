import React from "react";
import {Link} from "react-router-dom";

const Start = (props) => {
    const{shuffle}=props;
    return ( 
        //as default, you get this, once you click 'start',
        //you get the 'quiz' component
        <div className="Quiz">
            <div className="finish">
                <Link to="/quiz">
                <button className="stbttn" onClick={()=>shuffle()}>start</button>
                </Link>
            </div>
        </div>

     );
}
 
export default Start;