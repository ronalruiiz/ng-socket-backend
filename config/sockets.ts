import { Socket  } from 'socket.io';

export class SocketMethod {
    static desconectar(cliente: Socket){
        cliente.on('disconnect',()=>{
            console.log('cliente desconectado');
        })
    }
}