"use client";

import { useState } from "react";

// import ChatHeader from "@/components/ChatHeader";
// import { Companion, Message } from "@prisma/client";
// import { useRouter } from "next/navigation";
// import React, { FormEvent, useState } from "react";
// import { useCompletion } from "ai/react";
// import ChatForm from "@/components/ChatForm";
// import ChatMessages from "@/components/ChatMessages";
// import { chatProps } from "@/components/ChatMessage";

// interface Props {
//   companion: Companion & {
//     messages: Message[];
//     _count: {
//       messages: number;
//     };
//   };
// }

// const ChatClient = ({ companion }: Props) => {
//   const router = useRouter();
//   const [messages, setMessages] = useState<chatProps[]>(companion.messages);

//   const { input, isLoading, handleInputChange, handleSubmit, setInput } =
//     useCompletion({
//       api: `/api/chat/${companion.id}`,
//       onFinish: (prompt, completion) => {
//         const systemMessage: chatProps = {
//           role: "system",
//           content: completion,
//         };
//         setMessages((messages) => [...messages, systemMessage]);
//         setInput("");

//         router.refresh();
//       },
//     });

//   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
//     const userMessage: chatProps = {
//       role: "user",
//       content: input,
//     };
//     setMessages((messages) => [...messages, userMessage]);
//     handleSubmit(e);
//   };

//   return (
//     <div className="flex flex-col h-full p-4 space-y-2">
//       <ChatHeader companion={companion} />
//       <ChatMessages
//         companion={companion}
//         isLoading={isLoading}
//         messages={messages}
//       />
//       <ChatForm
//         isLoading={isLoading}
//         input={input}
//         handleInputChange={handleInputChange}
//         onSubmit={onSubmit}
//       />
//     </div>
//   );
// };
const ChatClient = () => {
  const [question, setQuestion] = useState<string>("")
  const [solution, setSolution] = useState<string>("")
  const handleSubmit = () => {
    setSolution("We're making strides! Our goal is to make life multi-planetary. Mars is the next logical step. The challenges are immense, but the potential is even greater.")
  }
  return (
    <div>
      
    
      <input type="text" className="m-5 rounded-md p-5 w-full"/>
      <button type="submit" onClick={handleSubmit} className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
    <div className="font-semibold text-3xl ml-5">
    {solution}
    </div>
    
    </div>
  )
}
export default ChatClient;
