import React from 'react'
import { Link } from 'react-router-dom'


export default function Home(props) {


  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>

        </h1>
        <h1>
          <Link to="/signup" >Signup</Link>
        </h1>

      </div>
      <br />
      <br />
      <br />


      
              <h2>{props.name ? ` Welcome -${props.name}` : "Login please"}</h2>
    
      
      
      

      
      
      
      


      
      
      
      
      </div>
      )
    }
    
    
      // {props.name ? (
      //   <h2>Welcome, {props.name}!</h2>
      //     ) : (
      //   <div>
      //     <ClipLoader
      //       color={color}
      //       loading={loading}
      //       cssOverride={override}
      //       size={150}
      //       aria-label="Loading Spinner"
      //       data-testid="loader"
      //     />
      //     <p>Loading...</p>
      //   </div>
      // )}