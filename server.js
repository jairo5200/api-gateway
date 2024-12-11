const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/tienda',createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: {'^/tienda': ''}
}));

app.use('/registros',createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
    pathRewrite: {'^/registros': ''}
}));


app.listen(PORT, () => {
    console.log(`api gateway listen on port: ${PORT}`)
})


