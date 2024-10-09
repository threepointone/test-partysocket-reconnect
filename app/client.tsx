import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { usePartySocket } from "partysocket/react";

function App() {
  const socket = usePartySocket({
    party: "main",
    room: "my-room",
    onMessage: (message) => {
      console.log(message.data);
    },
    onOpen: () => {
      console.log("open");
    },
    onClose: ({ reason, code }) => {
      console.log("closed", reason, code);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
  useEffect(() => {
    const interval = setInterval(() => {
      socket.send("hello");
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h1>Hello World</h1>;
}

const root = createRoot(document.getElementById("app")!);

root.render(<App />);
