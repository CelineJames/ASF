import styles from "./WhySection.module.css";
import community from "@/assets/icons/community.svg";
import resources from "@/assets/icons/resources.svg";
import review from "@/assets/icons/review.svg";
import programs from "@/assets/icons/programs.svg";
import guidiance from "@/assets/icons/guidiance.svg";
import support from "@/assets/icons/support.svg";
import { motion } from "framer-motion";
import FadeIn from "../animations/fadeIn";

import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/staggerContainer";

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
          <FadeIn>
            <h2 className={styles.title}>
              Why Choose Achiever Scholars Forum?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className={styles.subtitle}>
              We support students applying to graduate school with structured
              mentorship and practical guidance for free
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className={styles.grid}>
          {features.map((f, i) => (
            <StaggerItem key={i}>
              <motion.div
                className={styles.card}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 32px rgba(15,17,23,0.12)",
                }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <img src={f.icon} alt="" className={styles.icon} />
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
