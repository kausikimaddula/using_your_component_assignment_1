import React from "react";
import App from "../App";

  function Bookcard({id,image,name,genre,author}){



    return(
       <>
         <div  className="bookcard">
             <p>{id}</p>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{genre}</p>
            <h6>{author}</h6>
         </div>
       
       </>

    )

  }

  export default Bookcard;