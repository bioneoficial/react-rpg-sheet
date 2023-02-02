import {useState} from "react";
import './HpSp.css';

const HpSp = (props) => {
    const [currentHp, setCurrentHp] = useState(props.hp || 100)
    const [currentSp, setCurrentSp] = useState(props.sp || 100)

    const handleHpChange = (e) => {
        const value = Number(e.target.value);
        if (!isNaN(value) && value >= 0 && value <= props.hp) {
            setCurrentHp(value);
        }else if (value < 10){
            setCurrentHp(0);
        }
    };

    const handleSpChange = (e) => {
        const value = Number(e.target.value);
        if (!isNaN(value) && value >= 0 && value <= props.sp) {
            setCurrentSp(value);
        }else if (value < 10){
            setCurrentSp(0);
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
            onChange={handleHpChange}/>
            /{props.hp}
        </span>
        <span className={"Sp"}>
            SP:
            <input
                type="text"
                inputMode="numeric"
                maxLength={3}
                value={currentSp}
                onChange={handleSpChange}/>
            /{props.sp}
        </span>
        </div>
    );
}

export default HpSp;
