import styles from './sidebar.module.css'

const Sidebar: React.FC = () => {
    return (
        <div className={styles.sidebarRoot}>
            <div className={styles.sideBarOptions}>
                <button className={styles.sideBarTxt}>
                    Jobs Based on Radius
                </button>
                <p className={styles.sideBarTxt}>Types of Jobs</p>
                <p className={styles.sideBarTxt}>Average Salary</p>
                <p className={styles.sideBarTxt}>Skills In-Demand</p>
            </div>
        </div >
    )
}

export default Sidebar