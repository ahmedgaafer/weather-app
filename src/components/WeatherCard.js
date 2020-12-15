import { React, useContext} from 'react';
import './assets/css/WeatherCard.css';

import Current from './Current';
import Forecast from './Forecast';

import { Store } from '../App';

export default function WeatherCard (props){

    const [context] = useContext(Store);
    
    return (
        <div className="frame">
            <Current data={context.current} isMetric={context.isMetric} location={context.location} />
            <Forecast data={context.forecast} isMetric={context.isMetric} />
        </div>
    )
    
}
