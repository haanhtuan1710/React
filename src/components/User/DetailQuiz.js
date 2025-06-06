import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getDataQuiz } from "../../services/apiServices";
const DetailQuiz = () => {
    const quizId = params.id;
    const params = useParams();

    useEffect(()=>{
        fetchQuestions();
    },[quizId]);

    const fetchQuestions = async()=>{
        let res = await getDataQuiz(quizId);
    }
    return (
        <div>
            DetailQuiz
        </div>

    )

}
export default DetailQuiz