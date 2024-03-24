import React, { useState } from "react";
import '../index.css';

const SecondPage = ({ sum, setSum }) => {
    const [amount, setAmount] = useState(0);
    const [opacity, setOpacity] = useState(0.4);
    const [color, setColor] = useState('black');
    const [error, setError] = useState('');
    const [showCardInput, setShowCardInput] = useState(false);
    const [cardDataEntered, setCardDataEntered] = useState(false);
    const [cardButtonLabel, setCardButtonLabel] = useState("Оплатити карткою");
    const [cardIconVisible, setCardIconVisible] = useState(true); // Додаємо стан для відстеження видимості картки

    const sumUp = () => {
        setSum(prevSum => prevSum + parseFloat(amount));
    };

    const handleClick = () => {
        setShowCardInput(true);
        setCardButtonLabel("Або уведіть дані картки");
        setCardIconVisible(false); // Приховуємо картку при кліці на кнопку
    };

    const handleContentEditableInput = (event) => {
        const inputText = event.target.textContent;
        const filteredText = inputText.replace(/\D/g, '');
        event.target.textContent = filteredText;
        setAmount(filteredText);

        const inputValue = parseInt(filteredText);
        if (inputValue < 10) {
            setColor('#b30953');
            setOpacity(0.5);
            setError('Сума повинна бути від 10 ₴ до 29 999 ₴');
        } else {
            setColor('black');
            setOpacity(1);
            setError('');
        }
    };

    const handleCardInputChange = () => {
        // Перевірка, чи заповнені поля введення даних картки
        // Якщо так, встановити флаг, що дані введено
        // Якщо ні, флаг залишається false
        // Тут вам потрібно встановити більш докладні перевірки введених даних картки
        // Наприклад, перевірка правильності номера карти, терміну дії, CVC тощо
        setCardDataEntered(true); // Встановлення флагу в true, щоб активувати кнопку
    };

    const styles = {
        color: color,
        opacity: opacity
    };

    return (
        <>
            <div className="mb-[32px] bg-gradient-to-b from-blue-500 to-pink-500 h-[216px] w-[393px] rounded-[24px] flex justify-center items-center">
                <div className="bg-white h-[210px] w-[387px] rounded-[22px]">
                    <div className="justify-center flex font-inter font-semibold leading-4 text-base text-gray-900 pt-5 ">
                        Сума поповнення
                        <img src="https://send.monobank.ua/img/money.png" className="w-[16px] h-[16px] ml-[5px] mb-[20px]" />
                    </div>
                    <div className="money-input-container">
                        <div className="justify-center font-[700] text-[50px] text-center  flex " style={styles}>
                            <div className="money-input-contenteditable" contentEditable="true" inputMode="decimal" onInput={handleContentEditableInput}>{amount}</div>
                            <div className="money-input-trailing">&nbsp;₴</div>
                        </div>
                        <div className="mt-[12px] mb-[18px] ml-[16px] mr-[16px] font-[400] text-[12px] text-[#808080] text-center">{error}</div>
                        <div className="flex flex-row justify-center ">
                            <div className="border cursor-pointer border-solid border-gray-300 px-6 rounded-[16px] mx-2 flex flex-col justify-center items-center" onClick={() => handleClick(100)}>
                                <div className="font-[500] text-[17px] leading-6" id="oneHundred">+100&nbsp;₴</div>
                            </div>
                            <div className="border cursor-pointer border-solid border-gray-300 px-6 rounded-[16px] mx-2 min-h-[40px] flex flex-l flex-col justify-center items-center" id="fiveHundred" onClick={() => handleClick(500)}>
                                <div className="font-[500] text-[17px] leading-6" id="oneHundred">+500&nbsp;₴</div>
                            </div>
                            <div className="border cursor-pointer border-solid border-gray-300 px-6 rounded-[16px] mx-2 min-h-[40px] flex flex-l flex-col justify-center items-center" id="oneThousand" onClick={() => handleClick(1000)}>
                                <div className="font-[500] text-[17px] leading-6" id="oneHundred">+1000&nbsp;₴</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <input type="text" className="w-[340px] h-[58px] border border-solid border-gray-300 rounded-[16px] pl-[16px] pr-[16px] mb-[16px]" autoComplete="name" placeholder="Ваше ім'я (необов'язково)" />
            </div>
            <div className="">
                <input type="text" className="w-[340px] h-[58px]  border border-solid border-gray-300 rounded-[16px] pl-[16px] pr-[16px] mb-[16px]" autoComplete="comment" placeholder="Коментар (необов'язково)" />
            </div>

            <div className="bg-black w-[340px] h-[48px] mb-[16px] cursor-pointer rounded-[8px] flex items-center justify-center" onClick={() => sumUp()}>
                <img src="https://send.monobank.ua/img/mono_pay.svg" alt="mono Pay" className="h-[26px] w-[103px]" />
            </div>
            <div className="bg-black
w-[340px] h-[48px] mb-[16px] cursor-pointer rounded-[8px] flex items-center justify-center" onClick={() => sumUp()}>
<img src="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg" alt="Google Pay" className="h-[26px] w-[66px]" />
</div>

<div className="w-[340px] h-[75px]">
<div className="w-[340px] h-[1px] mt-[16px] mb-[8px] border border-solid border-gray-300 border-t-[0px]"></div>
<div className="flex flex-row justify-center p-[5px]">
    {cardIconVisible && ( // Показуємо картку тільки якщо стан cardIconVisible === true
        <img src="https://send.monobank.ua/img/card.svg" alt="card-icon" className="w-[16px] h-[26px] mr-[8px]" />
    )}
    <div className={`text-[15px] leading-6 cursor-pointer font-semibold ${showCardInput ? "text-black" : "text-red-500"}`} onClick={handleClick}>
        {showCardInput ? "або уведіть дані картки" : "Оплатити карткою"}
    </div>
</div>
</div>

{showCardInput && (
<div className="card-inputs">
    <input type="text" className="w-[340px] h-[58px] border border-solid border-gray-300 rounded-[16px] pl-[16px] pr-[16px] mb-[16px]" autoComplete="cc-number" placeholder="Номер картки" onChange={handleCardInputChange} />
    <div className="card-details">
    <input type="text" className="card-input w-[110px] h-[58px] border border-solid border-gray-300 rounded-[16px] pl-[16px] pr-[16px] mb-[16px] mr-[8px]" autoComplete="cc-exp-month" placeholder="Місяць" onChange={handleCardInputChange} />
    <input type="text" className="card-input w-[110px] h-[58px] border border-solid border-gray-300 rounded-[16px] pl-[16px] pr-[16px] mb-[16px] mr-[8px]" autoComplete="cc-exp-year" placeholder="Рік" onChange={handleCardInputChange} />
    <input type="text" className="card-input w-[110px] h-[58px] border border-solid border-gray-300 rounded-[16px] pl-[16px] pr-[16px] mb-[16px]" autoComplete="cc-csc" placeholder="CVC2" onChange={handleCardInputChange} />
</div>



    <div className={`bg-red-500 w-[340px] h-[48px] mb-[16px]  cursor-pointer rounded-[16px] flex items-center justify-center ${cardDataEntered ? "opacity-100" : "opacity-30"}`} onClick={() => sumUp()} disabled={!cardDataEntered}>
        <span className="text-white font-bold">Поповнити банку</span>
    </div>
</div>
)}
</>
)
}

export default SecondPage;
