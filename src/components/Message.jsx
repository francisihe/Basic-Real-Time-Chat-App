import { UserAuth } from "../contexts/AuthContext";


const Message = ({ ...message }) => {

  const { currentUser } = UserAuth();
  const messageDate = (new Date(message.createdAt.toDate()).toLocaleDateString())

  return (
    <div>
      <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
        </div>
        <div className="chat-header">
          {/* {message.name} //This was with the test data, replaced with the name from Google auth */}
          {message.name}
        </div>
        <div className="chat-bubble">{message.text}</div>

        <div className="chat-footer">
          <span className="chat-footer opacity-50 pr-2">
            Delivered
          </span>
          <span className="chat-footer opacity-50 pr-2">
            {messageDate}
          </span>

        </div>
      </div>

    </div>
  )
}

export default Message;


/*

```
function Hello({ name }) {
  return <div>Hello {name}</div>;
  // 'name' is missing in props validation
}


interface Props {
  age: number
}
function Hello({ name }: Props) {
  return <div>Hello {name}</div>;
  // 'name' type is missing in props validation
}


function Hello({ name }) {
  return <div>Hello {name}</div>;
}
Hello.propTypes = {
  name: PropTypes.string.isRequired
}
```




*/