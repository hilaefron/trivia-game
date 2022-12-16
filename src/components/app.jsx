import React,{Component} from "react";
import Quiz from "./quiz";
import { stockData } from "../data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from './start';
import {Link} from "react-router-dom";
import { Navigate } from "react-router-dom";
import End from "./endGame";



class App extends Component {
    state = {
		stocks:stockData,
        countQ:0,
		trueAns:0,
		wrongAns:0,
		outOf20:1,
		shuffle:[]
	}
	

	style={
        inCorrect:'red',
        default:'black'
    }

	 render() { 
		
						
		return (
            <React.Fragment >
                <div >
                    <header className="header">
						<h1>
							<span style={{color:'rgba(19999, 150, 0, 0.689)',fontSize:'200%'}}>Q</span>
							<span style={{color:'rgba(3,40, 150, 0.689)',fontSize:'150%'}}>U</span>
							<span style={{color:'rgba(90, 0, 0, 0.689)',fontSize:'100%'}}>I</span>
							<span style={{color:'green',fontSize:'200%'}}>Z</span>
							<span style={{color:'blue',fontSize:'150%'}}>Z</span>
							<span style={{color:'white',fontSize:'100%'}}>O</span>
						</h1>
						
						<Link to="/end"><button>give up</button></Link>
						
					</header>
                </div>
				<div>
					<Routes>
						<Route path="/" element={<Start
						shuffle={()=>this.shuffle()}/>}
						//default component
						/>
							
						

						<Route path="/quiz" element={<Quiz
							lockAnswer={(e)=>this.lockAnswer(e)}
							stocks={this.state.stocks}
							countQ={this.state.countQ}
							outOf20={this.state.outOf20}
							trueAns={this.state.trueAns}
							wrongAns={this.state.wrongAns}
							shuffle={()=>this.shuffle()}

							//once you click "start" you get this component
							/>
							
						}/>

						<Route path="/end" element={<End
							trueAns={this.state.trueAns}
							wrongAns={this.state.wrongAns}
							lockAnswer={this.lockAnswer}
							outOf20={this.state.outOf20}
							shuffle={()=>this.shuffle()}
							//once you click "give up" you get this component						
							/>
						}/>

												
					</Routes>

				</div>
            </React.Fragment>
        );				
    }
	shuffle=()=>{
		//this function shuffles the array every time you
		// want to start over and gives you 20 random questions
		//out of the stockData
		let stocks=this.state.stocks.sort(()=>Math.random()-0.5)
		let wrongAns=0;
		let trueAns=0;
		let outOf20=1;
		this.setState({trueAns})
		this.setState({outOf20})
		this.setState({wrongAns})
		this.setState({stocks:stocks})
		this.setState({shuffle:stocks.slice(0,20)})
		this.setState({countQ:0})
	}
	
	lockAnswer=(e)=>{
		let stocks=this.state.stocks;
		let trueAns=this.state.trueAns;
		let outOf20=this.state.outOf20;
		let wrongAns=this.state.wrongAns;
		let countQ=this.state.countQ//index
		this.setState({countQ:this.state.countQ+1})
		
        if(e.target.innerHTML==stocks[countQ].answer){
			//if the answer is right,
			//the num of true answers and question 
			//number increasing			
			outOf20++
			trueAns++
			countQ++
			this.setState({outOf20:outOf20})
            this.setState({trueAns:trueAns})
            this.setState({countQ:countQ})
                if(trueAns==21){	
					//if there are 20 true answers in total, the stocks
					//and the counter (out of 20) get reset				
					// this.setState({stocks:reset})
					this.setState({outOf20:1})					
                }else{
					//as long as there are not 20 true answers in total yet,
					//ther counter keeps count and can show the same question again
                this.setState({trueAns:trueAns++})
        		}	
		}else{
			if(wrongAns==3){
				//i you've got 3 wrong answers,
				//the counter is reset and you get
				//the 'you lost'
				this.setState({outOf20:1})
				}else{
					wrongAns++;
					outOf20++
					this.setState({outOf20:outOf20})
					this.setState({wrongAns:wrongAns})				
				}

	    }        
	}
}
 
export default App;