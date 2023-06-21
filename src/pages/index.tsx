import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | IgNews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Ei, Seja bem vindo</span>
          <h1>
            Noticias sobre o Mundo do <span>React</span>
          </h1>
          <p>
            Tenha acesso a todas as publicações <br />
            <span>por apena R$ 9,99 ao mês</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="Garota Codando" />
      </main>
    </>
  );
}
