
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react"
import { getAllUser } from "../../../services/apiServices";


const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUSer] = useState(false);
    const [listUser, setListUser] = useState([]);


    useEffect(() => {
        fetchListUser();
    }, []);

    const fetchListUser = async () => {
        let res = await getAllUser();
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className='btn-add-new'>
                    <button className='btn btn-primary'
                        onClick={() => setShowModalCreateUSer(true)}>
                        <FcPlus />
                        Add new user
                    </button>
                </div>
                <div className='table-user-container'>
                    <TableUser listUser={listUser} />
                </div>
            </div>
            <ModelCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUSer}
                fetchListUser={fetchListUser}
                
            />
        </div>
    )
}

export default ManageUser;