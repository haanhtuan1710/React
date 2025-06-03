
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModelCreateUser from './ModelCreateUser';
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc';
import TableUser from './TableUser';
import { useEffect, useState } from "react"
import { getAllUser } from "../../../services/apiServices";
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalDeleteUser from './ModalDeleteUser';

const ManageUser = (props) => {

    const [showModalCreateUser, setShowModalCreateUSer] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUSer] = useState(false);
    const [showModalViewUser, setShowModalViewUSer] = useState(false);
    const [dataUpdate, setDataUPdate] = useState({});

    const [showModalDeleteuser, setShowModalDeleteUSer] = useState(false);
    const [dataDelete, setDataDelete] = useState({});
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

    const handleClickBtnView = (user) => {
        setShowModalViewUSer(true);
        setDataUPdate(user);
    }

    const handleClickBtnDelete = (user)=>{
        setShowModalDeleteUSer(true);
        setDataDelete(user);
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
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
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

            <ModalViewUser
                show={showModalViewUser}
                setShow={setShowModalViewUSer}
                dataUpdate={dataUpdate}
                resetUpdateData={resetUpdateData}
            />
            <ModalDeleteUser
                show={showModalDeleteuser}
                setShow={setShowModalDeleteUSer}
                dataDelete={dataDelete}
            />
        </div>
    )
}

export default ManageUser;