import { ChatHeader } from "@/components/custom/chat-header";
import { InputBar } from "@/components/custom/input-bar";
import { MessageList } from "@/components/custom/message-list";

export default function Page() {
  return (
    <div className="flex flex-col min-h-full">
      <ChatHeader />
      <MessageList />
      <InputBar />
    </div>
  );
}
