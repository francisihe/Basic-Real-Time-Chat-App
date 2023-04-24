import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../contexts/AuthContext";

const SendMessage = () => {
    const [value, setValue] = useState("")
    const { currentUser } = UserAuth();

    const handleChange = (event) => {
        const { value } = event.target;
        setValue(value)
    }

    const handleSendMessage = async (event) => {
        event.preventDefault();

        //Import Current User
        const { uid, displayName, photoURL } = currentUser;

        // Prevent Sending of Message if form is empty or contains only space
        if (value.trim() === "") {
            alert('Enter a text');
            return;
        }

        //This creates a new document in the database for every message sent via the input form
        try {
            await addDoc(collection(db, "messages"), {
                name: displayName,
                text: value,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            });
        } catch (error) {
            console.log(error)
        }

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