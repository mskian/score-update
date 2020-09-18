const fetch = require('node-fetch');
require('dotenv').config();

function LiveMessage(hello) {
    if (process.env.APIURL) {
        var url = process.env.APIURL
        var data = {
            chat_id: process.env.TELEGRAM_CHATID,
            parse_mode: 'html',
            text: hello
        };
        fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((response) => {
                if (response.status === 200) {
                    console.log('Notification Send via Bot');
                } else {
                    console.log('Failed to send');
                }
            })
            .catch(error => {
                if (!error.response) {
                    console.log('API URL is Missing');
                } else {
                    console.log(error);
                }
            });
    } else {
        console.log('ENV Error: API URL and CHAT ID is Missing');
    }
}

var url = process.env.MATCHURL;

async function fetchscore() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.livescore.score);
        LiveMessage(data.livescore.score);
    } catch (exception) {
        console.log('Connection Lost');
    }
}
fetchscore();