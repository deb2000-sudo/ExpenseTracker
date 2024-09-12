import Button from '../Button/Button';
import styles from './AppCard.module.css';

const AppCard=({cardTitle,money,success=true,buttonText,buttonType})=>{
    // console.log(buttonText);
    return(
        <div className={styles.appcard}>
            <h3 className={styles.cardtitle}>
                {`${cardTitle}: `}
                <span className={success?styles.success:styles.warning}>{`₹${money}`}</span>
            </h3>
            <Button style={buttonType}>{buttonText}</Button>
        </div>
    )

}

export default AppCard;