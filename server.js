const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();

// definimos el purto principal de nuestra api por defecto el 3000
const PORT = process.env.PORT || 3000;

// creamos el proxy que maneja la seccion tienda hacia el puerto 3001
app.use('/tienda',createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: {'^/tienda': ''}
}));

// creamos el proxy que maneja la seccion registros hacia el puerto 3002
app.use('/registros',createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
    pathRewrite: {'^/registros': ''}
}));

// inciamos la escucha de la api por el puerto 3000
app.listen(PORT, () => {
    console.log(`api gateway listen on port: ${PORT}`)
})


