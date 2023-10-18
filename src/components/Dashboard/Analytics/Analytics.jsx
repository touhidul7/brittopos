import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const Analytics = () => {
    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 700, pv: 200, amt: 400 },
        { name: 'Page C', uv: 400, pv: 2400, amt: 2400 },
    ];
    return (
        <div>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default Analytics;