import React,{Component} from 'react'

class CommentInput extends Component {
    
    constructor(){
        super()
        this.state = {
            username:'',
            comment:''
        }
    }
    
    onUserNameChange(event){
        this.setState({
            username:event.target.value
        })
    }
    
    onCommentChange(event){
        this.setState({
            comment:event.target.value
        })
    }
    
    onBtnClick(event){
        if(this.props.onSubmit){
            const {username,comment} = this.state
            this.props.onSubmit({
                username,comment
            })
        }
        this.setState({comment:''})
    }
    
    render(){
        return(
            <div>
                <div>
                <span>User Name:</span>
                <input value={this.state.username}
                onChange={this.onUserNameChange.bind(this)}/>
                </div>
                <div>
                <span>Comment:</span>
                <input value={this.state.comment}
                onChange={this.onCommentChange.bind(this)}/>
                </div>
                <div>
                    <button onClick={this.onBtnClick.bind(this)}>Submit</button>
                </div>
            </div>
        )
    }
}

export default CommentInput