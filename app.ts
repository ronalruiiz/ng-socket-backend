import Server from './server'

//Create new instance server and
const server = Server.instance;
const app = server.application;

//startAplication
server.start(() => {
    console.log(`Servidor corriendo ${process.env.PORT}`)
});
