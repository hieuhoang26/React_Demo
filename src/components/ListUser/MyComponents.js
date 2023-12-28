import React, { useState } from "react";
import HandleForm from "./HandleForm";
import DisplayUser from "./DisplayUser";

function MyComponent() {
    const [listUser, setListUser] = useState(
        [
            { id: "1", name: 'hoang', age: 23 },
            { id: "2", name: 'hai', age: 11 },
            { id: "3", name: 'nam', age: 30 },
        ]
    )
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
    };

    const handleAgeChange = (e) => {
        const newAge = e.target.value;
        setAge(newAge);
    };
    const addNewUser = (e) => {
        e.preventDefault();
        const newUser = {
            id: Math.floor(Math.random() * 100) + 1,
            name: name,
            age: age
        }
        setListUser([...listUser, newUser])
        //Spread
    }
    const deleteUser = (id) => {
        const newlist = listUser.filter((user) => user.id !== id)
        setListUser(newlist)
    }

    return (
        <>
            <h1>Họ và tên: {name} - Tuổi: {age}</h1>
            <HandleForm updateName={handleNameChange} updateAge={handleAgeChange} submit={addNewUser}></HandleForm>
            <DisplayUser list={listUser} delete={deleteUser}></DisplayUser>
        </>
    )
}
export default MyComponent