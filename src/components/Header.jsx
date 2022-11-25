import styles from './Header.module.css'


export default function Header(){
    return(
        <div className={styles.HeaderWrapper}>
            <div >
            <div className={styles.Logo}><img src="images/youtubelogo.jpg" alt="logo" /></div>
            </div>
            <div className={styles.SurchBox}>
            <input className={styles.SurchBar} type='text'/>
            <button className={styles.surchButton}>검색</button>
            </div>
            <div>
                profiles
            </div>
        </div>
    )
}