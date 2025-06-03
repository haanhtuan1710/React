
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react"
import { getAllUser } from "../../../services/apiServices";
import ModalUpdateUser from './ModalUpdateUser';


const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUSer] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUSer] = useState(false);
    const [dataUpdate, setDataUPdate] = useState({});


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

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUSer(true);
        setDataUPdate(user);
    }

    const resetUpdateData = () => {
        setDataUPdate({});
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className='btn- d-new'>
                    <button className='btn btn-primary'
                        onClick={() => setShowModalCreateUSer(true)}>
                        <FcPlus />
                        Add new user
                    </button>
                </div>
                <div className='table-user-container'>
                    <TableUser
                        listUser={listUser}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                    />
                </div>
            </div>
            <ModelCreateUser
                show={showModalCreateUser}
                setShow={setShowModalCreateUSer}
                fetchListUser={fetchListUser}

            />
            <ModalUpdateUser
                show={showModalUpdateUser}
                setShow={setShowModalUpdateUSer}
                dataUpdate={dataUpdate}
                fetchListUser={fetchListUser}
                resetUpdateData={resetUpdateData}
            />
        </div>
    )
}

export default ManageUser;