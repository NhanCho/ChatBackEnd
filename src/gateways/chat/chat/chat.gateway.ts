import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { WebSocketServer } from '@nestjs/websockets/decorators';

@WebSocketGateway({ cors: true })
export class ChatGateway {

  @WebSocketServer() server: any;

  handleConnection(client: any, ...args: any[]) {
    console.log(`Client Connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    console.log(`Client Disconnected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log(payload);
    this.server.emit(`message-${payload.roomID}`, payload);
    return 'Hello world!';
  }
}