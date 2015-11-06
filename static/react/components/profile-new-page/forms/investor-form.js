/**
 * Created by ponty on 11/5/15.
 */
import React,{Component} from 'react';
import Select from 'react-select';
import RangeSlider from './../../reusable/range-collection/rangeSlider'
import { countries,state } from './../../../utils/country-state'

import Toggle from 'react-toggle'
require('react-toggle/style.css')

export default class InvestorForm extends Component {

    constructor(){
        super()
        this.state = {
            promiseStatus:null,
            selectedCountry:"",
            selectedState:"",
            netWorth:0,
            annualSalary:0,
            acceptedTerms:false
        }
    }

    toggle = () => {
        const acceptedTerms = this.state.acceptedTerms;
        this.setState({acceptedTerms:!acceptedTerms})
    };

    getCountrySelected = (country) => {
        this.setState({selectedCountry:country});
    };

    getStateSelected = (state) => {
        this.setState({selectedState:state});
    };

    filterState(){

    }

    getAnnualSalary = (val) =>{
        this.setState({annualSalary:val})
    }

    getNetWorth = (val) =>{
        this.setState({netWorth:val});
    }

    submitForm = () =>{
        const investor_city =  this.refs.investor_city.value;
        const investor_street =  this.refs.investor_street.value;
        const investor_zip =  this.refs.investor_zip.value;
        const investor_tel = this.refs.investor_tel.value;
        const investor_date = this.refs.investor_date.value;
        const selectedCountry =  this.state.selectedCountry;
        const selectedState = this.state.selectedState;
        const netWorth = this.state.netWorth;
        const  annualSalary = this.state.annualSalary;
        const acceptedTerms = this.state.acceptedTerms;

        if(acceptedTerms){
            const postedObject = {
                city:investor_city,
                state:selectedState,
                country:selectedCountry,
                street:investor_street,
                zip:investor_zip,
                tel:investor_tel,
                date:investor_date,
                netWorth:netWorth,
                annualSalary:annualSalary
            }

            /**
             * use axios to post data here to api
             *
             * **/
            console.log(postedObject);
        } else {
            alert("Sorry you need to accept terms and Conditions to continue")
        }
    }

     render(){
          const acceptedTerms = this.state.acceptedTerms;
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
                                 <span><input type="text" placeholder="Full Name" ref="investor_name"/></span>
                                 <span><Select
                                     name="form-field-name"
                                     options={countries}
                                     placeholder="Country..."
                                     onChange={this.getCountrySelected}
                                        /></span>
                                <span><Select
                                     name="form-field-name"
                                     options={state}
                                     placeholder="State...."
                                     onChange={this.getStateSelected}
                                        /></span>
                                  <span className="add">

                                    <input type="text" placeholder="Street" ref="investor_street"/>
                                    <span className="inline">
                                        <input type="text" className="city" placeholder="City" ref="investor_city"/>
                                        <input type="text" className="zip" placeholder="Zip" ref="investor_zip"/></span>
                                </span>

                                <span><input type="number" placeholder="000-000-000-00" ref="investor_tel"/></span>
                                <span><input type="date" ref="investor_date"/></span>

                            </div>
                        </div>

                            <span className="toggle">
                            <label>
                              <Toggle
                                defaultChecked={acceptedTerms}
                                onChange={() => this.toggle()}
                                  />
                                I agree to the <i className="blue">Terms</i> of service and <i className="blue">Investor</i> Agreement

                            </label>
                          </span>

                       </li>

                    <li>
                    <div className="range-box blue">
                      <header className="head">
                                What's your network minus your home?
                      </header>
                       <div className="body">
                        <RangeSlider onChange={this.getNetWorth}/>
                       </div>
                    </div>
                    <div className="range-box orange">
                      <header className="head">
                                What's your annual salary?
                      </header>
                       <div className="body">
                        <RangeSlider onChange={this.getAnnualSalary}/>
                       </div>
                    </div>

                    <div className="submit-button">
                    <button className="blue-button" onClick={()=>this.submitForm()}>
                        Create Investor Account
                    </button>
                    </div>

                    </li>

                </ul>
            </div>
        )
    }
}


/**
 * States => promiseStatus, selectedCountry, selectedState, netWorth, annualSalary ,acceptedTerms
 *
 * promiseStatus => 1{promiseSuccess} | 0{loading} | null {no ajax yet} | -1{promiseFailed}
 *
 *
 * functions =>
 * getCountrySelected => propsHanded to the select country component
 * getStateSelected
 * filterState
 * getAnnualSalary
 * getNetWorth
 *
 *
 * submitForm
 *
 * */