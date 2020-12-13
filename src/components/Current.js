import './assets/css/Current.css'

export default function Current(props){
    const { data, isCelsius, location } = props;
    console.log(data)
    return(
        <div className="content night">
            <div className="current">
                <div>
                    <div className="degree">{isCelsius? data.temp_c : data.temp_f}º {isCelsius? 'C' : 'F'}</div>
                    <div className="condition spacing">{(data && data.condition)?data.condition.text:''}</div>
                </div>
                <div className="metaData">
                    <div>
                        <div className="humidity spacing">HUMIDITY</div>
                        <div>{data.humidity}%</div>
                    </div>
                    <div class="line-break"></div>
                    <div>
                        <div className="wind spacing">WIND</div>
                        <div>{data.humidity}%</div>
                    </div>
                </div>
            </div>
            <div className="location">{location.country}</div>
        </div>
    )
}