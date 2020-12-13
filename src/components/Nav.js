import './assets/css/Nav.css';
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Nav(){
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" }

    const display = ` , ${date.toLocaleDateString(undefined, options)}`
    return(
        <div className="nav nav-style">
            <span className="logo"></span>
            <span className="title">Live Weather</span>
            <span className="bold">
                {weekday[date.getDay()]}
            </span>
            {display}
        </div>
    )
}

export default Nav;