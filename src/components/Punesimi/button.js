import styles from '../Punesimi/button.module.css'

const  Button =(props) =>{
  const {href, name} =(props)

  return (
    <div className={styles.pages_button}>
      <a href={href} target="_blank">{name}</a>
    </div>
  );
}

export default Button;