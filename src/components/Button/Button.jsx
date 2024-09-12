import styles from './Button.module.css';
console.log(styles);

const Button=({children,handleClick, style='primary',btnshadow=false,type='button'})=>{
    console.log(styles[style]);
    return(
        <button type={type} onClick={handleClick} className={`${styles.button} ${styles[style]} ${btnshadow&&styles.shadow}`}>
            {children}
        </button>
    );
}

export default Button;