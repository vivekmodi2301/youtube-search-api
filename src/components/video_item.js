import React,{Component} from 'react';

class video_item extends Component {

  render(){
    console.log(this.props);
    const imgeUrl = this.props.video.snippet.thumbnails.default.url;
    return(
      <li onClick={()=>this.props.onVideoSelect(this.props.video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imgeUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading" >
              {this.props.video.snippet.title}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default video_item;
