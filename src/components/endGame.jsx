import React from "react";
import { Link } from 'react-router-dom';

const End = (props) => {
    const{trueAns,wrongAns,shuffle}=props;
    return ( 
        //you get this page once you clicked 'give up'
        <div className="Quiz">
            <div className="finish">
                <h3 className="h3">YOU ARE A LOOSER!!!</h3>
                <p className="h4">you answered {trueAns} questions correctly</p>
                <p className="h4">and  {wrongAns}  wrong</p>
                <Link className="bttn"  to="/quiz">
                <button onClick={()=>shuffle()}> TRY AGAIN?</button> 
                </Link>
                {/* this botton start anothor round */}
            </div>
        </div>
        
     );
}
 
export default End;
