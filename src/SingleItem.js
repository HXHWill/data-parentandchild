import React,{Component} from 'react';
class SingleItem extends Component{
    constructor(props){
        super(props);
        this.itemClick=this.itemClick.bind(this);

    }
    render(){
        return(
        <div
        onClick={this.itemClick}
        >{this.props.eventName}
        </div>)
    }

    itemClick(){
        this.props.eventDelete(this.props.index)
    }
}
export default SingleItem;