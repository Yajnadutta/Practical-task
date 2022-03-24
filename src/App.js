import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        summary:"",
        keyGen:[],
        diagnosed:"",
        mental:"",
        experience:"",
        intense:"",
        increment:0
      }
      this.handleIncrement=this.handleIncrement.bind(this)
  }
  handleIncrement(){
this.setState({increment:1})
  }
handleSubmit(){
 
  
  localStorage.setItem("Mental",this.state.mental)
  localStorage.setItem("Experience",this.state.experience)
  localStorage.setItem("KeyGen",this.state.keyGen.toString())
  localStorage.setItem("Intense",this.state.intense)
 
}
handleChangename = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
   
  });
  localStorage.setItem("Summary",e.target.value)
}  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
     
    });
   //this.setState({diagnosed:e.target.value})
   localStorage.setItem("diagnosed",e.target.value)
  }  

  handleChangetwo = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
     
    });
   //this.setState({mental:e.target.value})

   localStorage.setItem("mental",e.target.value)
  }  

  
  
  handleChangefour = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
     
    });
    localStorage.setItem("experience",e.target.value)
   //this.setState({experience:e.target.value})
  } 

  handleChangefive = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
     
    });
  // this.setState({intense:e.target.value})
   localStorage.setItem("intense",e.target.value)
  } 
  handleCheckbox(e){
    if (e.target.checked){
      this.setState({keyGen: this.state.keyGen.concat([e.target.value])},()=>{
          console.log(this.state.keyGen.toString())
          localStorage.setItem("keyGen",this.state.keyGen.toString())
      })
    }
    else{
      this.setState({keyGen : this.state.keyGen.filter(function(val) {return val!==e.target.value})},()=>{
 localStorage.setItem("keyGen",this.state.keyGen.toString())
      })
    }
  }
  render() {
    return (
      <div>
        <div className="container" id="containerone">

        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 mainheading">
              <span>Pain & Functional Description</span><br/>
             
            </div>
            <div className="col-sm-4"></div>
          </div>
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 secondheading">
            <span>The Description of the current situation gives your Optimum Trainer a picture of and dues to the underlying causes of your problems.</span>
             
            </div>
            <div className="col-sm-4"></div>
          </div>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9" style={{fontSize:18,marginLeft:"20%",marginTop:"3%"}}>
            <span>If you have problems with pain/aches,stiffness,weakness or functional problems,describe</span>
             
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9" style={{fontSize:20,marginLeft:"20%"}}>
            <span>this/these below. (List the symptoms in descending order with most trouble First)</span>
             
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
           
             <textarea name="summary" onChange={this.handleChangename} className="form-control mt-4" rows="4" style={{border:"1px solid black"}}>

             </textarea>
            </div>
          </div>
          <div className="row mt-4" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <span>Have you been diagnosed with this problem?</span>
            </div>
            <div className="col-sm-2">
              <input type="radio"
              value="Not relevant"
              onChange={this.handleChange}
              name="text"/> &nbsp; &nbsp;&nbsp;Not relevant
            </div>
            <div className="col-sm-2"><input type="radio" 

value="Yes"
onChange={this.handleChange}
             name="text"/>&nbsp; &nbsp;&nbsp;Yes</div>
            <div className="col-sm-2"><input type="radio"
            value="No"
            onChange={this.handleChange}
            name="text"/>&nbsp; &nbsp;&nbsp;No</div>
          </div>
          <div className="row mt-4" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <span>Did the problem start after a physical trauma?</span>
            </div>
            <div className="col-sm-2">
              <input type="radio" name="text1" 
               value="Not relevant"
               onChange={this.handleChangetwo}
              /> &nbsp; &nbsp;&nbsp;Not relevant
            </div>
            <div className="col-sm-2"><input type="radio" 
             value="Yes"
             onChange={this.handleChangetwo}
            name="text1"/>&nbsp; &nbsp;&nbsp;Yes</div>
            <div className="col-sm-2"><input type="radio" 
              value="No"
              onChange={this.handleChangetwo}
            name="text1"/>&nbsp; &nbsp;&nbsp;No</div>
          </div>
          <div className="row mt-4" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <span>Did the problem start after a mental trauma?</span>
            </div>
            <div className="col-sm-2">
              <input type="radio" name="text2"/> &nbsp; &nbsp;&nbsp;Not relevant
            </div>
            <div className="col-sm-2"><input type="radio" 
             value="Yes"
             onChange={this.handleChangethree}
            name="text2"/>&nbsp; &nbsp;&nbsp;Yes</div>
            <div className="col-sm-2"><input type="radio" 
             value="No"
             onChange={this.handleChangethree}
            name="text2"/>&nbsp; &nbsp;&nbsp;No</div>
          </div>
          <div className="row mt-4" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <span>How often do you experience the problem?</span>
            </div>
           
          </div>
          <div className="row mt-1" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1">

            </div>
            <div className="col-sm-2">
            <input type="radio" 
             value="Not relevant"
             onChange={this.handleChangefour}
            name="text3"/>&nbsp; &nbsp;&nbsp;Not relevant
            </div>
            <div className="col-sm-2">
            <input type="radio" 
            value="Daily"
            onChange={this.handleChangefour}
            name="text3"/>&nbsp; &nbsp;&nbsp;Daily
            </div>
            <div className="col-sm-3">
            <input type="radio" 
             value="Several times/week"
             onChange={this.handleChangefour}
            name="text3"/>&nbsp; &nbsp;&nbsp; Several times/week
            </div>
            <div className="col-sm-3">
            <input type="radio"  
            value="A few times/month"
            onChange={this.handleChangefour}
            name="text3"/>&nbsp; &nbsp;&nbsp; A few times/month
            </div>

           
          </div>
          <div className="row mt-1" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1">

            </div>
            <div className="col-sm-2">
            <input type="radio" 
             value="A few times/year"
             onChange={this.handleChangefour}
            name="text3"/>&nbsp; &nbsp;&nbsp;A few times/year
            </div>
           
          </div>
          <div className="row mt-4" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <span>When do you experience the Problem ?</span> <br/>
              
              <input type="checkbox" className="mt-2"
               
               onClick={(e)=>this.handleCheckbox(e)}
              value="Not relevant"/>&nbsp; &nbsp;&nbsp;Not relevant <br />
              <input type="checkbox" className="mt-2" onClick={(e)=>this.handleCheckbox(e)} value="When lying down"/>&nbsp; &nbsp;&nbsp;When lying down <br />
              <input type="checkbox" className="mt-2" onClick={(e)=>this.handleCheckbox(e)} value="When sitting"/>&nbsp; &nbsp;&nbsp;When sitting <br />
              <input type="checkbox" className="mt-2"  onClick={(e)=>this.handleCheckbox(e)}value="Under standing"/>&nbsp; &nbsp;&nbsp;Under standing <br />
              <input type="checkbox" className="mt-2"  onClick={(e)=>this.handleCheckbox(e)} value="In walking"/>&nbsp; &nbsp;&nbsp;In walking <br />

            </div>
            <div className="col-sm-5">
            <textarea className="form-control" rows="3" 
            placeholder="Other? For example in rotatios,side bends,wing stairs,when working with the arms above the head"
            style={{marginLeft:"-14%",marginTop:"5%",border:"1px solid black"}}></textarea>
            </div>
           
          </div>

          <div className="row mt-4" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <span>How intense is the experience of the problem on average on a 0-10 scale?</span>
            </div>
           
          </div>
          <div className="row mt-4">
            <div className="col-sm-1"></div>
            <div className="col-sm-1">1
            <br/><input type="radio"  onChange={this.handleChangefive} value="1" name="test5"/>
            </div>
            <div className="col-sm-1">2
            
            <br/><input type="radio" onChange={this.handleChangefive} value="2" name="test5"/>
            </div>
            <div className="col-sm-1">3
            
            <br/><input type="radio" onChange={this.handleChangefive} value="3" name="test5"/>
            </div>
            <div className="col-sm-1">4
            
            <br/><input type="radio" onChange={this.handleChangefive}value="4" name="test5"/>
            </div>
            <div className="col-sm-1">5
            
            <br/><input type="radio" onChange={this.handleChangefive} value="5" name="test5"/>
            </div>
            <div className="col-sm-1">6
            
            <br/><input type="radio" onChange={this.handleChangefive}value="6" name="test5"/>
            </div>
            <div className="col-sm-1">7
            
            <br/><input type="radio" onChange={this.handleChangefive} value="7" name="test5"/>
            </div>
            <div className="col-sm-1">8
            
            <br/><input type="radio" onChange={this.handleChangefive} value="8" name="test5"/>
            </div>
            <div className="col-sm-1">9
            
            <br/><input type="radio" onChange={this.handleChangefive} value="9" name="test5"/>
            </div>
          
          </div>

          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-1">10
            <br/><input type="radio" onChange={this.handleChange} value="10" name="test5"/>
            </div>
            
          
          </div>
          <div className="row">
         <div className="col-sm-6"></div>
         <div className="col-sm-4 mt-5">

         <span id="container">
           <span
           onClick={this.handleIncrement}
           style={{fontSize:33,color:"white"}}>+</span>
           </span>
         </div>
        
          </div>
          <div className="row mt-4" style={{marginLeft:"-10%"}}>
         <div className="col-sm-5"></div>
         <div className="col-sm-2 mt-5">

        <button className="btn btn-primary">Back</button>
         </div>
         <div className="col-sm-2 mt-5">

         <Link to="/summary"
          className="btn btn-primary">Next</Link>
         </div>
        
          </div>
          {this.state.increment==1?<>
<div className="container" id="containertwo">
  
<div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 mainheading">
              <span>Pain & Functional Description</span><br/>
             
            </div>
            <div className="col-sm-4"></div>
          </div>
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 secondheading">
            <span>The Description of the current situation gives your Optimum Trainer a picture of and dues to the underlying causes of your problems.</span>
             
            </div>
            <div className="col-sm-4"></div>
          </div>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9" style={{fontSize:18,marginLeft:"20%",marginTop:"3%"}}>
            <span>If you have problems with pain/aches,stiffness,weakness or functional problems,describe</span>
             
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9" style={{fontSize:20,marginLeft:"20%"}}>
            <span>this/these below. (List the symptoms in descending order with most trouble First)</span>
             
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
           
             <textarea name="summary" onChange={this.handleChangename} className="form-control mt-4" rows="4" style={{border:"1px solid black"}}>

             </textarea>
            </div>
          </div>
          <div className="row mt-4" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <span>Have you been diagnosed with this problem?</span>
            </div>
            <div className="col-sm-2">
              <input type="radio"
              value="Not relevant"
              onChange={this.handleChange}
              name="text"/> &nbsp; &nbsp;&nbsp;Not relevant
            </div>
            <div className="col-sm-2"><input type="radio" 

value="Yes"
onChange={this.handleChange}
             name="text"/>&nbsp; &nbsp;&nbsp;Yes</div>
            <div className="col-sm-2"><input type="radio"
            value="No"
            onChange={this.handleChange}
            name="text"/>&nbsp; &nbsp;&nbsp;No</div>
          </div>
          <div className="row mt-4" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <span>Did the problem start after a physical trauma?</span>
            </div>
            <div className="col-sm-2">
              <input type="radio" name="text1" 
               value="Not relevant"
               onChange={this.handleChangetwo}
              /> &nbsp; &nbsp;&nbsp;Not relevant
            </div>
            <div className="col-sm-2"><input type="radio" 
             value="Yes"
             onChange={this.handleChangetwo}
            name="text1"/>&nbsp; &nbsp;&nbsp;Yes</div>
            <div className="col-sm-2"><input type="radio" 
              value="No"
              onChange={this.handleChangetwo}
            name="text1"/>&nbsp; &nbsp;&nbsp;No</div>
          </div>
          <div className="row mt-4" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <span>Did the problem start after a mental trauma?</span>
            </div>
            <div className="col-sm-2">
              <input type="radio" name="text2"/> &nbsp; &nbsp;&nbsp;Not relevant
            </div>
            <div className="col-sm-2"><input type="radio" 
             value="Yes"
             onChange={this.handleChangethree}
            name="text2"/>&nbsp; &nbsp;&nbsp;Yes</div>
            <div className="col-sm-2"><input type="radio" 
             value="No"
             onChange={this.handleChangethree}
            name="text2"/>&nbsp; &nbsp;&nbsp;No</div>
          </div>
          <div className="row mt-4" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <span>How often do you experience the problem?</span>
            </div>
           
          </div>
          <div className="row mt-1" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1">

            </div>
            <div className="col-sm-2">
            <input type="radio" 
             value="Not relevant"
             onChange={this.handleChangefour}
            name="text3"/>&nbsp; &nbsp;&nbsp;Not relevant
            </div>
            <div className="col-sm-2">
            <input type="radio" 
            value="Daily"
            onChange={this.handleChangefour}
            name="text3"/>&nbsp; &nbsp;&nbsp;Daily
            </div>
            <div className="col-sm-3">
            <input type="radio" 
             value="Several times/week"
             onChange={this.handleChangefour}
            name="text3"/>&nbsp; &nbsp;&nbsp; Several times/week
            </div>
            <div className="col-sm-3">
            <input type="radio"  
            value="A few times/month"
            onChange={this.handleChangefour}
            name="text3"/>&nbsp; &nbsp;&nbsp; A few times/month
            </div>

           
          </div>
          <div className="row mt-1" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1">

            </div>
            <div className="col-sm-2">
            <input type="radio" 
             value="A few times/year"
             onChange={this.handleChangefour}
            name="text3"/>&nbsp; &nbsp;&nbsp;A few times/year
            </div>
           
          </div>
          <div className="row mt-4" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
              <span>When do you experience the Problem ?</span> <br/>
              
              <input type="checkbox" className="mt-2"
               
               onClick={(e)=>this.handleCheckbox(e)}
              value="Not relevant"/>&nbsp; &nbsp;&nbsp;Not relevant <br />
              <input type="checkbox" className="mt-2" onClick={(e)=>this.handleCheckbox(e)} value="When lying down"/>&nbsp; &nbsp;&nbsp;When lying down <br />
              <input type="checkbox" className="mt-2" onClick={(e)=>this.handleCheckbox(e)} value="When sitting"/>&nbsp; &nbsp;&nbsp;When sitting <br />
              <input type="checkbox" className="mt-2"  onClick={(e)=>this.handleCheckbox(e)}value="Under standing"/>&nbsp; &nbsp;&nbsp;Under standing <br />
              <input type="checkbox" className="mt-2"  onClick={(e)=>this.handleCheckbox(e)} value="In walking"/>&nbsp; &nbsp;&nbsp;In walking <br />

            </div>
            <div className="col-sm-5">
            <textarea className="form-control" rows="3" 
            placeholder="Other? For example in rotatios,side bends,wing stairs,when working with the arms above the head"
            style={{marginLeft:"-14%",marginTop:"5%",border:"1px solid black"}}></textarea>
            </div>
           
          </div>

          <div className="row mt-4" style={{fontSize:18,fontFamily:"sans-serif"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <span>How intense is the experience of the problem on average on a 0-10 scale?</span>
            </div>
           
          </div>
          <div className="row mt-4">
            <div className="col-sm-1"></div>
            <div className="col-sm-1">1
            <br/><input type="radio"  onChange={this.handleChangefive} value="1" name="test5"/>
            </div>
            <div className="col-sm-1">2
            
            <br/><input type="radio" onChange={this.handleChangefive} value="2" name="test5"/>
            </div>
            <div className="col-sm-1">3
            
            <br/><input type="radio" onChange={this.handleChangefive} value="3" name="test5"/>
            </div>
            <div className="col-sm-1">4
            
            <br/><input type="radio" onChange={this.handleChangefive}value="4" name="test5"/>
            </div>
            <div className="col-sm-1">5
            
            <br/><input type="radio" onChange={this.handleChangefive} value="5" name="test5"/>
            </div>
            <div className="col-sm-1">6
            
            <br/><input type="radio" onChange={this.handleChangefive}value="6" name="test5"/>
            </div>
            <div className="col-sm-1">7
            
            <br/><input type="radio" onChange={this.handleChangefive} value="7" name="test5"/>
            </div>
            <div className="col-sm-1">8
            
            <br/><input type="radio" onChange={this.handleChangefive} value="8" name="test5"/>
            </div>
            <div className="col-sm-1">9
            
            <br/><input type="radio" onChange={this.handleChangefive} value="9" name="test5"/>
            </div>
          
          </div>

          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-1">10
            <br/><input type="radio" onChange={this.handleChange} value="10" name="test5"/>
            </div>
            
          
          </div>
          <div className="row">
         <div className="col-sm-6"></div>
         <div className="col-sm-4 mt-5">

         <span id="container">
           <span
           onClick={this.handleIncrement}
           style={{fontSize:33,color:"white"}}>+</span>
           </span>
         </div>
        
          </div>
          <div className="row mt-4" style={{marginLeft:"-10%"}}>
         <div className="col-sm-5"></div>
         <div className="col-sm-2 mt-5">

        <button className="btn btn-primary">Back</button>
         </div>
         <div className="col-sm-2 mt-5">

         <Link to="/summary"
          className="btn btn-primary">Next</Link>
         </div>
        
          </div>

</div>
          </>:<>
          
          </>}
       
        </div>
        <div className="mt-5"></div>
      </div>
    );
  }
}
