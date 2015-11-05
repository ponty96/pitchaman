/**
 * Created by ponty on 11/5/15.
 */
import React,{Component} from 'react';
import Select from 'react-select';
import RangeSlider from './../../reusable/range-collection/rangeSlider'
const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

import Toggle from 'react-toggle'
require('react-toggle/style.css')

export default class StartUpForm extends Component {

    constructor(){
        super()
        this.state = {toggled:false}
    }

    toggle = () => {
        const toggled = this.state.toggled;
        this.setState({toggled:!toggled})
    }
     render(){
          const toggled = this.state.toggled;
        return (
            <div>
                <ul className="form-segment">

                       <li>
                        <div className="input-body">
                            <div className="labels">
                                 <span>Name</span>
                                 <span>Country</span>
                                 <span>State</span>
                                 <span className="add">Address</span>
                                 <span>Phone</span>
                                 <span>Birth Date</span>


                            </div>
                            <div className="inputs">
                                 <span><input type="text" placeholder="StartUp Name"/></span>
                                 <span><Select
                                     name="form-field-name"
                                     options={options}
                                     placeholder="Country..."
                                        /></span>
                                <span><Select
                                     name="form-field-name"
                                     options={options}
                                     placeholder="State...."
                                        /></span>
                                  <span className="add">
                                    <input type="text" placeholder="Street"/>
                                    <span className="inline">
                                        <input type="text" className="city" placeholder="City"/>
                                        <input type="text" className="zip" placeholder="Zip"/></span>
                                </span>

                                <span><input type="number" placeholder="000-000-000-00"/></span>
                                <span><input type="date"/></span>

                            </div>
                        </div>

                            <span className="toggle">
                            <label>
                              <Toggle
                                defaultChecked={toggled}
                                onChange={() => this.toggle()}
                                  />
                                I agree to the <i className="blue">Terms</i> of service and <i className="blue">Startup</i> Agreement

                            </label>
                          </span>

                       </li>

                    <li>
                    <div className="range-box blue">
                      <header className="head">
                                What's your Startup's current valuation?
                      </header>
                       <div className="body">
                        <RangeSlider />
                       </div>
                    </div>
                    <div className="range-box orange">
                      <header className="head">
                                What's your Startup's annual earning?
                      </header>
                       <div className="body">
                        <RangeSlider />
                       </div>
                    </div>

                    <div className="submit-button">
                    <button className="blue-button">
                        Create Startup Account
                    </button>
                    </div>

                    </li>

                </ul>
            </div>
        )
    }
}