

const Message = ({ ...message }) => {


    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src="" />
                    </div>
                </div>
                <div className="chat-header">
                    {message.name}
                </div>
                <div className="chat-bubble">{message.text}</div>
                <div className="chat-footer opacity-50">
                    Delivered
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