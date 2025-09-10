import { Caveat , Inter , Arima} from 'next/font/google';

export const caveatFont = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight:'400',
});

export const interFont = Inter({
    subsets:['latin'],
    variable:'--font-inter' ,
    weight:['400','500','600','700','800','900'],
});

export const arima = Arima({
    subsets:['latin'],
    variable:'--font-inter' ,
    weight:['400','500','600','700'],
});

