import styles from "./NoEncontrada.module.css"
import error from "./noencontrada.jpeg"
function NoEncontrada() {
    return (<>
        <section className={styles.container}>
            <img src={error} alt="error" />
        </section>
    </>)
}

export default NoEncontrada