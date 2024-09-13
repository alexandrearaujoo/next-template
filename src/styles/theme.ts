import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

export const theme = {
  shadows: {},
  colors: {},
  fonts: {
    //Montserrat
    title_LG_bold: `700 2.4rem ${montserrat.style.fontFamily}, sans-serif`,
    title_LG_regular: `400 2.4rem ${montserrat.style.fontFamily}, sans-serif`,

    montserrat_700: `700 2.2rem ${montserrat.style.fontFamily}, sans-serif`,
    montserrat_400: `400 2.2rem ${montserrat.style.fontFamily}, sans-serif`,

    title_SM_bold: `700 1.6rem ${montserrat.style.fontFamily}, sans-serif`,
    title_SM_regular: `400 1.6rem ${montserrat.style.fontFamily}, sans-serif`,

    // Inter
    title_MD_bold: `700 2rem ${inter.style.fontFamily}, sans-serif`,
    title_MD_regular: `400 2rem ${inter.style.fontFamily}, sans-serif`,

    text_XL_bold: `700 1.8rem ${inter.style.fontFamily}, sans-serif`,
    title_XL_regular: `400 1.8rem ${inter.style.fontFamily}, sans-serif`,

    text_LG_bold: `700 1.6rem ${inter.style.fontFamily}, sans-serif`,
    text_LG_regular: `400 1.6rem ${inter.style.fontFamily}, sans-serif`,

    text_MD_bold: `700 1.4rem ${inter.style.fontFamily}, sans-serif`,
    text_MD_regular: `400 1.4rem ${inter.style.fontFamily}, sans-serif`,
    text_MD_light: `300 1.4rem ${inter.style.fontFamily}, sans-serif`,

    text_SM_bold: `700 1.2rem ${inter.style.fontFamily}, sans-serif`,
    text_SM_regular: `400 1.2rem ${inter.style.fontFamily}, sans-serif`,

    text_XS_bold: `700 1rem ${inter.style.fontFamily}, sans-serif`,
    text_XS_regular: `400 1rem ${inter.style.fontFamily}, sans-serif`,
    text_XS_light: `300 1rem ${inter.style.fontFamily}, sans-serif`
  }
};
