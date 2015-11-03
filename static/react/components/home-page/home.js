/**
 * Created by ponty on 11/3/15.
 */
import React,{Component} from 'react'
require('./home-page.scss');

export default class HomePage extends Component {

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
                </div>
            </div>
        )
    }

}
