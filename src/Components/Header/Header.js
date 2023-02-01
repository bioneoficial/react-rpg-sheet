import './Header.css';

const Header = (props) => {
    return (
        <div className={"Wrapper"}>
            <span className={"Name"}>Name: {props.name} {props.surname}</span>
            <span className={"Classes"}>Class: {props.classes}</span>
        </div>
    )
}

export default Header;
