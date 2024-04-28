import { Roboto } from 'next/font/google'
import Header from "../components/Header";
import Footer from "../components/Footer";
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "lab-e",
  description: "E-commerce para Laboratórios de Análises Clínicas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
