import React, { useState } from 'react'
import { useFirebase } from '../Context/firebase'

const List = () => {
    const firebase = useFirebase();

    const [name, setName] = useState("");
    const [isbnNumber, setIsbnNumber] = useState("");
    const [price, setPrice] = useState("");
    const [coverPic, setCoverPic] = useState("");
    const [success, setSuccess] = useState(""); // ✅ success message state

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await firebase.handelCreateNewListing(name, isbnNumber, price, coverPic);
            setSuccess("✅ Your book listing has been submitted successfully!");

            // Clear form fields
            setName("");
            setIsbnNumber("");
            setPrice("");
            setCoverPic("");
        } catch (error) {
            setSuccess("❌ Something went wrong, please try again.");
        }
    }

    return (
        <div className="register-page">
            <div className="register-box">
                <h2 className="title">Add New Book</h2>

                {/* ✅ Success / Error Message */}
                {success && (
                    <p className="mb-4 text-center text-green-400 font-semibold">
                        {success}
                    </p>
                )}

                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Book Name"
                        className="input"
                        required
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type="text"
                        placeholder="Enter ISBN Number"
                        className="input"
                        required
                        onChange={e => setIsbnNumber(e.target.value)}
                        value={isbnNumber}
                    />
                    <input
                        type="text"
                        placeholder="Enter Price"
                        className="input"
                        required
                        onChange={e => setPrice(e.target.value)}
                        value={price}
                    />

                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-gray-200">Upload Cover</label>

                        <input
                            type="file"
                            id="fileUpload"
                            className="hidden"
                            onChange={e => setCoverPic(e.target.files[0])}
                        />

                        <label
                            htmlFor="fileUpload"
                            className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-center transition"
                        >
                            Choose File
                        </label>

                        {coverPic && (
                            <p className="text-sm text-gray-400">
                                Selected: {coverPic.name}
                            </p>
                        )}
                    </div>

                    <button type="submit" className="btn">Create</button>
                </form>
            </div>
        </div>
    )
}

export default List
