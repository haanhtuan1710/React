import { useState } from 'react';
import Select from 'react-select';
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs";
import './Questions.scss'
import { RiImageAddFill } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash'

const Questions = () => {
    const options = [
        { value: 'EASY', label: 'EASY' },
        { value: 'MEDIUM', label: 'MEDIUM' },
        { value: 'HARD', label: 'HARD' },
    ];
    const [selectedQuiz, setSelectedQuiz] = useState({})
    const [questions, setQuestions] = useState([
        {
            id: uuidv4(),
            description: 'question1',
            imageFile: '',
            imageName: '',
            answers: [
                {
                    id: uuidv4(),
                    description: 'answer1',
                    isCorrect: false
                }
            ]
        }
    ]);

    const handleAddRemoveQuestion = (type, id) => {
        if (type === 'ADD') {
            const newQuestion =
            {
                id: uuidv4(),
                description: 'question1',
                imageFile: '',
                imageName: '',
                answers: [
                    {
                        id: uuidv4(),
                        description: '',
                        isCorrect: false
                    }
                ]
            }

            setQuestions([...questions, newQuestion])
        }
        if (type === 'REMOVE') {
            let questionClone = _.cloneDeep(questions);
            questionClone = questionClone.filter(item => item.id !== id);
            setQuestions(questionClone)
        }
    }

    const handleAddRemoveAnswer = (type, questionId, answerId) => {
         let questionsClone = _.cloneDeep(questions);
        if (type === 'ADD') {
            const newAnwser =
            {
                id: uuidv4(),
                description: '',
                isCorrect: false
            };
            let index = questionsClone.findIndex(item => item.id === questionId);
            questionsClone[index].answers.push(newAnwser);
            setQuestions(questionsClone);

        }
        if (type === 'REMOVE') {
            let index = questionsClone.findIndex(item => item.id === questionId);
            questionsClone[index].answers = questionsClone[index].answers.filter(item => item.id !== answerId);
            setQuestions(questionsClone);
        }
    }

    return (
        <div className="questions-container">
            <div className="title">
                Manage Questions
            </div>
            <hr />
            <div className="add-new-question">
                <div className='col-6 form group'>
                    <label className='mb-2'>Select Quiz</label>
                    <Select
                        defaultValue={selectedQuiz}
                        onChange={setSelectedQuiz}
                        options={options}
                    />
                </div>
            </div>
            <div className='mt-3 mb-2'>
                ADD questions :
            </div>
            {
                questions && questions.length > 0
                && questions.map((question, index) => {
                    return (
                        <div key={question.id} className='q-main mb-4'>
                            <div className='questions-content'>
                                <div class="form-floating description">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="name@example.com"
                                        value={question.description}
                                    />
                                    <label> Question {index + 1} 's description</label>
                                </div>
                                <div className='group-upload'>
                                    <label >
                                        <RiImageAddFill className='label-up' />
                                    </label>
                                    <input type={'file'} hidden />
                                    <span >MyImage.png</span>
                                </div>
                                <div className='btn-add'>
                                    <span onClick={() => handleAddRemoveQuestion('ADD', '')} >
                                        <BsFillPatchPlusFill className='icon-add' />
                                    </span>
                                    {
                                        questions.length > 1 &&

                                        <span onClick={() => handleAddRemoveQuestion('REMOVE', question.id)}>
                                            <BsFillPatchMinusFill className='icon-remove' />
                                        </span>
                                    }
                                </div>
                            </div>
                            {
                                question.answers && question.answers.length > 0
                                && question.answers.map((answer, index) => {
                                    return (
                                        <div key={answer.id} className='answers-content'>
                                            <input
                                                className="form-check-input iscorrect"
                                                type="checkbox"
                                                value=""
                                            />
                                            <div class="form-floating answer-name">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="name@example.com"
                                                    value={answer.description}
                                                />
                                                <label>Answer {index + 1}</label>
                                            </div>
                                            <div className='btn-group'>
                                                <span onClick={() => handleAddRemoveAnswer('ADD', question.id)} >
                                                    <BsFillPatchPlusFill className='icon-add' />
                                                </span>
                                                {question.answers.length > 1 &&
                                                    <span onClick={() => handleAddRemoveAnswer('REMOVE', question.id, answer.id)}>
                                                        <BsFillPatchMinusFill className='icon-remove' />
                                                    </span>
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    )
                })
            }
        </div>
    )
}
export default Questions