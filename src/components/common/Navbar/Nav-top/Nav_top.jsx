import Logo from './Logo'
import Icons from './Icons'
import './nav.css'
import { Typography, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
export default function Nav_top() {
  const { Search } = Input;
  const { Title } = Typography;
  return (
    <div className='nav__top'>
      <Logo/>
      <Title level={2}>+7 (499) 719-99-94</Title>
      <Search
        style={{ width: 400 }}
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
      />
      <Icons />
      <Button type="link" size='large' style={{ backgroundColor: '#ffd591', color: 'white', paddingLeft: 30 }} danger>
        Primary
      </Button>
      <UserOutlined />
    </div>
  )
}
