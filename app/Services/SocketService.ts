import {Socket, Server} from "socket.io";

class SocketService{
    disconnect(cliente: Socket){
        cliente.on('disconnect',()=>{
            console.log('cliente desconectado')
        })
    }
    mensaje(cliente: Socket, io:Server){
        cliente.on('message',(payload: {from:string,body:string})=>{
            console.log('Mensaje recibido',payload)
            io.emit('messages-news',payload)
        })
    }
}

export default new SocketService();
