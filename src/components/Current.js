import './assets/css/Current.css'

//https://coolors.co/5c03fa

function getCurrentBackground(time){
    if((time >= 0 && time <= 5) || (time >= 20 && time <= 24)){ // night
        return 'night';
    }
    else if((time >= 9 && time <= 17)){
        return 'day';
    }
    else{
        return 'middle';
    }
}

export default function Current(props){
    const { data, isMetric, location } = props;
    if(!data)  return <div></div>
    const TIME = Number(data && data.last_updated?data.last_updated.split(' ')[1].split(':')[0]:0);
    const bg = getCurrentBackground(TIME);
    return(
        <div className={`content ${bg}`}>
            <div className="current">
                <div>
                    <div className="degree">{isMetric? data.temp_c+'C' : data.temp_f+'F'}º</div>
                    <div className="condition spacing">{(data && data.condition)?data.condition.text:''}</div>
                </div>
                <div className="location">{location.country}</div>
            </div>
            <div className="metaData">
                <div>
                    <div className="humidity spacing">HUMIDITY</div>
                    <div>{data.humidity}%</div>
                </div>
                <div className="line-break"></div>
                <div>
                    <div className="wind spacing">WIND</div>
                    <div>{isMetric? data.wind_kph : data.wind_mph} <span className="condition spacing">{isMetric? ' KM/H' : 'M/H'}</span></div>
                </div>
            </div>   
        </div>
    )
}