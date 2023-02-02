import './Header.css';
import artificer from '../../Assets/Images/artificer.jpeg'
import barbarian from '../../Assets/Images/barbarian.jpeg'
import bard from '../../Assets/Images/bard.jpeg'
import cleric from '../../Assets/Images/cleric.jpeg'
import druid from '../../Assets/Images/druid.jpeg'
import fighter from '../../Assets/Images/fighter.jpeg'
import monk from '../../Assets/Images/monk.jpeg'
import paladin from '../../Assets/Images/paladin.jpeg'
import ranger from '../../Assets/Images/ranger.jpeg'
import rogue from '../../Assets/Images/rogue.jpeg'
import sorcerer from '../../Assets/Images/sorcerer.jpeg'
import warlock from '../../Assets/Images/warlock.jpeg'
import wizard from '../../Assets/Images/wizard.jpeg'
import HpSp from "../HpSp/HpSp";
import LevelXp from "../LevelXp/LevelXp";
const Header = (props) =>
{
    const images = {artificer, barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard};
    const className = props.classes.charAt(0).toUpperCase() + props.classes.slice(1).toLowerCase();
    return (
        <div className={"Wrapper"}>
            <span className={"Name"}>Name: {props.name} {props.surname}</span>
            <HpSp hp={100} sp={300}></HpSp>
            <LevelXp level={1} xp={0}></LevelXp>
            <span className={"Classes"}>Class: {className} <img className={"Image"} src={images[props.classes.toLowerCase()]} alt={props.classes}/> </span>
        </div>
    )
}

export default Header;
