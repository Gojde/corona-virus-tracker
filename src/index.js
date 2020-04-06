import { CountUp } from 'countup.js'

async function getData(){
    try{
        const result = await fetch('https://covid19.mathdro.id/api');
        const data = await result.json();

        return [data.confirmed.value, data.recovered.value, data.deaths.value];
    } catch(error){
        console.log(error);
    }
    
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let confirmed, recovered, deaths;
getData().then(data => {
    confirmed = data[0];
    recovered = data[1];
    deaths = data[2];

    const confirmedCountUp = new CountUp(document.querySelector('.cassesLabel'), confirmed);
    const deathsCountUp = new CountUp(document.querySelector('.deathsLabel'), deaths);
    const recoveredCountUp = new CountUp(document.querySelector('.recoveredLabel'), recovered);


    if (!confirmedCountUp.error && !deathsCountUp.error && !recoveredCountUp.error) {
        confirmedCountUp.start();
        deathsCountUp.start();
        recoveredCountUp.start();
    } else {
        console.error(confirmedCountUp.error);
        console.error(deathsCountUp.error);
        console.error(recoveredCountUp.error);
    }
});





