import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

export const connectSocket = (onMessage) => {
  const client = new Client({
    webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
    onConnect: () => {
      client.subscribe("/topic/transaction-status", (msg) => {
        onMessage(JSON.parse(msg.body));
      });
    }
  });

  client.activate();
};
