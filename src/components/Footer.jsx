import '../index.css'
const Footer = () => {
    return(
        <>
        <div className="text-left font-[500] text-[12px] opacity-80 text-white leading-4">
        АТ «УНІВЕРСАЛ БАНК» Ліцензія НБУ №92 від
        <br/> 20.01.1994, у держреєстрі банків №226
        </div>
<div className="flex flex-row">
    <div className="flex flex-row relative border border-solid border-white rounded-[16px] h-[40px] text-white ml-[16px] cursor-pointer items-center font-[600] text-[14px] pr-[16px] pl-[16px] mt-[8px]">
        <img src="https://send.monobank.ua/img/cup.svg" alt="Розіграш" className="w-[16px] h-[16px]"/>
        <div className="ml-[8px]">Провести розіграш</div>
    </div>
    <div className="flex flex-row relative border border-solid border-white rounded-[16px] h-[40px] text-white ml-[16px] cursor-pointer items-center font-[600] text-[14px] pr-[16px] pl-[16px] mt-[8px]">
        <img src="https://send.monobank.ua/img/gamepad.svg" alt="Віджет для стрімів" className="w-[16px] h-[16px]"/>
        <div className="ml-[8px]">Віджет для стрімів</div>
    </div>
</div>

        </>
    )
}
export default Footer;