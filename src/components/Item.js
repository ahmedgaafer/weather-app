import './assets/css/forecast.css';
var weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function item(props){
    const {data, isMetric, index} = props;
    const date = new Date();

    const day = data.day;
    return(
        <div className="forecast-item">
            <div>{weekday[date.getDay() + index]}</div>
            <div><img src={day.condition.icon} alt={day.condition.text}/></div>
            <div>{isMetric? day.avgtemp_c + "C" : day.avgtemp_f + "F"}º</div>
            <div>{day.condition.text}</div>
        </div>
    )
}