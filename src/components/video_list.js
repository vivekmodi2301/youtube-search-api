import React,{Component} from 'react';
import VideoListItem from './video_item';


class video_list extends Component {

  render(){
    const videoItems = this.props.videos.map((video) => {
      return <VideoListItem
      onVideoSelect={this.props.onVideoSelect} 
       key={video.etag}
      video={video} />
    });
    return(
      <div>
        <ul className="col-md-8 list-group">
          {videoItems}
        </ul>
      </div>
    );
  }
}
export default video_list;
