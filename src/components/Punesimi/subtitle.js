import styles from '../Punesimi/subtitle.module.css'

function Subtitle(props) {
    return (
      <div>
        <p className={`${styles.subtitle}`}>{props.name}</p>
      </div>
    );
}

export default Subtitle;