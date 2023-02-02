import {useState} from "react";
import './HpSp.css';

const HpSp = (props) => {
    const [currentHp, setCurrentHp] = useState(props.hp || 100)
    const [currentSp, setCurrentSp] = useState(props.sp || 100)

    const handleChange = (e, type) => {
        const value = Number(e.target.value);
        const setCurrentValue = type === 'hp' ? setCurrentHp : setCurrentSp;

        if (!isNaN(value) && value >= 0 && value <= props[type]) {
            setCurrentValue(value);
        }else if (value < 10){ // if the value is less than 10, it will be considered a single digit number and will be set to 0
            setCurrentValue(0);
        }
    };

    return (
        <div className={"Wrapper"}>
        <span className={"Hp"}>
            HP:
            <input
            type="text"
            inputMode="numeric"
            maxLength={3}
            value={currentHp}
            onChange={(e)=> handleChange(e,'hp' )}/>
            /{props.hp}
        </span>
        <span className={"Sp"}>
            SP:
            <input
                type="text"
                inputMode="numeric"
                maxLength={3}
                value={currentSp}
                onChange={(e)=> handleChange(e,'sp' )}/>
            /{props.sp}
        </span>
        </div>
    );
}

export default HpSp;
