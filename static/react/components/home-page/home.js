/**
 * Created by ponty on 11/3/15.
 */
import React,{Component} from 'react'
import Search from './../reusable/search/search'
require('./home-page.scss');

export default class HomePage extends Component {

    search = (text) => {
        console.log('search word'+text)
    }
    render() {
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
                        <div className="col-md-10 col-sm-9 col-xs-12">
                            <div className="authLinks">
                                <span>Login</span>
                                <span>Sign Up</span>
                            </div>
                        </div>
                    </header>
                    <div className="row">
                        <p className="text-right punchline">
                            Business Potentials <span className="black">meet</span> Investors
                        </p>
                    </div>
                    <div className="main-search">
                    <Search className="search-box-big" onClickEnter={this.search}/>
                    </div>
                </div>
            </div>
        )
    }

}
