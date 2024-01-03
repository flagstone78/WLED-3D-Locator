let ledData = {
    secondsToWait: 5,
    count:0,
    url:"",
    color:"ffffff",
    //UDPport:0,
    //color: new Uint8Array(0)
}

function setConfig(config){
    if(config.count) {
        ledData.count = config.count;
        //ledData.color = new Uint8Array(3*ledData.count);
    }
    if(config.url) ledData.url = config.url;
    if(config.UDPport) ledData.UDPport = config.UDPport;
    //console.log(ledData)
    turnOffLed(ledData).then(turnOnLed(50,ledData))
}

function getLEDcount(form){
    let url = form.wledurl.value;
    if(url.at(-1)!='/') url = url+'/';
    getJSON(url+"json/info")
        .then(data => setConfig({url, count:data.leds.count, UDPport:data.udpport}))
        .catch(error => console.error(error));
}

const getJSON = async url => {
    const response = await fetch(url);
    if(!response.ok) throw new Error(response.statusText);
    return response.json(); // get JSON from the response 
  }


async function turnOnLed(lednum,ledData){
    const response = await fetch(ledData.url+"json/state",{
        method:"POST",
        body: JSON.stringify({
            on: true,
            tt:0,
            seg:{
                on:true,
                i:[lednum,ledData.color],
            },
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    if(!response.ok) throw new Error(response.statusText);
    //console.log(response)
    //response.json().then(data=>console.log(data))
    return response
}

async function turnOffLed(ledData){
    const response = await fetch(ledData.url+"json/state",{
        method:"POST",
        body: JSON.stringify({
            on: true,
            tt:0,
            seg:{
                on:true,
                i:[0,ledData.count,"000000"],
            },
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    if(!response.ok) throw new Error(response.statusText);
    //console.log(response)
    //response.json().then(data=>console.log(data))
    return response
}