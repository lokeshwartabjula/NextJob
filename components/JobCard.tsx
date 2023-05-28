// components/JobCard.tsx
import React, { FC } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Button from "./Button";
import styles from "../styles/JobCard.module.css";

type JobCardProps = {
  onClickApply: () => void;
};

const JobCard: FC<JobCardProps> = ({ onClickApply }) => (
  <div className={styles.cardContainer}>
    <div className={styles.companyInfo}>
      <div className={styles.companyLogo}>
        <Image
          src="/images/logo1.png"
          alt="Company Logo"
          width={50}
          height={50}
        />
        <div className={styles.rating}>
          4.5 <FaStar />
        </div>
      </div>
      <div>
        <h2>Software Engineer</h2>
        <p>Company Name</p>
        <p>123 Street, City, Country</p>
        <p>$60k - $80k</p>
      </div>
    </div>

    <div className={styles.jobInfo}>{/* Job Details */}</div>

    <Button onClick={onClickApply}>Apply</Button>
    <p className={styles.daysPosted}>Posted 3 days ago</p>
  </div>
);

export default JobCard;
