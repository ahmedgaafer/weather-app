const KEY = '2e0151e5466a45649d1105746201312';

export function getIP(){
    return fetch('https://www.cloudflare.com/cdn-cgi/trace')
    .then(res => res.text())
    .then(data => {
        let IP = data.split('\n')[2].split('=')[1];
        return IP;
    });
}

export async function getWeatherData(IP){
 return fetch(`http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${IP}&days=5`)
 .then(res => res.json())
 .then(data => data)
}

