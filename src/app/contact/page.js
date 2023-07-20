import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'
import styles from './contact.module.css'

const ContactUs = () => {
  return (
    <> 
    <div className={styles.container}>
      <h1>Contact Us</h1>
    < ContactCard/>

    <section className={styles.contact_section}>
      <h2>We'd love to hear <span>from you </span></h2>
      <ContactForm/>
    </section>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.15347451757444!2d67.06593149026502!3d24.91654497099182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f16a28f25a3%3A0x9338a4e0a7c1f41d!2s1549%20Azizabad%20Main%20Rd%2C%20Federal%20B%20Area%20Azizabad%20Block%208%20Gulberg%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688358793801!5m2!1sen!2s" width={100} height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>

  )
}

export default ContactUs