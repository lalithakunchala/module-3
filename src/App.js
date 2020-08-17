import React from 'react';
import Navigation from './components/Navigation.js';
import Search from './components/Search.js';
import Jobs from './components/Jobs.jsx';
import axios from 'axios'
import './App.css';

class App extends React.Component{

    constructor(props){
      super(props)
      this.state={
        page:false,
        skill:"",
        location:"",
        fulltime:"",
        data:[]
      };
    }

      handlePage = ()=>{
        this.setState({
          page:!this.state.page
        });
      }

      

      handleChange = (e)=>{
        this.setState({
          [e.target.name]: e.target.value
        })
        console.log(this.state.skill,this.state.location);
      }

      handleSearch = (e)=>{
        e.preventDefault();
     
        // axios.get('https://jobs.github.com/positions.json?search=')
        // .then(function (response) {
        //   console.log(response);
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
          const requestParam = {
          method: 'get',
          url: 'https://jobs.github.com/positions.json?search=node',
          params : {
            search :this.state.skill,
              location : this.state.location         
            }
        }
        //console.log(requestParam);
        axios(requestParam)
            .then(response => {
              this.setState({data:response.data})
              // console.log(response)
            })
            .catch(err => console.log(err));
              
       }

       handleAll = ()=>{

        console.log(this.state.skill,this.state.location)
        const requestParam = {
            method: 'get',
            url: `https://jobs.github.com/positions.json?`,
            params : {
              search :this.state.skill        
              }
          }
          axios(requestParam)
          .then(response => {
            this.setState({data:response.data})
            // console.log(response)
          })
          .catch(err => console.log(err));
    }

    handleFull = ()=>{
      console.log(this.state.skill,this.state.location)
        const requestParam = {
            method: 'get',
            url: `https://jobs.github.com/positions.json? full_time=true`,
            params : {
              search :this.state.skill,
                location : this.state.location         
              }
          }
          axios(requestParam)
          .then(response => {
            this.setState({data:response.data})
            // console.log(response)
          })
          .catch(err => console.log(err));
    }

       componentDidMount(){
        const requestParam = {
          method: 'get',
          url: 'https://jobs.github.com/positions.json?search=node',
          
        }
        axios(requestParam)
        .then(response => {
          this.setState({data:response.data})
          // console.log(response)
        })
        .catch(err => console.log(err));
        
       }

  render(){



    let {page} = this.state;
    console.log(page);
    if(page)
    return (
      <div className="App">
         
          <div className="App-header"  onClick = {this.handlePage} >
          GITHUB JOBS
        </div>:
        
      </div>
    );
    else
    return(
      <div>
       <Navigation handleAll={this.handleAll} handleFull={this.handleFull}/>
       <label className="h6 mt-5">Find A Job at GitHub Job Site</label>
            <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <input className="form-control mr-sm-2 " style = {{padding:"20px"}} name="skill" value = {this.state.skill} onChange={(e)=>this.handleChange(e)} type="search" placeholder="skills,Designation,companies" aria-label="Search"/>
                <input className="form-control mr-sm-2 " style = {{padding:"20px"}} name="location" value = {this.state.location} onChange={(e)=>this.handleChange(e)} type="search" placeholder="Enter Location" />
                <button className="btn btn-primary my-2 my-sm-0" style = {{width:"150px"}} onClick={this.handleSearch} type="submit">Search</button>  
            </form>
            </nav>
          <Search />
                    {
                      this.state.data.filter((ele)=>(ele.company_logo!==null)).map((ele,index)=>(
                        <Jobs data={ele} key ={index}/>
                      ))

                    }
            <div class="w-50 float-right">
            <nav aria-label="Page navigation example ">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
            </div>
          </div>
              
      );
    }
  }


export default App
