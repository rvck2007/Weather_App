function printMessage(city, temperature, pression){
    console.log(" A " + city + ", la temperature est de " + (temperature - 273.15).toFixed(2)
        + "C, et la pression est de : " + pression + " hPA");
}

function printError(error){
    console.error(error.message);
}

module.exports.printMessage = printMessage;

module.exports.printError = printError;