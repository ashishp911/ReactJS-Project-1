const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// app.use(express.static('../public'))
app.use(express.json({limit : "1mb"}));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})

// POST method route (as we are receiving data from the server)
app.post('/api', (request, response) => {
    console.log("I got a request");
    console.log(request.body);
    response.json({
        status : "success",
        msg : "Server got your data"
    });
    console.log("Sending data back to client");
})