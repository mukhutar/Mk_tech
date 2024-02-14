import React from 'react'
import Image from "next/image"
import styles from "./page.module.css"
import Button from '@/components/button/button'

const Page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.img_container}>
     
          <Image  className={styles.img} src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=600" fill={true}  alt="aboutImg"/>

          <div className={styles.img_text}>
              <h1 className={styles.img_title}> Digital Storyteller</h1>
              <h2 className={styles.img_desc}>Handcrafting  award winning digital experiences</h2>
          </div>
        </div>

        <div className={styles.text_container}>


          <div className={styles.item}>
            <h1 className={styles.title}>Who Are We </h1>
              <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, vel ex. Saepe dolorem 
                  laborum vitae ullam minus a hic sequi ad nihil mollitia. Corrupti, nulla quaerat exercitationem
                  repudiandae eius doloremque. <br /> <br />

                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, vel ex. Saepe dolorem 
                  laborum vitae ullam minus a hic sequi ad nihil mollitia. Corrupti, nulla quaerat exercitationem
                  repudiandae eius doloremque.
              </p>

          </div>


            <div className={styles.item}>

                <h1 className={styles.title}>What We Do </h1>
                <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, vel ex. Saepe dolorem 
                  laborum vitae ullam minus a hic sequi ad nihil mollitia. Corrupti, nulla quaerat exercitationem
                  repudiandae eius doloremque. <br />  <br />

                  -Dynamic Website <br /> <br />
                  -Fast and Handy <br /> <br />
                  - Mobile app <br /> 
                </p>

                <Button url= "/contact" text="Contact"/>

          </div>
        </div>
    </div>
  )
}

export default Page
