import { useState, useEffect } from "react";
import FadeIn from "../animations/fadeIn";
import styles from "./Hero.module.css";
import heroImage from "../../assets/images/member1.jpeg";
import heroImage1 from "../../assets/images/member2.jpeg";
// import heroImage2 from "../../assets/images/member3.png";
// import heroImage3 from "../../assets/images/member4.png";
import heroImage4 from "../../assets/images/member8.jpg";
import heroImage5 from "../../assets/images/member_group6.jpeg";
import heroImage6 from "../../assets/images/member_group7.jpeg";
import Button from "../utils/button";

const images = [
  heroImage1,
  // heroImage2,
  heroImage,
  // heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds — 1 second is too fast for images

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`${styles.inner} container`}>
        {/* Left — text content (wider) */}
        <div className={styles.left}>
          <FadeIn delay={0}>
            <h1 className={styles.heading}>
              Mentoring Students for Graduate School Success
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className={styles.subheading}>
              Achiever Scholars Forum supports students applying to Master’s and
              PhD programs through mentorship, application guidance, and expert
              document review.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className={styles.actions}>
              <Button
                label="Join the Community"
                type="button"
                className={styles.primaryBtn}
              />
              <button className={styles.ghostBtn}>
                Explore Graduate Resources
              </button>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
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
          </FadeIn>
        </div>

        {/* Right — image carousel */}
        <div className={styles.right}>
          <FadeIn direction="left" delay={0.2}>
            <div className={styles.imageWrap}>
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Slide ${i + 1}`}
                  style={{ objectPosition: "center 40%" }}
                  className={`${styles.heroImg} ${i === current ? styles.active : styles.hidden}`}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
