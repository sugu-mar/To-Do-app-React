import React from 'react'

const ListImage = ({images}) => {

   
    
  return (
    <>   
{images.map((img,index) => <div key={index}><img src={img.urls.thumb} alt={img.alt_description}/> <a href={img.links.download
} target="_blank">View in full Screen</a>
<p>{img.alt_description}</p></div>)}
    </>
  )
}

export default ListImage