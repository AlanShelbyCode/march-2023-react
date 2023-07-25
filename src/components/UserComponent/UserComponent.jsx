import styles from "./UserComponent.module.scss";

const UserComponent = (props) => {
    const {name,userName,nickName, element} = props;
    return(
        <div className={styles.container}>
            <h6>{name}</h6>
            <h6>{userName}</h6>
            <h6>{nickName}</h6>
            {element}
        </div>
    )
}

export default UserComponent;