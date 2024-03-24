import {useState} from 'react';
import '../index.css';

const Stats = ({sum}) => {
    return (
        <>
        <div className="font-[500] text-[15px] mt-[8px]">Терміновий збір на позашляховик для 32 бригади 405 батальйону з Куп'янського напряму!!</div>
        <div className="flex flex-row bg-white rounded-[16px] justify-center mb-[12px] mt-[12px]">
            <div className="flex flex-row pl-[20px] pr-[20px] text-left font-[500] border-r-[1px] text-[16px] mt-[12px] mb-[12px] leading-6">
                <img src="https://send.monobank.ua/img/collected.svg" className="w-[24px] h-[24px] mr-[16px] mt-[12px]"/>
                <div className="">
                    <div className="font-[400] text-[16px] text-[#808080]">Накопичено</div>
                    <div className="stats-data-value">{sum}&nbsp;₴</div>
                </div>
            </div>
            <div className="flex flex-row pl-[20px] pr-[20px] text-left font-[500] text-[16px] mt-[12px] mb-[12px] leading-6 ">
                <img src ="https://send.monobank.ua/img/target.svg" className="w-[24px] h-[24px] mr-[16px] mt-[12px]"/>
                <div className="stats-data-text-container">
                    <div className="font-[400] text-[16px] text-[#808080]">Ціль</div>
                    <div className="stats-data-value">250&nbsp;000&nbsp;₴</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Stats;