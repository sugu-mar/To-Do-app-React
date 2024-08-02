import React,{useEffect, useState} from 'react'

import axios from 'axios';

const SearchImage = ({setImages,images}) => {

  const [userInput, setUserInput] =useState("")

  let baseUrl = "https://api.unsplash.com";

let searchUrl = "/search/photos"

const initialValue = "random";  

  useEffect(()=>{fetchData(null,initialValue)},[])

  async function fetchData(e){

    if(e){
      e.preventDefault();
    }
 
    try{
      let response = await axios.get(baseUrl+searchUrl,{
      
        headers:{
            Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
            "Accept-Version":"v1"
        },
        params:{
          query:userInput?userInput:initialValue,
        }
        
      })


      setImages(response.data.results);
    }

    catch{
      console.log(Error);
    }

  }

  return (<div>
      
  
  
  <form onSubmit={(e)=>fetchData(e,initialValue)}>
  
  
  <input placeholder='Search Photo' onChange={(e)=>{setUserInput(e.target.value)}}></input>
  
  <button type='submit'>Search</button>

 
  
  </form>



      </div>
    )

}

export default SearchImage




  // async function fetchData(e,initialValue){

  //   if(e){
  //     e.preventDefault();
  //   }
      
  //     // console.log(userInput)
  
  //     try{ let response =  await fetch(`https://api.unsplash.com/search/photos?query=${userInput?userInput:initialValue}`,{
  
  //       headers:{
  //           Authorization: "Client-ID 9LIcPkyQx0vLdZysV_sUESXt2gPx-EGDMM6MV_lJj9M",
            
  //       }
  //     })


  //     let data = await response.json();


  //     setImages(data.results);
  //     // console.log(data.results);
  //   }
  //   catch{console.log(Error)}
  
  // }