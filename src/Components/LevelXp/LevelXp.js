import './LevelXp.css';

const LevelXp = (props) => {
    const xpCap = 100;

    return (
        <div className={"Wrapper"}>
            <span className={"Level"}>Level: {props.level}</span>
            <span className={"Xp"}>XP: {props.xp}/{xpCap}</span>
        </div>
    );
}

export default LevelXp;
