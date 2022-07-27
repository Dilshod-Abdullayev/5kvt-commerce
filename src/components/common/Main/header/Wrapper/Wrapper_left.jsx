import { Carousel } from 'antd';
import React from 'react';
import './wrapper.css'
import Wbutton from "./Wbutton";
export default function Wrapper__left(){
    return(
    <div>
        <Carousel className='carousel' style={{width: '600px'}}>
            <div>
                <h1>Сильнее
                    Снегопада</h1>
                <p>Большой выбор снегоуборочных
                    машин. Качественные устройства
                    для любого бюджета</p>

            </div>
            <div>
                <h1>Сильнее
                    Снегопада2</h1>
                <p>Большой выбор снегоуборочных
                    машин. Качественные устройства
                    для любого бюджета2222222</p>

            </div>
            <div>
                <h1>Сильнее
                    Снегопада2</h1>
                <p>Большой выбор снегоуборочных
                    машин. Качественные устройства
                    для любого бюджета33</p>
            </div>
            <div>
                <h1>Сильнее
                    Снегопада2</h1>
                <p>Большой выбор снегоуборочных
                    машин. Качественные устройства
                    для любого бюджета33</p>
            </div>

        </Carousel>
        <Wbutton/>
    </div>
    )}