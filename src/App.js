import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="49a523d3-3801-4507-b308-eb6f6d45ff0e"
      userName="Admin"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
