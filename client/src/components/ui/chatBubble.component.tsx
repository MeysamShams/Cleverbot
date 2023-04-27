import { getHourAndMinuteFromDate } from "@/utils/date.utils";
import { ImageAvatar, PlaceholderAvatar } from "./avatar.component";

interface ChatBubble {
  message: string;
  createdAt: string;
  username?: string;
  sender: "AI" | "user";
}
export const ChatBubble = (props: ChatBubble) => {
  const chatDirection = props.sender == "AI" ? "chat-start" : "chat-end";
  return (
    <div className={`chat ${chatDirection}`}>
      <div className="chat-image avatar">
        {props.sender == "AI" ? (
          <ImageAvatar src="/clever.png" />
        ) : (
          <PlaceholderAvatar name={props.username || "C"} />
        )}
      </div>

      <div className="chat-bubble">{props.message}</div>
      <div className="chat-footer opacity-50">
        <span className="text-xs">
          {getHourAndMinuteFromDate(props.createdAt)}
        </span>
      </div>
    </div>
  );
};
