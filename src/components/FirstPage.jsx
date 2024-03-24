import '../index.css';
import Image from './Image';
import Stats from './Stats';

const FirstPage = ({sum}) => {
    return(
        <>
<img src="https://send.monobank.ua/img/logo_short.png" alt="monobank logo" className = 'mt-[42px] mx-auto mb-[24px]'/>
<div className =" mt-[80px] relative mb-[-60px]">
    <Image/>
</div>
<div className="font-[500] text-[14px] leading-4 text-center">
    <span>Філіпенко Маргарита</span>
</div>
<div className="font-[900] text-[22px] mb-[12px]">
    <span>На позашляховик</span>
</div>
<div className="mt-[4px] flex flex-col items-center">
<Stats sum = {sum}/>
</div>
        </>
    )
}

export default FirstPage;
    
    
    
