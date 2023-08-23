// sendo o component que será exibido e executado em todas as telas, então o ideal é colocar o estilo global nele
import GlobalStyle from '../src/theme/GlobalStyle';

// import do head do nextjs
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* assim irá carregar todas as fontes para o site inteiro */}
      <Head>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2EJFE6CBNR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-2EJFE6CBNR');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
