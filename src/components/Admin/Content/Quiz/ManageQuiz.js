import { useState } from 'react';
import './ManageQuiz.scss'
import Select from 'react-select'

const options = [
    { value: 'Easy', label: 'Chocolate' },
    { value: 'Medium', label: 'Strawberry' },
    { value: 'Hard', label: 'Vanilla' },
];

const ManageQuiz = (props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('Easy');
    const [image, setImage] = useState('');

    const handleChangeFile = () => {

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
                            type="password"
                            className="form-control"
                            placeholder=''
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <label>Description</label>
                    </div>
                    <div className='my-3'>
                        <Select
                        value={type}
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
            </fieldset>
            <div className="list add=new">
            </div>
        </div>
    )
}

export default ManageQuiz