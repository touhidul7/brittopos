/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { CartesianGrid, XAxis, YAxis, BarChart, Tooltip, Legend, Bar } from 'recharts';
const OrderAnalytic = () => {
    const orderData = useSelector((state) => state.posCart.payment)
    return (
        <div>
            <BarChart width={1000} height={250} data={orderData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalQty" fill="#F62947" />
                <Bar dataKey="totalPrice" fill="#6571FF" />
            </BarChart>
        </div>
    );
};

export default OrderAnalytic;