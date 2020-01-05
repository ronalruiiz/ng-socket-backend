import express, { Application } from 'express';
import socketIO, {Socket} from 'socket.io'
import http from 'http';

import {API} from "../routes/api";
import {WEB} from "../routes/web";

import {config} from 'dotenv';
import { configMiddleware } from '../config/middleware'
import SocketService from "../app/Services/SocketService";

export default class Server {
    private static _instance: Server;
    private readonly app: Application;
    public io: socketIO.Server;
    private readonly server: any;

    private constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = socketIO(this.server);
        configMiddleware(this.app);
        this.routes();
        config();
        this.escucharSockets();
    }

    
    private routes(){
        this.app.use('/api',API);
        this.app.use(WEB);
    }

    static get instance(): Server {
        return this._instance || (this._instance = new this());
    }

    start(callback: Function) {
        this.server.listen(process.env.PORT, callback);
    }

    private escucharSockets() {
        this.io.on('connect', (cliente: Socket) => {
            console.log('cliente conectado');
            SocketService.mensaje(cliente,this.io);
            SocketService.disconnect( cliente );
        });
    }

    get application() {
        return this.app;
    }

}
