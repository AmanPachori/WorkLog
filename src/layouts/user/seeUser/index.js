import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { BallTriangle } from 'react-loader-spinner';
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Icon from "@mui/material/Icon";


const url = "https://work-log-backend.herokuapp.com";

const token = localStorage.getItem('jwt');




function Overview()
{  
      const [loading,setloading] = useState(false)
      const [options,setoptions] = useState([{"id":"0"}]);

const fetchdata = ()=>{
    if(options[0].id == 0)
    {
        axios.get(`${url}/employee/view`,{
        })
        .then((response)=>{
              console.log(response.data.data)
              setoptions(response.data.data);
        })
    }
}
   
  const Activate = (id) =>{
    axios.put(`${url}/employee/activate/${id}`,{
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(()=>{
       alert('Profile Activated');
       window.location.reload();
    })
  }
  const Deactivate = (id) =>{
    axios.put(`${url}/employee/deactivate/${id}`,{
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(()=>{
       alert(`Profile Deactivated`);
       window.location.reload();
    })
  }

   const Check = (e,id) =>{
      if(e === true)
      {
        return (
          <button  className="btn w-100 btn-outline-dark h-50" onClick={()=>{Activate(id)}} > Activate </button>
        )
      }
      else{
        return (
          <button  className="btn btn-outline-dark h-50" onClick={()=>{Deactivate(id)}} > Deactivate </button>
        )
      }
   }
   const checkStats = (e) =>{
       if(e)
       return <h6>Deactivated</h6>
       else
       return <h6>Activated</h6>

   }
    useEffect(() => {
   fetchdata()
   setloading(true);
   setTimeout(() => {
    setloading(false);
   },1500)
              },[]);

    if(token)
    {
        return(
          <div>
            {
            loading ? (
              <div style={{height: "100vh",backgroundColor:"rgba(0,0,0,0.99"}}className='w-100 border d-flex justify-content-center align-items-center text-center'>
            <BallTriangle
            height="100"
            width="100"
            color='#e39a09'
            ariaLabel='loading'
            />
            </div>
          ):(
            <DashboardLayout>
                <DashboardNavbar/>
                <Container className="m-2 p-5">
                <Table bordered>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Joining Date</th>
          <th>Contact Number</th>
          <th>Profile Status</th>
        </tr>
      </thead>
      <tbody >
        {
          options.map((ele)=>{
            return <tr className='info'>       
            <td><h6>{ele.username}</h6></td>
            <td><h6>{ele.email}</h6></td>
            <td><h6>{ele.department}</h6></td>
            <td><h6>{ele.joiningDate}</h6></td>
            <td><h6>{ele.contactNumber}</h6></td>
            <td>{checkStats(ele.status)}</td>
            <td><button  className="btn btn-outline-dark h-50" onClick={() =>{window.location = `/dashboard/${ele._id}`} }><Icon fontSize="small">dashboard</Icon></button></td>
            <td>{Check(ele.status,ele._id)}</td>
          </tr>
          })
        }
      </tbody>
    </Table>
                </Container>
            </DashboardLayout>
          )
            }
          </div>
  
            
        )
    }
    else{
      return( window.location = '/employeeSignin'
      )
  }
}

export default Overview;
