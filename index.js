// Multilingual Greeting Function For Demo Purposes
const moment = require('moment');

const greeting = {
    "en": "Hello",
    "fr": "Bonjour",
    "hi": "Namaste",
    "es": "Hola",
    "pt": "Ola",
    "ur": "Assalammo Aleikum",
    "it": "Ciao",
    "de": "Hallo"
}

exports.handler = async (event) => {
    let name = event.pathParameters.name;   // Get the user's name passed in via path params
    let { lang, ...info } = event.queryStringParameters;    // Destructure out language key and anything 
                                                            // else as info from query params
    let message = `${greeting[lang] ? greeting[lang] : greeting["en"]} ${name}`;
    let response = {
        message: message,
        info: info,
        timestamp: moment().unix()
    }

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }

}                                                          



    