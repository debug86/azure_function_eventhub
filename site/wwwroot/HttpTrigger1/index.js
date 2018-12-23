module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var name = '';

    if (req.query.name || (req.body && req.body.name)) {
        name = req.query.name;
        context.log('Name received: ', req.query.name);
        
        //TEST
        var timestamp = new Date().toISOString();
        context.log('Event created at: ', timestamp);
        context.log('Name for event: ', name);
        context.bindings.outputEventHubMessage = {"name" : name, "timestamp" : timestamp};
        context.done;
        
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }


};