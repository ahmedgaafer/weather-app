import Item from './Item';

import './assets/css/forecast.css';

export default function Forecast(props){
    if(!props.data) return <div></div>
    const {data, isMetric} = props;
    const forecast = data.forecastday;


    return(
        <div className="forecast">
            {
                forecast.map((element, index) =>{
                    return <Item data={element} isMetric={isMetric} index={index} key={element.date}/>
                })
            }
        </div>
    )
}