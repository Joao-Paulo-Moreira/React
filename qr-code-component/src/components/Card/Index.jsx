import QrCode from "../../assets/image-qr-code.png";
import styles from "./styles.module.css"


export default function Card() {
    return(
        <div className={styles.container}>
            <img className={styles.image} src={QrCode} alt="" />
            <section className={styles.content}>
            <h2>Improve your front-end skills by building projects</h2>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </section>
        </div>
    )
}
