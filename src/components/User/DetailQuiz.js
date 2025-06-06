import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import _ from 'lodash';
import './DetailQuiz.scss'

const DetailQuiz = () => {

    const location = useLocation();
    const params = useParams();
    const quizId = params.id;


    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `id` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of items
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null;
                    value.forEach((index, item) => {
                        if (index === 0) {
                            questionDescription = item.questionDescription;
                            image = item.image;
                        }
                        answers.push(item.answers);
                    })
                    return { questionId: key, answers, questionDescription, image }
                }
                )
                .value();
        }
    }
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz{quizId}:{location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <div className="question">
                        Question1: a?
                    </div>
                    <div className="answer">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-primary">Prev</button>
                    <button className="btn btn-secondary">Next</button>
                </div>

            </div>
            <div className="right-content">
                count down
            </div>
        </div>

    )

}
export default DetailQuiz