import React from "react";
import axios from 'axios'

class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    handleAll = ()=>{

        const requestParam = {
            method: 'get',
            url: 'https://jobs.github.com/positions.json?search=java',
            
          }
          axios(requestParam)
          .then(response => {
            this.setState({data:response.data})
            console.log(response)
          })
          .catch(err => console.log(err));
    }

    handleFull = ()=>{

        const requestParam = {
            method: 'get',
            url: 'https://jobs.github.com/positions.json?search=python&&full_time=true',
            
          }
          axios(requestParam)
          .then(response => {
            this.setState({data:response.data})
            console.log(response)
          })
          .catch(err => console.log(err));
    }

    


    render(){
        
        return(
            
            <div>
                <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand font-weight-bold" href="#">
                    <img src="data:image/png;base64,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" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy"/>
                    GitHub Jobs
                </a>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <div onClick={this.props.handleAll}><a className="nav-link active" href="#">AllJobs</a></div>
                    </li>
                    
                    <li className="nav-item">
                        <div  onClick={this.props.handleFull}><a className="nav-link" href="#">FullTime</a></div>
                    </li>
                    
                </ul>
                </nav>
            </div>
        )
    }
    
}

export default Navigation;