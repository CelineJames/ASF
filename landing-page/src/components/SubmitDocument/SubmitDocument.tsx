import styles from "./SubmitDocument.module.css";
import review from "@/assets/icons/review2.svg";
import document from "@/assets/icons/document.svg";
import succeed from "@/assets/icons/succeed.svg";
import { motion } from "framer-motion";
import FadeIn from "../animations/fadeIn";

const steps = [
  {
    icon: document,

    title: "Upload Your Document",
    description: "Submit your essay, resume, or application materials",
  },
  {
    icon: review,
    title: "We Match You with an Expert",
    description: "Our mentors carefully review and provide detailed feedback",
  },
  {
    icon: succeed,
    title: "Receive Detailed Feedback",
    description: "Implement feedback and submit stronger applications",
  },
];

export default function SubmitDocument() {
  return (
    <section id="submit" className={styles.section}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.heading}>
          <FadeIn>
            {" "}
            <h2 className={styles.title}>Submit document for review</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className={styles.subtitle}>
              Get expert feedback from experienced mentors and improve your
              applications
            </p>
          </FadeIn>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <motion.div
              className={styles.card}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 32px rgba(15,17,23,0.12)",
              }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              key={index}
            >
              <div className={styles.cardTop}>
                <img src={step.icon} alt="" className={styles.stepIcon} />
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
