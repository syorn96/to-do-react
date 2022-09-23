import React, {Component} from 'react'
import ListItem from './ListItem'



export default class MyList extends Component {
  render(){
    
    let todoitems = this.props.theList.map((task, idx)=> {
      return <ListItem task={task} key={idx} />
    })
    return(
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoitems}
        </ul>

      </div>
    )
  }
}