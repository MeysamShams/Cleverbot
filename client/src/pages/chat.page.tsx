import { ChatBubble } from "@/components/ui/chatBubble.component";
import { Loading } from "@/components/ui/loading.component";
import { AuthContext } from "@/context/auth.context";
import { useFetch } from "@/hooks/useFetch.hook";
import { useSend } from "@/hooks/useSend.hook";
import { getMessages, sendMessage } from "@/services/chat.service";
import { ChatMessage, ChatResponse } from "@/types/chat.type";
import { Pagination } from "@/types/http.type";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { Send } from "react-feather";

export const ChatPage = () => {
  const { data, isError, isLoading } = useFetch<{
    data: Pagination<ChatMessage[]>;
  }>(getMessages(1));

  const authCtx=useContext(AuthContext)

  const message=useSend<{data:ChatResponse}>(sendMessage)

  const [chats,setChats]=useState<ChatMessage[]|undefined>()

  useEffect(()=>{
    setChats(data?.data.results)
    
  },[data])

  useEffect(()=>{
    const reply=message.data?.data.response
    if(reply){
        removeLastMessage()
        setNewMessage(reply,"AI")
    }
  },[message.data?.data])

  useEffect(()=>{
    if(message.isError){        
        removeLastMessage()
    }
  },[message.isError])

  const formik=useFormik({
    initialValues:{
        message:""
    },
    onSubmit:(values)=>{
        message.sendData(values.message)
        setNewMessage(values.message,"user")
        formik.resetForm()
        setNewMessage('...',"AI",true)
    }
  })

  const removeLastMessage=()=>setChats(prev=>prev?.slice(1))

  const setNewMessage=(message:string,sender:"AI"|"user",isLoading?:boolean)=>setChats(prev=>{

  const prevValues= prev? prev : [];
  return [{
    id:Math.random()*10000,
    createdAt:new Date().toISOString(),
    message,
    sender,
    userId:authCtx.userInfo?.userId||"",
    isLoading,
    user:{
        username:authCtx.userInfo?.username||""
    }
 
  },...prevValues]
  })
  
  return (
    <>    
    <div className="relative pb-14 md:pb-5 scroll-bar flex flex-col-reverse w-full p-3  mx-auto  h-[calc(100vh_-_135px)] overflow-x-auto">
      <div className="fixed top-24 w-full left-0 z-10 ">
        {isError && (
          <div className="text-center">
            <span className="badge badge-error  p-4 ">
              Failed to load messages :(
            </span>
          </div>
        )}
        {isLoading && (
          <div className="text-center my-1">
            <span className="badge  p-4 bg-opacity-80 ">Loading messages ...</span>
          </div>
        )}
        {chats?.length == 0 && (
          <div className="text-center">
            <span className="badge  p-4 bg-opacity-80 ">No messages found !</span>
          </div>
        )}
      </div>
      {chats?.map((item) => {
        return (
          <ChatBubble
            key={item.id}
            username={item.user.username}
            createdAt={item.createdAt}
            message={item.message}
            sender={item.sender}
            isLoading={item.isLoading}
          />
        );
      })}

    </div>
      <form onSubmit={formik.handleSubmit} className="fixed bottom-0 w-full left-0 mt-1 right-0 mx-auto  ">
            <div className="relative">
            <input type="text" name="message" autoComplete="off" value={formik.values.message} onChange={formik.handleChange} className="input input-lg w-full rounded-none filter backdrop-blur bg-base-200/60 bg-base-200 text-sm shadow focus:outline-0" placeholder="Your Message ..."/>
            <button disabled={formik.values.message.length==0 || message.isLoading } className="btn bg-base-200 text-primary btn-sm btn-ghost disabled:bg-transparent hover:bg-transparent absolute right-3 top-5" type="submit">
                <Send/>
            </button>
            </div>
      </form>
    </>
  );
};
