import React from "react";

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    var Summarry = localStorage.getItem("Summary");
    var Diagnosed = localStorage.getItem("diagnosed");
    var Mental = localStorage.getItem("mental");
    var Experience = localStorage.getItem("experience");
    var KeyGen = localStorage.getItem("keyGen");
    var Intense = localStorage.getItem("intense");
    this.state = {
      summary: Summarry,
      keyGen: KeyGen,
      diagnosed: Diagnosed,
      mental: Mental,
      experience: Experience,
      intense: Intense,
    };
  }
  render() {
    return (
     
         <>
          <div className="row" style={{width:"100%",marginTop:"5%"}}>
              <h1 style={{textAlign:"center"}}>Summary</h1>
            <div className="col-sm-1"></div>
            <div className="col-sm-5 mt-5">
              <span>
                If you have problems with pain/aches,stiffness,weakness or
                functional problems,describe this/these below. (List the
                symptoms in descending order with most trouble First)
              </span>
            </div>
            <div className="col-sm-5 mt-5">
              <textarea
                className="form-control"
                rows="4"
                value={this.state.summary}
                disabled
              ></textarea>
            </div>
            <div className="col-sm-1"></div>
          </div>
          <div className="row" style={{width:"100%",marginTop:"1%"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5 mt-5">
              <span>
              Have you been diagnosed with this problem?
              </span>
            </div>
            <div className="col-sm-5 mt-5">
              <span>{this.state.diagnosed}</span>
            </div>
            <div className="col-sm-1"></div>
          </div>

          <div className="row" style={{width:"100%",marginTop:"1%"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5 mt-5">
              <span>
              Did the problem start after a physical trauma?
              </span>
            </div>
            <div className="col-sm-5 mt-5">
              <span>{this.state.diagnosed}</span>
            </div>
            <div className="col-sm-1"></div>
          </div>
          <div className="row" style={{width:"100%",marginTop:"1%"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5 mt-5">
              <span>
              Did the problem start after a mental trauma?
              </span>
            </div>
            <div className="col-sm-5 mt-5">
              <span>{this.state.mental}</span>
            </div>
            <div className="col-sm-1"></div>
          </div>
          <div className="row" style={{width:"100%",marginTop:"1%"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5 mt-5">
              <span>
              How often do you experience the problem?
              </span>
            </div>
            <div className="col-sm-5 mt-5">
              <span>{this.state.experience}</span>
            </div>
            <div className="col-sm-1"></div>
          </div>

          <div className="row" style={{width:"100%",marginTop:"1%"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5 mt-5">
              <span>
              When do you experience the Problem ?
              </span>
            </div>
            <div className="col-sm-5 mt-5">
              <span>{this.state.keyGen}</span>
            </div>
            <div className="col-sm-1"></div>
          </div>
          <div className="row" style={{width:"100%",marginTop:"1%"}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-5 mt-5">
              <span>
              How intense is the experience of the problem on average on a 0-10 scale?
              </span>
            </div>
            <div className="col-sm-5 mt-5">
              <span>{this.state.intense}</span>
            </div>
            <div className="col-sm-1"></div>
          </div>
          </>
       
    );
  }
}
