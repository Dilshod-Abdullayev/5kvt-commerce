import React from 'react'
import { InstagramOutlined, GithubOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';

export default function Icons() {
    const style = {
        width: '60px',
        height: '60px',
        fontSize: '30px'
    }
    return (
        <div className='Icons'>
            <InstagramOutlined style={style}/>
            <GithubOutlined style={style} />
            <FacebookOutlined style={style} />
            <YoutubeOutlined style={style} />
        </div>
    )
}
