import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';

const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUSer] = useState(false);

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
                    <TableUser />

                </div>
            </div>
            <ModelCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUSer}
            />
        </div>
    )
}

export default ManageUser;