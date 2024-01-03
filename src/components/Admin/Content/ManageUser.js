import ModalCreateUser from "./ModalCreateUser"
import { FcPlus } from 'react-icons/fc'
import { useState } from "react";

const ManageUser = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="manage-user-container">
                <div className="title">
                    Manage User
                </div>
                <div className="user-content">
                    <div className="btn-add-new" onClick={handleShow}>
                        <button className="btn btn-primary"><FcPlus /> Add new user</button>
                    </div>
                    <div className="table-user-container">
                        Table User
                    </div>
                    <ModalCreateUser show={show} handleShow={handleShow} handleClose={handleClose} />
                </div>
            </div>

        </>
    )
}
export default ManageUser