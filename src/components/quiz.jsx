import React,{Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom";



class Quiz extends Component {
    state = { 
    } 
    render() { 
         const{stocks, countQ,lockAnswer,outOf20,trueAns,wrongAns,shuffle} =this.props;
         
       
        return (
            <React.Fragment> 
                
                 <div className="Quiz">                        
                       {wrongAns==3? 
                                    //if you've got 3 wrong answers, you get this:
                                    <div className="finish">
                                        <h3 className="h3">YOU LOST!!!</h3>
                                        <p className="h4">you answered {trueAns} questions correctly</p>
                                        <p className="h4">and {wrongAns} questions wrong</p>
                                        <Link className="bttn"  to="/quiz">
                                        <button onClick={()=>shuffle()}> ANOTHER ONE?</button>
                                        </Link>
                                    </div>

                            :outOf20==21?
                                    //if you've reached the 21 question without
                                    //having 3 mistakes, you get this:
                                    <div className="finish">
                                        <h3 className="h3">YOU WON!!!</h3>
                                        <p className="h4">you answered {trueAns} questions correctly</p>
                                        <p className="h4">and {wrongAns} questions wrong</p>
                                        <Link className="bttn"  to="/quiz">
                                        <button onClick={()=>shuffle()}> ANOTHER ONE?</button>
                                        </Link>
                                    </div>
                            :
                            //if non of the above is true, you keep going 
                            //with the game, eavh time with another question
                            //and its answers below in a random order
                            <div className="quizContainer">
                                    <div className="headerAndQuestion">
                                        <h3 className="h3">question number {outOf20} of 20</h3>
                                        <h4 className="h4">{wrongAns} mistakes of 3</h4>
                                        <p id="question">{stocks[countQ].question}</p>
                                    </div> 
                                    <div className="btns">                                
                                        <div  onClick={(e)=>lockAnswer(e)}>
                                            {stocks[countQ].options.sort(
                                            ()=>(Math.random()*10)
                                            ).map(op=>                                                         
                                                <button 
                                                    key={op}
                                                    className="option"
                                                    >{op}
                                                </button>
                                            )}
                                                                    
                                        </div>                                   
                                    </div>                                
                            </div>                                                    
                        }
                 </div>
                                
            </React.Fragment> 
        );
    }


}
    
    

 
export default Quiz;
