/**
 * Created by ponty on 11/4/15.
 */

import React,{Component,PropTypes} from 'react';
require('./search.scss');

export default class Search extends Component {

    keyPress = (e) => {
        /**
         * if the user clicks enter, we pass the value in
         * the input field back to the parent component onClickEnter
         * */
        if(e.which == 13 || e.keyCode == 13) {
            const text = e.target.value;
            this.props.onClickEnter(text);
        }
    }
    render(){
        const className = this.props.className;
        const placeholder = this.props.placeholder;
        return (
            <div className={className}>
                <span className="icon"><i className="fa fa-search"></i></span>
                <input type="text" placeholder={placeholder} onKeyPress={(e) => this.keyPress(e)}/>
            </div>
        )
    }
}


Search.defaultProps = {
    className:"search-box",
    placeholder:"search..."
};

Search.propTypes = {
    placeholder:PropTypes.string,
    onClickEnter:PropTypes.func.isRequired,
    className:PropTypes.string
}

/**
 * Props => placeholder for the search element
 * and the function that the parent component will use to get the text in the search component
 *
 * **/