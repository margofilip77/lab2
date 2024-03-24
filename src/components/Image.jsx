import '../index.css';
const Image = () => {
    return (
        <>
            <div className="relative text-center">
                <img src="https://send.monobank.ua/img/jar_bg.png" alt="jarBackground" className="w-[215px] h-[215px] mb-20" />
                <div className="absolute top-[40px] w-[42px] h-[168px] right-[125px]" style={{ zIndex: '1' }}>
                    <img src="https://send.monobank.ua/img/jar/grid.png" className="grid" />
                    <div className="absolute left-[16px] bottom-[157px] font-bold text-[10px] text-[#8e5b5b]">250&nbsp;000</div>
                    <div className="absolute left-[5px] bottom-[83px] font-bold text-[10px] text-[#8e5b5b]">125&nbsp;000</div>
                    <div className="absolute left-[8px] bottom-[8px] font-bold text-[10px] text-[#8e5b5b]">0</div>
                </div>
                <div className="absolute top-2.5 left-[35px]" style={{ zIndex: '0' }}>
                    <img className="h-[203px] w-[155px] " src="https://send.monobank.ua/img/jar/uah_33.png" />
                </div>
            </div>
        </>
    )
}
export default Image;