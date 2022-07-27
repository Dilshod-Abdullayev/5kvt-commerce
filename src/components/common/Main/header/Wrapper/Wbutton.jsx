import { Button, notification } from 'antd';
import React from 'react';


const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
        <Button type="primary" size="small" onClick={() => notification.close(key)}>
            Confirm
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
    <Button style={{marginTop:'70px'}} type="primary" onClick={openNotification}>
        Yordam bo'limi
    </Button>
);

export default Wbutton;