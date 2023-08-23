import Head from 'next/head';

export default function Link({ children, ...props }) {
  return (
    <>
      <Head {...props}>
        <title>{children}</title>
      </Head>
    </>
  );
}
