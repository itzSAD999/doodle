export interface Leader {
  name: string;
  title: string;
  image: string;
  bio: string;
}

export interface PressArticle {
  publisher: string;
  logo: string;
  headline: string;
  excerpt: string;
  link: string;
}

export const leadershipData: Leader[] = [
  {
    name: 'Atishe Chordia',
    title: 'Co-Founder & CEO',
    image: '/images/about-page/atishe.jpg',
    bio: 'Atishe graduated from Carnegie Mellon University with majors in Mechanical Engineering, Economics & Statistics and worked as a Product Manager at a software consulting firm in New York that built advanced technology platforms for the financial services industry. Atishe is a serial entrepreneur at heart and loves building product experiences.'
  },
  {
    name: 'Nishyta Chordia',
    title: 'Co-Founder & CDO',
    image: '/images/about-page/nishyata.jpg',
    bio: 'Nishyta finished up her undergrad in Art History & Design and graduated with a Masters in Design from the the University of the Arts London. She leads design thinking workshops for all products at doodleblue and her passions include UX, art history & illustration.'
  },
  {
    name: 'Hemant Chordia',
    title: 'Director',
    image: '/images/about-page/hemant.jpg',
    bio: 'Hemant brings a rare mix of entrepreneurial skills coupled with oodles (~35 yrs) of experience in the fields of financial services and digital content aggregation. An excellent communicator and well networked, a great inspiration to all and a clear visionary for doodleblue.'
  },
  {
    name: 'Tripti Chordia',
    title: 'Partner | HR and Strategy',
    image: '/images/about-page/tripti.jpg',
    bio: 'Tripti completed her masters in Advertising and Marketing from the UK. She has experience in marketing & strategy roles for leading media conglomerates. At doodleblue she leads resource growth which involves training & growing a highly specialised set of engineers & creative professionals.'
  }
];

export const pressData: PressArticle[] = [
  {
    publisher: 'The Times of India',
    logo: '/images/about-page/the-times-india.png',
    headline: 'We are all in IT together for...',
    excerpt: '"When Atishe Chordia returned to India from the US in May 2011 after working with large corporates and a brief entrepreneurial stint, he started building websites for friends and family.One request turned into another and by the third month, he knew he was sitting on a gold mine. Today, after six years, his company, doodleblue has over 1,000 projects under its belt, clocking multi-million dollar revenues, serving clients across the globe...',
    link: '#'
  },
  {
    publisher: 'The Times of India',
    logo: '/images/about-page/the-times-india.png',
    headline: 'What is this CEO doing in India?',
    excerpt: '"This is the story of a highly talented young man, set in circa 2011. Hailing from India, the land of entrepreneurs, Atishe has an established family business in finance waiting for him to take over. However, life takes him to Carnegie Mellon University where he majors in Mechanical Engineering, Economics & Statistics...',
    link: 'https://indianceo.in/ceo/atishe-chordia-doodleblue/'
  },
  {
    publisher: 'Insights Success',
    logo: '/images/about-page/insight-success.png',
    headline: 'The go to place for your...',
    excerpt: '"For entrepreneurs & the start-up community, doodleblue is an end to end services provider. They help firms right from the conceptualization of the product, helping them build a creative user experience, developing the backend stacks and finally pushing their product into the market through strategic digital marketing solutions...',
    link: 'https://www.insightssuccess.com/doodleblue-innovations-the-go-to-place-for-your-technology-needs/'
  },
  {
    publisher: 'LiveMint',
    logo: '/images/about-page/livemint.png',
    headline: 'The future belongs to wea...',
    excerpt: '"Online search engine company Google Inc. has made its wearable computer, the Google Glass, available to 10,000 early adopters called “explorers”, who are working on apps to popularize this work-in-progress-device. The apps being developed include those that aid firefighters locate the nearest exit, doctors broadcast their surgeries...',
    link: 'https://www.livemint.com/Specials/HInY4URSnksbZprsXu1wuN/The-future-belongs-to-wearable-technology-doodleblues-Ati.html'
  },
  {
    publisher: 'The Hindu',
    logo: '/images/about-page/thehinndulogo.png',
    headline: 'Betting on risks!',
    excerpt: 'As the world exists today, start-ups are the new ‘in’ thing, mushrooming in every corner of the city and country, headed by young graduates who are out to prove their mettle. They want their independence, they want their shot at making a difference and they want to stray off the trodden path...',
    link: 'https://www.thehindu.com/todays-paper/tp-features/tp-metroplus/betting-on-risks/article5194042.ece'
  },
  {
    publisher: 'YourStory',
    logo: '/images/about-page/your story logo.png',
    headline: 'We are all in IT together for...',
    excerpt: '"It is not everyday you get to hear about the stories of siblings starting up a new venture. Atishe and Nishyta Chordia are one such, a brother-sister duo who started doodleblue Innovations in 2011. Today, doodleblue has grown to a 31-member team which provides complete service in mobile and web application development...',
    link: 'https://yourstory.com/2013/09/doodleblue-innovations/'
  },
  {
    publisher: 'The Hindu',
    logo: '/images/about-page/thehinndulogo.png',
    headline: 'Out of the Blue!',
    excerpt: '"Doodleblue is a self-acclaimed Boutique Design Company, one which makes office stationery to suit your personal tastes. Whether it is “Thank you” cards or website design, business cards or letter heads, the team behind doodleblue promises to deliver high quality goods brimming with innovation...',
    link: 'https://www.thehindu.com/todays-paper/tp-features/tp-metroplus/out-of-the-blue/article3744127.ece'
  }
];
