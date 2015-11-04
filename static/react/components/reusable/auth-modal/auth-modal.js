/**
 * Created by ponty on 11/4/15.
 */
import React,{Component,PropTypes} from 'react'
require('./auth-modal.scss');
export default class AuthModal extends Component{

    constructor(){
        super();
        this.state = {clicked:''};
    }

    mouseOver = (text) =>{
        this.setState({clicked:text});
    };
    mouseOut = () => {
        this.setState({clicked:''});
    };
    render(){
        const clicked = this.state.clicked;
        let headerClass;
        if(clicked == 'left'){
            headerClass = 'header leftActive'
        } else if(clicked == 'right') {
            headerClass = 'header rightActive';
        } else {
            headerClass = 'header';
        }
        return(
            <div className="auth-modal">
            <div className={headerClass}>
                Login with
            </div>
                <div className="body">
                    <a className="social-btn left" href="http://dude.com"
                       onMouseOver={() =>this.mouseOver('left')}
                         onMouseOut={() =>this.mouseOut()}>
                        <i className="fa fa-facebook"></i>
                     </a>
                    <a className="social-btn right" href="http://dude.com"
                       onMouseOver={() =>this.mouseOver('right')}
                         onMouseOut={() =>this.mouseOut()}>
                         <i className="fa fa-google-plus"></i>
                    </a>
                </div>
            </div>
        )
    }
}

/**
 * state => click
 * the effect here is obvious after viewing the page but will still explain here
 * when the user hovers around a social btn [facebook or google]
 * the state of the component is automatically changed and the header bg color and also the bg color of the social btn
 * to the color of main color of the social auth provider
 *
 *
 * */
