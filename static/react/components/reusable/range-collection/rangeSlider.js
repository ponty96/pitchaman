/**
 * Created by ponty on 9/8/2015.
 */
import React,{Component,findDOMNode,PropTypes} from 'react';
require('./rangecollection.scss');
export default class RangeSlider extends Component {

    constructor(){
        super();
        this.state = {priceMin:""}
    }
    componentDidMount(){
        const range_all_sliders = {
            'min': [     0 ],
            '10%': [   50,  50 ],
            '50%': [  400, 100 ],
            'max': [ 1000 ]
        };

        let slider = this.refs.ran;
        noUiSlider.create(slider, {
            start: 0,
            connect: 'lower',
            tooltips: true,
            range:range_all_sliders,
            pips: {
                mode: 'count',
                values: 4,
                density: 0,
                stepped: true
	        }
        });

        let self = this;
        slider.noUiSlider.on('update', function(){
            let updateVal = slider.noUiSlider.get();
            let minPrice = updateVal;
            if(minPrice == 1000.00){
                minPrice = "1 m"
            } else {
                minPrice = Math.round(minPrice)+" k"
            }

            self.setState({priceMin:minPrice})

        })
    }


    render(){
        let priceMin =  this.state.priceMin;
        return(
            <div className="RangeCollection">

                <div className="text">
                    <span className="price">${priceMin}</span>
                </div>
                <div ref="ran" id="range">
                </div>
            </div>
        )
    }
}

RangeSlider.propTypes = {
}
