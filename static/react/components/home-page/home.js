/**
 * Created by ponty on 11/3/15.
 */
import React,{Component} from 'react'
import Search from './../reusable/search/search'
import AuthModal from './../reusable/auth-modal/auth-modal'
require('./home-page.scss');

export default class HomePage extends Component {

    constructor(){
        super();
        this.state = {showSearch:true,showAuth:0}
    }
    search = (text) => {
        console.log('search word'+text)
    }
    clickNav = (pos) => {

        this.setState({showSearch:false,showAuth:pos})
    }

    render() {
        const showSearch = this.state.showSearch;
        const showAuth = this.state.showAuth;
        let main_search_class;
        let auth_modals_class;
        let title;
        switch (showAuth){
            case 1:
              title = "Login With";
              break;
            case -1:
                title = "Sign Up With";
                break;
            default:
                auth_modals_class = "auth-modals hide";
                break;
        }

        if(showSearch){
             main_search_class = "main-search";
             auth_modals_class = "auth-modals hide";
        } else {
             main_search_class = "main-search hide";
             auth_modals_class = "auth-modals";
        }
        return (
            <div className="home-bg">
                <div className="container-fluid">
                    <header className="row idx-header">
                        <div className="col-md-2 col-sm-3 col-xs-5">
                            <div className="brand">
                                <img src="/static/images/pitch/pitchaman_logo.png" className="img-responsive"/>

                                <div className="tagline">...pitch now...get pitched</div>
                            </div>
                        </div>
                         <div className="authLinks">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                                <span onClick={ () => this.clickNav(1)}>Login</span>
                                <span onClick={ () => this.clickNav(-1)}>Sign Up</span>
                            </div>
                        </div>
                    </header>
                    <div className="row">
                        <p className="text-right punchline">
                            Business Potentials <span className="black">meet</span> Investors
                        </p>
                    </div>
                    <div className={auth_modals_class}>
                         <AuthModal title={title}
                                    fbUrl="http://localhost:5000/accounts/facebook/login/"
                                    gPlusUrl=""
                             />
                    </div>
                    <div className={main_search_class}>
                    <Search className="search-box-big" onClickEnter={this.search}/>
                    </div>
                </div>
            </div>
        )
    }

}

/**
 * states => showSearch [true or false,
 * if it is false main-search class becomes main-search hide and auth-modals]
 * else main-search == main-search and auth-modals becomes auth-modals hide
 *
 * showAuth => {which if its is 1 means setTitle as Login With
 * else if is -1 show title has signUp as
 * else auth-modals == auth-modals hide
 * }
 *
 * clickNav => changes the state to show login dialog box or sign up
 *
 * */
