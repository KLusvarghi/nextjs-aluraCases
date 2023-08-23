// import HeadTitle from '../src/components/patterns/PageTitle' 
// import Link from '../src/components/Link';
import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen; 

export async function getStaticProps(){
  const FAQ_API_URL =
      'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
      .then((respostaServer) => {
        return respostaServer.json();
      })
      .then((resposta) => {
        return resposta
      });
  return {
    //isso aqui será passado como props para o seu component de página
    // então qualquer coisa que eu passar aq será recebido como prop no component de baixo
    props: {
      qualquercoisa: 'qualquer coisa escrita aq',
      faq
    }, 
  }
}

// export default function FAQpage({qualquercoisa, faq}) {
//   console.log(qualquercoisa)
//   console.log(faq)
//   return (
//     <div>
//       <HeadTitle>
//         FAQ - Alura Cases Campanha
//       </HeadTitle>
//       <h1>Alura Class - Páginas de Perguntas FAQ </h1>
//       <Link href="/">Ir para home</Link>
//       <ul>
//         {faq.map(({ answer, question }) => (
//           <>
//             <li key={question}>{question}</li>
//             <p>{answer}</p>
//           </>
//         ))}
//       </ul>
//     </div>
//   );
// }
