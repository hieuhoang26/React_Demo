import React, { useState } from "react";
import DisplayUser from "./DisplayUser";


function HandleForm({ updateName, updateAge, submit }) {
    return (
        <>
            <form onSubmit={submit}>
                <label>Nhập tên: </label>
                <input type="text" onChange={updateName}></input>
                <br />
                <label>Nhập tuổi: </label>
                <input type="text" onChange={updateAge}></input>
                <br />
                <button type="submit">submit</button>
                <br />
            </form>
        </>
    )
}
export default HandleForm
