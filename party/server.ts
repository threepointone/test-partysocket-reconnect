import type * as Party from "partykit/server";

export default class Server implements Party.Server {
  constructor(readonly room: Party.Room) {}

  onMessage(message: string, sender: Party.Connection) {
    if (typeof message === "string") {
      sender.send(`received: ${message}`);
    }
  }
}

Server satisfies Party.Worker;
