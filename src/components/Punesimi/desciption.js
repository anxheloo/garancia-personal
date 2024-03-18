import styles from '../Punesimi/desc.module.css'

function Description(props) {
    const {name} = props;
    
    return (
      <div dangerouslySetInnerHTML={{__html: name}} className={`${styles.description}`}></div>
    );
}

export default Description;