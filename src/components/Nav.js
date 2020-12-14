import './assets/css/Nav.css';
import { Store } from '../App';
import { useContext } from 'react';

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Nav(){
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" }

    const display = ` , ${date.toLocaleDateString(undefined, options)}`;
    const [state, setState] = useContext(Store);

    function handleClick(e){
        setState({
            ...state,
            isMetric: !e.target.checked,
        });
        
    }
    return(
        <div className="nav nav-style">
            <div>
                <span className="logo"></span>
                <span className="title">Live Weather</span>
            </div>
            <div>
                <span className="bold">
                    {weekday[date.getDay()]}
                </span>
                {display}
            </div>
            <div className="check">
                Metric
                <label className="switch">
                    <input type="checkbox" onClick={handleClick} checked={!state.isMetric}/>
                    <span className="slider round"></span>
                </label>
                Imperial
            </div>
        </div>
    )
}

export default Nav;