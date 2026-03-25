import styles from "./WhySection.module.css";
import community from "@/assets/icons/community.svg";
import resources from "@/assets/icons/resources.svg";
import review from "@/assets/icons/review.svg";
import programs from "@/assets/icons/programs.svg";
import guidiance from "@/assets/icons/guidiance.svg";
import support from "@/assets/icons/support.svg";

const features = [
  {
    icon: community,
    title: "Supportive Community",
    description:
      "Connect with like-minded scholars, mentors, and alumni who share your ambitions.",
  },
  {
    icon: resources,
    title: "Extensive Resources",
    description:
      "Access templates and guides specifically designed for graduate school applications.",
  },
  {
    icon: review,
    title: "Document Review",
    description:
      "Receive detailed feedback on your Statement of Purpose, CV, and research proposals.",
  },
  {
    icon: programs,
    title: "Mentorship Programs",
    description:
      "Learn directly from mentors who have been admitted to top graduate programs.",
  },
  {
    icon: guidiance,
    title: "Scholarship & Funding Guidance",
    description:
      "Discover exclusive scholarship opportunities tailored to your profile.",
  },
  {
    icon: support,
    title: "Ongoing Support",
    description:
      "Ask questions and receive guidance throughout your graduate application journey.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className={styles.section}>
      <div className={`${styles.inner} container`}>
        <div className={styles.headings}>
          <h2 className={styles.title}>Why Choose Achiever Scholars Forum?</h2>
          <p className={styles.subtitle}>
            We support students applying to graduate school with structured
            mentorship and practical guidance for free
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div className={styles.card} key={i}>
              <img src={f.icon} alt="" className={styles.icon} />
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
