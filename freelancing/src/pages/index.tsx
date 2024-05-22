import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Development with a Creative Touch</title>
        <meta name="description" content="Transform your ideas into reality with Irina, a passionate and skilled web developer. Offering customized web design, front-end and back-end development, and SEO optimization to elevate your online presence. Let's create something amazing together!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />      
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
               {" "}
              <Image
                src="/apple-touch-icon.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={40.8}
                height={40.79}
                priority
              />
      <div className={styles.gridcontainer}>
        <div className={styles.row}>

            <div className={styles.col-1}>
              <div className={styles.center}>
                <h1 className={styles.heading1}>
                  Passionate &amp; Creative Web Developer
                </h1>
              </div>
            </div>
            
        </div>


        <div className={styles.grid}>
          {/* Linkurile tale aici */}
        </div>
        </div>
      </main>
    </>
  );
}
