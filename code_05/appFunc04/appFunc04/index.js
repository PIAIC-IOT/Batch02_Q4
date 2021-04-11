// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     const name = (req.query.name || (req.body && req.body.name));
//     const responseMessage = name
//         ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//         : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: responseMessage
//     };
// }

const { dialogflow } = require('actions-on-google');
const express = require('express');
const { createHandler } = require('azure-function-express');
const app = dialogflow();
app.intent('Default Welcome Intent', conv => {
    // conv.close('Hello, Azure!');
    conv.add("Hello This is MicroSoft BackEnd")
});
// Put other intent handlers here.
const expressApp = express();
expressApp.post('/api/appFunc04', app);
module.exports = createHandler(expressApp);
