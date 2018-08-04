import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { flickrImages, shutterStockVideos } from '../api/Api';
import { searchMediaAction, selectImageAction, selectVideoAction } from '../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/Videopage';
import '../styles/style.css';

// MediaGalleryPage Component
class MediaGalleryPage extends Component {
  constructor(){
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);

  }

 // We want to get images and videos from the API right after our component renders.
 componentDidMount() {
    this.props.dispatch(searchMediaAction('rain'));
  }

  handleSearch(event){
    event.preventDefault();
    if(this.query != null){
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = "";
    }
  }

  handleSelectVideo(selectedVideo){
    this.props.dispatch(selectVideoAction(selectedVideo));
  }

  handleSelectImage(selectedImage){
    console.log("image selected", selectedImage)
    this.props.dispatch(selectImageAction(selectedImage));
  }


  render() {
    const { images,  videos} = this.props;
    const selectedImage = images.selectedImage;
    const selectedVideo = videos.selectedVideo;
    console.log("medhia gallery props", this.props);
    console.log("selected video", selectedVideo);
    console.log("selected image", selectedImage);

   //         <VideoPage videos={videos} selectedVideo={selectedVideo} onHandleSelectVideo={this.handleSelectVideo} />
  return (
  <div >
    {images ?
      <div> 
        <form className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" ref={ref=>(this.query=ref)}/>
            <input type='submit' className='btn btn-primary' value='Search Library' onClick={this.handleSearch} />
          </div>
        </form>
          <div className='row'>
            <PhotoPage images={images} selectedImage={selectedImage} onHandleSelectedImage={this.handleSelectImage} />
            <VideoPage videos={videos} selectedVideo={selectedVideo} onHandleSelectVideo={this.handleSelectVideo} />
          </div>
      </div> : 'Loading'
    }
  </div>
  );
  }
}
const mapStateToProps = ({images, videos })=>({
  images: images,
  videos: videos,
});

export default connect(mapStateToProps)(MediaGalleryPage);