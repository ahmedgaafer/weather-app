import { React, Component} from 'react';
import './assets/css/WeatherCard.css';
import { getIP, getWeatherData } from './assets/js/WeatherData';
import Current from './Current';

export default class WeatherCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            IP: undefined,
            current: {},
            forecast: {},
            location: {},
            isCelsius: true,
        }
    }

    async componentDidMount(){
        const IP = await getIP();
        const Data = await getWeatherData(IP); 
        console.log(Data)
        this.setState({
            ...this.state,
            IP,
            current: Data.current,
            forecast: Data.forecast,
            location: Data.location,
        });
    }
    
    render(){

        return(
            <div className="frame">
                <Current data={this.state.current} isCelsius={this.state.isCelsius} location={this.state.location} />
                <div>b</div>
            </div>
        )
    }
}
