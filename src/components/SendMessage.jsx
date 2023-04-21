import { useState } from "react"



const SendMessage = () => {
    const [value, setValue] = useState("")

    const handleChange = (event) => {
        const { value } = event.target;
        setValue(value)
        console.log(value)
    }

    const handleSendMessage = (event) => {
        event.preventDefault();
        console.log(value)
        setValue("")
    }

    return (
        <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
            <form 
                onSubmit={handleSendMessage} 
                className="containerWrap flex px-2">
                
                <input 
                    value={value}
                    onChange={handleChange}
                    className="input w-full focus:outline-none bg-gray-100 rounded-r-none" 
                    type="text" 
                />
                <button 
                    type="submit"
                    className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
            </form>
        </div>
    )
}

export default SendMessage