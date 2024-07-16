import styles from "./Banner.module.css";
import banner from "./banner.png";

function Banner() {
    return (
        <div className={styles.container} style={{
            backgroundImage: `url(${banner})`
        }}>
            <div className={styles.hero}>
                <h1>Challenge React</h1>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <section className={styles.video}>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ov7vA5HFe6w?si=1kZp9sFbDIkOroE5"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
}

export default Banner