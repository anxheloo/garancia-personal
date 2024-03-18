import styles from '../Punesimi/title.module.css'

function Title(props) {
    return (
      <div>
        <p className={`${styles.thetitle}`}>{props.name}</p>
      </div>
    );
}

export default Title;

