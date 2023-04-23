import Message from "./Message"

const ChatBox = () => {

    const messages = [
        {
            id: 1,
            text: "Hello Francis!",
            name: "Jonathan"
        },
        {
            id: 2,
            text: "What's up bro?",
            name: "Eudora"
        }
    ]

    return (
        <div
            className="pb-44 pt-20 containerWrap px-3">
            {messages.map(message => (
                <Message
                    key={message.id}
                    {...message}
                />
            ))}
        </div>
    )
}

export default ChatBox