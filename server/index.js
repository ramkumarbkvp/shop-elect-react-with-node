const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/contacts', async (req, response) => {
    try{
        const options = {
            uri : 'https://books.zoho.com/api/v3/contacts?organization_id=649249007',
            method : 'GET',
            headers: { 
                'Authorization': 'db36e02a50b57e081efe533a8a0f834b',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }
        request(options, function(error, res, body){
            if (error) {
                console.log('error', error);
            }
            if (body) {
                response.send(body);
            }
        });
    } catch (err) {
        console.log('err', err);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
