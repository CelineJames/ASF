import styles from "./SubmitDocument.module.css";
import review from "@/assets/icons/review2.svg";
import document from "@/assets/icons/document.svg";
import succeed from "@/assets/icons/succeed.svg";

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
          <h2 className={styles.title}>Submit document for review</h2>
          <p className={styles.subtitle}>
            Get expert feedback from experienced mentors and improve your
            applications
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardTop}>
                <img src={step.icon} alt="" className={styles.stepIcon} />
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
