/**
 * Created by ponty on 11/5/15.
 */
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Tabs,Tab} from 'react-bootstrap';
import InvestorForm from './forms/investor-form'
import StartUpForm from './forms/startup-form'
import Search from './../reusable/search/search'
require('./profile-new-page.scss');

class ProfileNewPage extends Component {

    search = (text) => {
        console.log('search word'+text)
    }

    render(){
        return (
            <div>
                <header className="header">
                    <div className="logo">
<img src="/static/images/pitch/pitchaman_dashboard_logo.png" className="img-responsive"/>

                    </div>
                </header>
            <div className="container-fluid">
                <div className="row">
                     <div className="tabs-right">
                            <div className="col-md-12">
                                 <Tabs defaultActiveKey={1}>
                                        <Tab eventKey={1} title="Investor">
                                            <InvestorForm />
                                        </Tab>
                                        <Tab eventKey={2} title="StartUp">
                                            <StartUpForm />
                                        </Tab>
                                </Tabs>
                            </div>
                     </div>
                </div>
            </div>
                </div>
        )
    }
}


ReactDOM.render(<ProfileNewPage />,document.getElementById('react-app'));