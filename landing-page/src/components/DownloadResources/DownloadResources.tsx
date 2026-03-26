import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./DownloadResources.module.css";
import resourcesPicture from "@/assets/images/rresources-sec.svg";
import tickIcon from "@/assets/icons/tick.svg";
import downloadicon from "@/assets/icons/download.svg";
import downloadiconWhite from "@/assets/icons/download-white.svg";
import FadeIn from "../animations/fadeIn";

const includes = [
  {
    icon: downloadicon,
    title: "Get Your Free Resource Pack",
    desc: "",
  },
  {
    icon: tickIcon,
    title: "Comprehensive Collection",
    desc: "Over 50+ resources in one downloadable pack",
  },
  {
    icon: tickIcon,
    title: "Regular Updates",
    desc: "Get notified when we add new resources",
  },
  {
    icon: tickIcon,
    title: "Instant Access",
    desc: "Download immediately, no waiting required",
  },
];

interface DownloadFormValues {
  email: string;
}

export default function DownloadResources() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<DownloadFormValues>();

  const onSubmit: SubmitHandler<DownloadFormValues> = (data) => {
    console.log("Download form:", data);
    // TODO: trigger download or send email
    reset();
  };

  return (
    <section id="download" className={styles.section}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.heading}>
          <FadeIn>
            <h2 className={styles.title}>Download Free Resources</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className={styles.subtitle}>
              Get instant access to our curated collection of resources designed
              to help you succeed
            </p>
          </FadeIn>
        </div>

        <div className={styles.inner}>
          {/* Left — image */}
          <FadeIn direction="right" delay={0.3}>
            {" "}
            <div className={styles.left}>
              <img src={resourcesPicture} className={styles.image} />
            </div>
          </FadeIn>

          {/* Right — box */}
          <div className={styles.right}>
            <FadeIn direction="left" delay={0.3}>
              <div className={styles.box}>
                {isSubmitSuccessful ? (
                  <div className={styles.successMsg}>
                    ✅ Check your inbox — your resources are on the way!
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.form}
                    noValidate
                  >
                    <ul className={styles.includes}>
                      {includes.map((item, i) => (
                        <li key={i}>
                          <img
                            src={item.icon}
                            alt=""
                            className={styles.listIcon}
                          />
                          <div>
                            <span className={styles.includesTitle}>
                              {item.title}
                            </span>
                            {item.desc && (
                              <span className={styles.includesDesc}>
                                {item.desc}
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className={styles.inputRow}>
                      <div className={styles.field}>
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="youremail@example.com"
                          className={errors.email ? styles.inputError : ""}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Enter a valid email",
                            },
                          })}
                        />
                        {errors.email && (
                          <span className={styles.error}>
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                      <button type="submit" className={styles.downloadBtn}>
                        <img src={downloadiconWhite} alt="download-icon" />
                        Download Resource Pack
                      </button>
                    </div>
                  </form>
                )}

                <p className={styles.note}>
                  {" "}
                  We respect your privacy. No spam, ever. Unsubscribe anytime.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
