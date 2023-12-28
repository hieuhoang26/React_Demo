import React, { useState } from "react";
import '../../css/MyComponents.scss'
const DisplayUser = (props) => {
    const { list } = props
    const [isList, setIsList] = useState(true)

    const HandleShow = () => {
        setIsList(!isList)
    }
    return (
        <>
            <h3 onClick={HandleShow}>
                {isList ? 'Hidden List User' : 'Show List User'}
            </h3>
            {isList &&
                list.map((user, index) => {
                    return (
                        <div key={user.id} className={+user.age > 18 ? 'red' : 'green'}>
                            <p>Tên: {user.name}</p>
                            <p >tuổi: {user.age}</p>
                            <button onClick={() => { props.delete(user.id) }}>Delete</button>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}
export default DisplayUser
