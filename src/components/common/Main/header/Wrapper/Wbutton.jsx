import { Button, notification } from 'antd';
import React from 'react';
import { Link, Routes, Route} from "react-router-dom";
import New from './../../New/New';

const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
        <Button type="primary" size="small" onClick={() => notification.close(key)}>

        </Button>
    );
    notification.open({
        message: 'Assalomu alaykum',
        description:
            'Saytimizda agarda qandaydir kamchilik sezsangiz bizga yetirishni iltimos qilib qolamiz)).',
        btn,
        key

    });
};

const Wbutton = () => (
    <div>
            <Button style={{ marginTop: '70px' }} type="primary" onClick={openNotification}>
                Yordam bo'limi
            </Button>
            <Routes>
                <Route path='/new' element={<New/>}/>
            </Routes>
            <Link to='/new'>Hello start</Link>
    </div>
);

export default Wbutton; 