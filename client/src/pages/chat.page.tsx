import { ChatBubble } from "@/components/ui/chatBubble.component";
import { useFetch } from "@/hooks/useFetch.hook";
import { getMessages } from "@/services/chat.service";
import { ChatMessage } from "@/types/chat.type";
import { Pagination } from "@/types/http.type";

export const ChatPage = () => {
  const { data, isError, isLoading } = useFetch<{
    data: Pagination<ChatMessage[]>;
  }>(getMessages(1));

  return (
    <div className="relative scroll-bar flex flex-col-reverse w-full p-3 md:w-6/12 lg:w-5/12 mx-auto  h-[calc(100vh_-_75px)] overflow-x-auto bg-base-200 shadow-lg">
      <div className="absolute top-10 w-full left-0 ">
        {isError && (
          <div className="text-center">
            <span className="badge badge-error  p-4 ">
              Failed to load messages :(
            </span>
          </div>
        )}
        {isLoading && (
          <div className="text-center my-1">
            <span className="badge  p-4 ">Loading messages ...</span>
          </div>
        )}
        {data?.data.total == 0 && (
          <div className="text-center">
            <span className="badge  p-4 ">No messages found !</span>
          </div>
        )}
      </div>
      {data?.data.results.map((item) => {
        return (
          <ChatBubble
            key={item.id}
            username={item.user.username}
            createdAt={item.createdAt}
            message={item.message}
            sender={item.sender}
          />
        );
      })}
    </div>
  );
};
