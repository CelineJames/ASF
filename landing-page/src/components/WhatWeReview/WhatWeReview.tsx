import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./WhatWeReview.module.css";
import reviewPicture from "@/assets/images/review-sec.svg";
import file from "@/assets/icons/file.svg";

interface ReviewFormValues {
  name: string;
  email: string;
  documentType: string;
  instructions: string;
  file: FileList;
}

const reviewableDocuments = [
  { icon: file, label: "College Application Essay" },
  { icon: file, label: "Scholarship essays and statements" },
  { icon: file, label: "Personal statements" },
  { icon: file, label: "Resumes and CVs" },
  { icon: file, label: "Letters of intent" },
  { icon: file, label: "Graduate school applications" },
];

export default function WhatWeReview() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ReviewFormValues>();

  const onSubmit: SubmitHandler<ReviewFormValues> = (data) => {
    console.log("Review submission:", data);
    // TODO: wire to your API
    reset();
  };

  return (
    <section id="review" className={styles.section}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.inner}>
          {/* Left — document list + image */}
          <div className={styles.left}>
            <div className={styles.heading}>
              <h3 className={styles.title}>What we review</h3>
            </div>
            <ul className={styles.docList}>
              {reviewableDocuments.map((doc, i) => (
                <li className={styles.docItem} key={i}>
                  <img src={doc.icon} alt="" className={styles.docIcon} />
                  <span>{doc.label}</span>
                </li>
              ))}
            </ul>
            <div className={styles.imageWrap}>
              <img src={reviewPicture} className={styles.reviewerImg} />
            </div>
          </div>

          {/* Right — submission form */}
          <div className={styles.right}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Submit your Documents</h3>
              <p className={styles.formSub}>
                Fill the form below and upload your document.
              </p>

              {isSubmitSuccessful && (
                <div className={styles.successMsg}>
                  🎉 Submission received! You'll hear from us within 48 hours.
                </div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                noValidate
              >
                <div className={styles.field}>
                  <label htmlFor="reviewName">Full Name</label>
                  <input
                    id="reviewName"
                    type="text"
                    placeholder="Jane Doe"
                    className={errors.name ? styles.inputError : ""}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className={styles.error}>{errors.name.message}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="reviewEmail">Email Address</label>
                  <input
                    id="reviewEmail"
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
                    <span className={styles.error}>{errors.email.message}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="documentType">Document Type</label>
                  <select
                    id="documentType"
                    className={errors.documentType ? styles.inputError : ""}
                    {...register("documentType", {
                      required: "Please select a document type",
                    })}
                  >
                    <option value="">Select document type</option>
                    <option value="legal">SOP</option>
                    <option value="research">CV</option>
                    <option value="business">Letter of Motivation</option>
                    <option value="cv">Scholarship Essay</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.documentType && (
                    <span className={styles.error}>
                      {errors.documentType.message}
                    </span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="file">Upload Document</label>
                  <div
                    className={`${styles.fileInput} ${errors.file ? styles.inputError : ""}`}
                  >
                    <input
                      id="file"
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      {...register("file", {
                        required: "Please upload a document",
                        validate: (files) =>
                          files.length > 0 || "Please upload a document",
                      })}
                    />
                    <span className={styles.fileHint}>
                      Click to upload or drag and drop PDF, DOC, DOCX (max 10MB)
                    </span>
                  </div>
                  {errors.file && (
                    <span className={styles.error}>{errors.file.message}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="instructions">
                    Additional Information{" "}
                    <span className={styles.optional}>(optional)</span>
                  </label>
                  <textarea
                    id="instructions"
                    rows={3}
                    placeholder="Any specific areas you'd like the reviewer to focus on…"
                    {...register("instructions")}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Submit for Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
