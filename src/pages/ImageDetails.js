import React from 'react';
import ImageDetail from "../components/ImageDetails/ImageDetails";


const ImageDetails = (props) => {
    console.log(props.match.params.id);
    return (
        <React.Fragment> 
                    <ImageDetail imageid={props.match.params.id}/>
        </React.Fragment>
    );
};


export default ImageDetails;
