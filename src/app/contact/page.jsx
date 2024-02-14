import React from 'react'
import styles from "./page.module.css"
import Image from "next/image"
import Button from '@/components/button/button'
const Contact = () => {
  return (
    <div className={styles.container} >
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>

      <div className={styles.content}>

          <div className={styles.img_container}>
            <Image src="/contact.png" className={styles.img} fill={true} alt="contactformImg"/>
          </div>

          <form className={styles.form}>
            <input type='text' placeholder='Name' className={styles.input}/>
            <input type='email' placeholder='Email' className={styles.input}/>
            <textarea className={styles.textarea} placeholder='Message' cols="30" rows="10"></textarea>
            <Button url="#" text="Send "/>
          </form>
        </div>
    </div>
  )
}

export default Contact;
