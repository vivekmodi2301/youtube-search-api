import React,{Component} from 'react';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      term : ''
    };
    this.changeInputSearch = this.changeInputSearch.bind(this);
  }
  render(){
    return(
      <div>
        <input className="form-control" onChange={this.props.searching}/>
      </div>
    );
  }
  changeInputSearch(event){
    this.setState({term:event.target.value});
  }
}

export default Search;
