import React from 'react';
import './SearchList.css';
export default function SearchList({list}){
    return(
        <div class="SearchList">
            {list.slice(0,3).map(item=><SearchResultItem item={item}/>)}
        </div>
    )
}
function SearchResultItem(props){
    console.log(props);
    return(
        <div className="SearchResultItem" >
            <img src={props.item.Poster}/>
            <div className='col-float-left' style={{width:"calc(100% - 80px)",paddingLeft:"10px"}}>
                <p>{props.item.Title.substring(0,35)}</p>
                <p>{props.item.Year}</p>
            </div>
        </div>
    )
}