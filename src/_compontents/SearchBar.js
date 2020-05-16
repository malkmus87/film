import React from 'react';
import SearchList from './SearchList';
import './SearchBar.css';
export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchKey:"",
            intervalID:null,
            ticked:0,
            list:[]
        }
    }
    ticker=()=>{   
        const ticked=this.state.ticked;
        console.log(ticked);
        if(ticked===1){
            clearInterval(this.state.intervalID);
            this.setState({ticked:0});
            fetch(`http://localhost:5000/search?s=${this.state.searchKey}`).then(response=>response.json()).then(res=>{
                this.setState({list:res});
            });
        }
        else{
            this.setState({ticked:ticked+1})
        }
    }
    onChange=(event)=>{
        clearInterval(this.state.intervalID);
        let intervalID=null;
        if(event.target.value.length>0){
            intervalID=setInterval(this.ticker,300);
        }
        else{
            this.setState({list:[]})
        }
        this.setState({[event.target.name]:event.target.value,intervalID:intervalID});
    }
    render(){
        return(
            <div className="SearchBar"><div className="SearchBar-inner">
                <div></div>
                <form className="SearchForm" onSubmit={this.onSubmit}>
                    <input  type="text" value={this.state.searchKey} name="searchKey" onChange={this.onChange}/>
                    <SearchList
                        list={this.state.list}
                    />
                </form>
               

            </div></div>
        )
    }
}
