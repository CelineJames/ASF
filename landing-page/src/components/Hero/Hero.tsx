import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero-mentoring.svg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.inner} container`}>
        {/* Left — text content (wider) */}
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Mentoring Students for Graduate School Success
          </h1>
          <p className={styles.subheading}>
            Achiever Scholars Forum supports students applying to Master’s and
            PhD programs through mentorship, application guidance, and expert
            document review.
          </p>
          <div className={styles.actions}>
            <a href="#join" className={styles.primaryBtn}>
              Join our Community
            </a>
            <a href="#why" className={styles.ghostBtn}>
              Explore Graduate resources
            </a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>1,000+</strong>
              <span>Active Scholars</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>90%+</strong>
              <span>Success Rate</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>$500k+</strong>
              <span>Scholarships Awarded</span>
            </div>
          </div>
        </div>

        {/* Right — image */}
        <div className={styles.right}>
          <div className={styles.imageWrap}>
            <img
              src={heroImage}
              alt="Professional"
              className={styles.heroImg}
            />
            {/* <div className={styles.floatingCard}>
              <span className={styles.cardIcon}>✓</span>
              <div>
                <p className={styles.cardTitle}>Review Complete</p>
                <p className={styles.cardSub}>Contract #4821 — 3 suggestions</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
