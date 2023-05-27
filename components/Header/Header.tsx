import styles from './header.module.css'

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <p className={styles.title}>Job Nexus</p>

            <div className={styles.headerOptions}>
                <p className={styles.headerTxt}>Home</p>
                <p className={styles.headerTxt}>Search</p>
                <p className={styles.headerTxt}>Dashboard</p>
                <p className={styles.headerTxt}>Profile</p>
            </div>
        </div>
    )
}

export default Header