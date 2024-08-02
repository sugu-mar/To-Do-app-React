import React,{useState} from 'react';
import SearchImage from './PhotoAppComponents/SearchImage';
import ListImage from './PhotoAppComponents/ListImage';

const PhotoApp = () => {
    const [images,setImages] = useState([]);
return(
    <div>
        <SearchImage setImages={setImages} images={images}/>
        <ListImage images={images}/>
    </div>
)

  
}

export default PhotoApp