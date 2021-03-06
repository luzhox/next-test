import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
class Media extends PureComponent{
    constructor(props){
        super(props)
    }
    handleClick =(event)=>{
        console.log(this.props.title)
    }
    render(){
        return(
            <div className="Media-item" onClick={this.handleClick}>
                <div className="media">
                    <img 
                        src={this.props.cover} 
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h1>{this.props.title}</h1>
                    <p>{this.props.author}</p>
                </div>
            </div>

        )
    }

}

Media.propTypes={
    image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    author:PropTypes.string.isRequired,
    type:PropTypes.oneOf(['video','audio']),
}
export default Media;