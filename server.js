const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`api gateway listen on port: ${PORT}`)
})


