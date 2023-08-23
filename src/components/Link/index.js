import NextLink from 'next/link'; //colcoando o nome de 'NextLink' para que não confunda com o "Link" nome da função

export default function Link({ children, href, ...props }) {
  return (
    <>
      {/* Sendo esse link do Next.js */}
      <NextLink {...props} href={href} passHref>
        {children}
      </NextLink>
    </>
  );
}
