import { useState } from 'react';
import './ManageQuiz.scss'
import Select from 'react-select'
import { postCreateNewQuiz } from '../../../../services/apiServices';
import { toast } from 'react-toastify';

const options = [
    { value: 'Easy', label: 'Easy' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Hard', label: 'Hard' },
];

const ManageQuiz = (props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');

    const handleChangeFile = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {

            setImage(event.target.files[0])
        }
    }

    const handleSubmitQuiz = async () => {
        if (!name || !description) {
            toast.error('Dien day du vao he. he.')
            return;
        }

        let res = await postCreateNewQuiz(description, name, type?.value, image);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            setName('');
            setDescription('');
            setType('');
            setImage(null);
        } else {
            toast.error(res.EM)
        }
    }

    return (
        <div className="quiz-container">
            <div className="title">
                ManageQuiz
            </div>
            <hr />
            <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new quiz:</legend>
                <div className="add-new">
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=''
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <label>Name</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            placeholder=''
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <label>Description</label>
                    </div>
                    <div className='my-3'>
                        <Select
                            defaultValue={type}
                            onChange={setType}
                            options={options}
                            placeholder='Quiz type..'
                        />
                    </div>
                    <div className='more-actions form-group'>
                        <label className='mb-1'>Upload image</label>
                        <input
                            type='file'
                            className='form-control'
                            onChange={(event) => handleChangeFile(event)}
                        />

                    </div>
                </div>
                <div className='mt-3'>
                    <button
                        className='btn btn-warning'
                        onClick={() => handleSubmitQuiz()}
                    >
                        Save
                    </button>
                </div>
            </fieldset>
            <div className="list add=new">
            </div>
        </div>
    )
}

export default ManageQuiz