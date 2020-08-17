import React from 'react';
import Styles from './Styles.module.css';

const Jobs = (props)=>{

    // console.log(props.data.company_url);

    return (
                <ul>
                    <li class="media">
                         <div class="row">
                             <div class="col-12 width:400px">
                                 <div class="row p-3">
                                    <div class="col-3 img-fluid max-width: 100%" style={{width:"150px",height:"100px"}}>
                                        <img src={props.data.company_logo} class="card-img img-fluid"  alt={props.company}/>
                                        </div>
                                            <div class="media-body col-9 " style={{width:"500px"}}>
                                                <h5 class="mt-0 mb-1">{props.data.title}</h5>
                                                <p>{props.data.company} <span class="text-success"> {props.data.type}</span></p>
                                            <div>{props.data.location}{props.data.created_at}</div>
                                    </div>
                                 </div>
                             </div>
                        </div>
                    </li>
                </ul>
                
    )
}

export default Jobs