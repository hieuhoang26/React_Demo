import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../../css/ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import axios from 'axios';
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/ApiService'


function ModalCreateUser(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewimage, setPreviewImage] = useState("");

    const ResetData = () => {
        setEmail("")
        setPassword("")
        setUserName("")
        setImage("")
        setPreviewImage("")
        setRole("USER")
    }
    const handleClose = () => {
        // Call both handleClose and ResetData
        props.handleClose();
        ResetData();
    }

    const HandleImageEvent = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]))
            setImage(event.target.files[0])
        }
        else setPreviewImage("")

    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const HandleSubmitCreateUser = async () => {
        // validate
        const isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            toast.error('Invalid Email')
            return;
        }
        if (!password) {
            toast.error('Invalid Password')
            return
        }
        // submit 
        let res = await postCreateNewUser(email, password, username, role, image)
        // let res = await axios.post('http://localhost:8081/api/v1/participant', form)
        console.log(res)
        if (res && res.EC === 0) {
            toast.success(res.EM)
            handleClose()
        }
        if (res && res.EC !== 0) {
            toast.error(res.EM)
            handleClose()
        }
    }
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal
                show={props.show}
                onHide={handleClose}
                size='xl'
                backdrop='static' // ấn vào mọi vị trí bên ngoài không bị tắt
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">UserName</label>
                            <input type="text" className="form-control" value={username} onChange={(e) => { setUserName(e.target.value) }} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">State</label>
                            <select className="form-select" onChange={(e) => { setRole(e.target.value) }}>
                                <option selected value="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <FcPlus />
                                Upload File Image</label>
                            <input type='file' hidden id='labelUpload' onChange={(e) => { HandleImageEvent(e) }} />
                            {/* sử dụng htmlFor + id --> nhận biết đúng định dạng input */}
                        </div>
                        <div className='col-md-12 img-preview '>
                            {previewimage
                                ? <img src={previewimage} />
                                : <span>Preview Image</span>
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { HandleSubmitCreateUser() }}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalCreateUser;