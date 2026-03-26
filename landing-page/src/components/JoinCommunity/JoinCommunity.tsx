import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./JoinCommunity.module.css";
import communityPicture from "@/assets/images/community-sec.svg";
import { nigerianInstitutions } from "@/data/nigerianInstitution";
import FadeIn from "../animations/fadeIn";

interface CommunityFormValues {
  firstName: string;
  lastName: string;
  email: string;
  school: string;
  otherSchool?: string;
}

export default function JoinCommunity() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    watch,
  } = useForm<CommunityFormValues>();
  const selectedSchool = watch("school");

  const onSubmit: SubmitHandler<CommunityFormValues> = (data) => {
    console.log("Community form data:", data);
    // TODO: wire to your API
    reset();
  };

  return (
    <section id="join" className={styles.section}>
      <div className={`${styles.inner} container`}>
        {/* Left */}
        <div className={styles.left}>
          <FadeIn>
            <h2 className={styles.title}>Join Our Community</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className={styles.body}>
              Become part of a thriving network of ambitious scholars dedicated
              to academic excellence and personal growth..
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ul className={styles.perks}>
              <li>
                <div>
                  <span className={styles.perkTitle}>
                    Exclusive Member Benefits
                  </span>
                  <span className={styles.perkDesc}>
                    Graduate-focused templates and mentorship
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <span className={styles.perkTitle}>
                    Access to Template Library
                  </span>
                  <span className={styles.perkDesc}>
                    Browse hundreds of ready-to-use document templates
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <span className={styles.perkTitle}>Peer Review Exchange</span>
                  <span className={styles.perkDesc}>
                    Give and receive feedback from fellow members
                  </span>
                </div>
              </li>
              <li>
                <span>
                  <span className={styles.perkTitle}>
                    Early Access to New Features
                  </span>
                  <span className={styles.perkDesc}>
                    Be the first to try new tools before public release
                  </span>
                </span>
              </li>
            </ul>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            {" "}
            <div className={styles.imageWrap}>
              <img src={communityPicture} className={styles.communityImg} />
            </div>
          </FadeIn>
        </div>

        {/* Right — form */}
        <div className={styles.right}>
          <FadeIn direction="left" delay={0.4}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Start Your Journey</h3>
              <p className={styles.formSub}>
                Fill out the form below to join our community.
              </p>

              {isSubmitSuccessful && (
                <div className={styles.successMsg}>
                  🎉 Welcome aboard! Check your inbox for next steps.
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                noValidate
              >
                <div className={styles.field}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Jane"
                    className={errors.firstName ? styles.inputError : ""}
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <span className={styles.error}>
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className={errors.lastName ? styles.inputError : ""}
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <span className={styles.error}>
                      {errors.lastName.message}
                    </span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
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
                    <span className={styles.error}>{errors.email.message}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="school">School/University</label>
                  <select
                    id="school"
                    {...register("school", {
                      required: "Please select your school",
                    })}
                  >
                    <option value="">Select your institution</option>
                    {nigerianInstitutions.map((group) => (
                      <optgroup key={group.group} label={group.group}>
                        {group.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="other">Other — not listed</option>
                  </select>
                  {errors.school && (
                    <span className={styles.error}>
                      {errors.school.message}
                    </span>
                  )}
                </div>
                {selectedSchool === "other" && (
                  <div className={styles.field}>
                    <label htmlFor="otherSchool">
                      Please specify your institution
                    </label>
                    <input
                      id="otherSchool"
                      type="text"
                      placeholder="Type your school name here..."
                      className={errors.otherSchool ? styles.inputError : ""}
                      {...register("otherSchool", {
                        required: "Please enter your institution name",
                      })}
                    />
                    {errors.otherSchool && (
                      <span className={styles.error}>
                        {errors.otherSchool.message}
                      </span>
                    )}
                  </div>
                )}

                <button type="submit" className={styles.submitBtn}>
                  Join the Community
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
