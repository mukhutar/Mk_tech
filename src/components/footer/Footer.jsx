import React from 'react'
import styles from "./page.module.css"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2024 Mk_tech. All rights reserved</div>

      <div>

        <div className={styles.social}>
                  <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Mk_tec_log"/>
                  <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Mk_tec_log"/>
                  <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Mk_tec_log"/>
                  <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Mk_tec_log"/>

        </div>
      </div>
    </div>
  )
}

export default Footer
