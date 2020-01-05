import {Socket} from "socket.io";

class SocketService{
    disconnect(cliente: Socket){
        cliente.on('disconnect',()=>{
            console.log('cliente desconectado')
        })
    }
}

export default new SocketService();
