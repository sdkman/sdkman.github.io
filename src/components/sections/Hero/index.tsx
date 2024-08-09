import React from 'react';
import styles from './styles.module.scss';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionTop}>
          <img
            className={styles.sectionTopImg}
            src="/img/sdk-man-small-pattern.svg"
            alt="SDKMAN! logo"
          />

          <h1 className={styles.sectionTopTitle}>
            The Software Development Kit Manager
          </h1>

          <p className={styles.sectionTopText}>
            Meet <strong>SDKMAN!</strong> – your reliable companion for
            effortlessly managing multiple Software Development Kits on Unix
            systems. Imagine having different versions of SDKs and needing a
            stress-free way to switch between them. SDKMAN! steps in with its
            easy-to-use Command Line Interface (CLI) and API. Formerly known as
            GVM, the Groovy enVironment Manager, SDKMAN! draws inspiration from
            familiar tools like apt, pip, RVM, and rbenv and even Git. Think of
            it as your helpful toolkit friend, ready to streamline SDK
            management for you. 🛠️
          </p>
        </div>

        <div className={styles.sectionBottom}>
          <p className={styles.sectionBottomTitle}>Get started now!</p>

          <p className={styles.sectionBottomText}>
            Go on then, paste and run the following in a terminal:
            <br />
            <code>curl -s "https://get.sdkman.io" | bash</code>
          </p>
        </div>
      </div>
    </section>
  );
}
