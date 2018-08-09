import React,{Component} from 'react';
import ReactDOM from 'react-DOM';
import Search from './components/search';
import Video_list from './components/video_list';
import YTSearch from 'youtube-api-search';
import GoogSearch from 'google-search';
import VideoDetail from './components/video_detail';
const  API_KEY="AIzaSyAPNLXEkKq_51jRUlUcZ6iLjsCMgVSH62w";


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo : null,
      searchMe: 'hitesh choudhary'
    };
    YTSearch({key:API_KEY,term:this.state.searchMe},(videos) => {

      this.setState({
        videos:videos,
        selectedVideo: videos[0],
      });
    });
    // GoogSearch({key:API_KEY,term:this.state.searchMe},(videos) => {
    //   console.log(videos);
    // });
    this.searchYt = this.searchYt.bind(this);
  }
  searchYt(event){
    this.setState({searchMe:event.target.value});
    YTSearch({key:API_KEY,term:this.state.searchMe},(videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }
  render(){
    return(
      <div>
        <Search searching={this.searchYt}/>
        <VideoDetail  video={this.state.selectedVideo}/>
        <Video_list onVideoSelect={(video)=>{this.setState({selectedVideo:video})}} videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.querySelector('.container'));
