import React from "react"
import styles from "./CModal.module.css"

interface CModalProps {
    children: React.ReactNode
    onClose: () => void,
    title: string
}

const CModal = (props: CModalProps) => {

    return (
        <div className={styles.parentDiv}>
            <div className={styles.modalDismiss} onClick={props.onClose} />
            <div className={styles.modalView}>
                <div className={styles.modalHeader}>
                    <h3>{props.title}</h3>
                    <button onClick={props.onClose} className={styles.bttn} >X</button>
                </div>

                <div className={styles.modalBody}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default CModal