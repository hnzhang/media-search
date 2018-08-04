import React from 'react';
//import imageReducers from '../reducers/imageReducers';
//import Prototypes from 'prototype';

const PhotoPage = ({images,  selectedImage, onHandleSelectedImage}) => (
    <div className = 'col-md-6'>
        <h2> Images</h2>
        {selectedImage?
        <div className="selected-image">
            <div key={selectedImage.id}>
                <h6>{selectedImage.title}</h6>
                <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
            </div>
        </div>
        : ' '
        }
        <div className="image-thumbmail">
            {images.map((image, i)=>(
                <div key={i} onClick={onHandleSelectedImage.bind(this, image)} >
                    <img src={image.mediaUrl} alt={image.title} />
                </div>
            ))}
        </div>
    </div>
);
/** 
PhotoPage.prototypes = {
    images: Proptypes.array.isRequired,
    selectedImage: Prototypes.object,
    onHandleSelectedImage: Prototypes.func.isRequired,
};
*/

export default PhotoPage;