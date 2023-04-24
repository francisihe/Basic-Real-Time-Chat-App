import { useEffect, useRef, useState } from "react";
import Message from "./Message"
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";

const ChatBox = () => {
    const [messages, setMessages] = useState([])
    const messageEndRef = useRef();

    //Function to enable the messageEndRef scroll to bottom (into view)
    const scrollToBottom = () => {
        messageEndRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    // To enable the function scrollToBottom run on every message change
    useEffect(() => {
        scrollToBottom()
    }, [messages])

    // Test data previously utilized, now replaced with data from database below
    // const messages = [
    //     {
    //         id: 1,
    //         text: "Hello Francis!",
    //         name: "Jonathan"
    //     },
    //     {
    //         id: 2,
    //         text: "What's up bro?",
    //         name: "Eudora"
    //     }
    // ]

    // Read Data from Firestore: This listens to multiple documents in collection
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });

            setMessages(messages)
        });

        return () => unsubscribe;
    }, [])

    return (
        <div
            className="pb-44 pt-20 containerWrap px-3">
            {messages.map(message => (
                <Message
                    key={message.id}
                    {...message}
                />

            ))}

            {/* This div uses React's useRef to perform an action specified in the function within it without re-rendering */}
            <div ref={messageEndRef}></div>
        </div>
    )
}

export default ChatBox