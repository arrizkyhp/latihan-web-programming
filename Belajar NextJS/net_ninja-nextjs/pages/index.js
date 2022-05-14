import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus, totam quaerat eius, dignissimos at facilis veritatis, optio non cumque necessitatibus nemo temporibus voluptatem quasi animi delectus? Repellendus, dolorum incidunt.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus, totam quaerat eius, dignissimos at facilis veritatis, optio non cumque necessitatibus nemo temporibus voluptatem quasi animi delectus? Repellendus, dolorum incidunt.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
    </div>
  )
}
