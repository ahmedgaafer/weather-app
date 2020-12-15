import './assets/css/Nav.css'

export default function Footer (props){

    return(
        <div className="footer nav-style">
            <a  target="_blank" href="https://www.weatherapi.com/" title="Free Weather API"><img className="footer-img" src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0" /></a>
            <div className="ret">Icons made by <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
}
