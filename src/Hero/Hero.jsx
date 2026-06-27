import styles from "./Hero.module.css";
import Badge from "./Badge/Badge";
import React, { useState } from "react";
import { HiDownload, HiCalendar, HiArrowRight } from "react-icons/hi";
import { MdCode } from "react-icons/md";
import { DiJava } from "react-icons/di";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.greeting}>Hello, I'm</span>

        <h1>
          Nethum <span className={styles.highlight}>Nenula</span>
        </h1>

        <div className={styles.titles}>
          <span className={styles.title}>Web Developer</span>
          <span className={styles.separator}>|</span>
          <span className={styles.title}>Creative Thinker</span>
          <span className={styles.separator}>|</span>
          <span className={styles.title}>Problem Solver</span>
        </div>

        <p className={styles.description}>
          Building modern, responsive web applications that solve real problems
          and create meaningful experiences.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>
            <HiDownload /> View CV
          </button>
          <button className={styles.secondaryBtn}>
            <HiCalendar /> Book a Call
          </button>
          <button className={styles.outlineBtn}>
            See My Work <HiArrowRight />
          </button>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <div className={styles.profileImage}>
            <img src="src\assets\profile.jpg" alt="Nethum Nenula" />
          </div>
          <Badge
            name="Full Stack Developer"
            techItem1="React"
            techItem2="Node.js"
            techItem3="Express.Js"
            icon={MdCode}
            position="bottom-left"
          />
          <Badge
            name="Object Oriented Programming"
            techItem1="Java"
            techItem2="Python"
            techItem3="C++"
            icon={DiJava}
            position="top-right"
          />
          <Badge
            name="Object Oriented Programming"
            techItem1="Java"
            techItem2="Python"
            techItem3="C++"
            icon={DiJava}
            position="custom1"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
