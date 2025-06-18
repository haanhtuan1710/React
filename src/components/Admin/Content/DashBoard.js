import './DashBoard.scss';
import { BarChart, CartesianGrid, YAxis, XAxis, ResponsiveContainer, Tooltip, Legend, Bar } from 'recharts';

const DashBoard = (props) => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ]

    return (
        <div className="dashboard-container">
            <div className='title'>
                DashBoard
            </div>


            <div className='content'>
                <div className='c-left'>
                    <div className='child'>Total User</div>
                    <div className='child'>Total quizzes</div>
                    <div className='child'>Total answerId</div>
                    <div className='child'>Total question className='child'</div>
                </div>
                <div className='c-right'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>

        </div>
    )
}

export default DashBoard;