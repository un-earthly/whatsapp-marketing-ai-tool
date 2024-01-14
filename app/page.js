import Banner from '@/components/Banner'
import Faq from '@/components/Faq'      
import Pricing from '@/components/Pricing.jsx'      
import Footer from '@/components/Footer'
import { Nav } from '@/components/Navbar'
import Image from 'next/image'
import Demo from '@/components/Demo'
import Features from '@/components/Features'
import MarketingBanner from '@/components/MarketingBanner'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  const testimonialsData = [
    {
      imageSrc: 'https://mobidonia-demo.imgix.net/img/testimonials/0.png?w=100&h=100',
      title: 'I love using the system',
      subtitle: 'John Doe - CEO of Marketing LTD',
      content: 'This WhatsApp marketing platform has completely transformed how we engage with our customers. It\'s a game-changer for our marketing campaigns, and the direct WhatsApp chat feature has boosted our customer interactions. The platform is user-friendly, and the support team is incredibly responsive. Highly recommend!',
    },
    {
      imageSrc: 'https://mobidonia-demo.imgix.net/img/testimonials/1.png?w=100&h=100',
      title: 'Exceptional WhatsApp Marketing',
      subtitle: 'Jane Smith - Marketing Manager',
      content: "Your WhatsApp marketing platform has been a game-changer for our marketing efforts. The campaigns are highly effective, and the direct chat feature allows us to connect with customers on a personal level. It's made a significant impact on our business growth!",
    },
    {
      imageSrc: 'https://mobidonia-demo.imgix.net/img/testimonials/2.png?w=100&h=100',
      title: 'Exceptional WhatsApp Marketing',
      subtitle: 'David Williams - Digital Marketer',
      content: "Using your WhatsApp marketing platform has made managing campaigns effortless. The results have been outstanding, and the direct WhatsApp chat has improved our customer engagement. The platform's simplicity and the support team's assistance have been invaluable to our success.",
    },
    {
      imageSrc: 'https://mobidonia-demo.imgix.net/img/testimonials/3.png?w=100&h=100',
      title: 'A Must-Have for Marketers',
      subtitle: 'Susan Brown - Marketing Director',
      content: "Your WhatsApp marketing SaaS platform is a must-have for any marketer. It's streamlined our marketing efforts, and the direct chat feature has enhanced our customer relationships. The platform is intuitive, and the support team is top-notch. We couldn't be happier with the results!",
    },
    {
      imageSrc: 'https://mobidonia-demo.imgix.net/img/testimonials/4.png?w=100&h=100',
      title: 'Great Customer Service',
      subtitle: 'Alex Johnson - Customer Service Manager',
      content: "The customer service from this WhatsApp marketing platform has been exceptional. They're always ready to assist and make using the platform a breeze. Highly recommend!",
    },
    {
      imageSrc: 'https://mobidonia-demo.imgix.net/img/testimonials/5.png?w=100&h=100',
      title: 'Improved Business Operations',
      subtitle: 'Emily Davis - Business Owner',
      content: "This WhatsApp marketing platform has improved our business operations significantly. The direct chat feature has made communication with customers so much easier. It's a fantastic tool!",
    },
    {
      imageSrc: 'https://mobidonia-demo.imgix.net/img/testimonials/6.png?w=100&h=100',
      title: 'Excellent Marketing Tool',
      subtitle: 'Michael Miller - Marketing Specialist',
      content: "This WhatsApp marketing platform has improved our business operations significantly. The direct chat feature has made communication with customers so much easier. It's a fantastic tool!",
    },
    {
      imageSrc: 'https://mobidonia-demo.imgix.net/img/testimonials/7.png?w=100&h=100',
      title: 'Incredible Results',
      subtitle: 'Sarah Thompson - Sales Manager',
      content: "This WhatsApp marketing platform has delivered incredible results for our sales team. The direct chat feature has significantly improved our customer engagement. The platform is easy to use and the support team is always ready to help. Highly recommend!",
    },
    {
      imageSrc: 'https://mobidonia-demo.imgix.net/img/testimonials/8.png?w=100&h=100',
      title: 'Boosted Our Marketing',
      subtitle: 'Robert Anderson - Marketing Executive',
      content: "Your WhatsApp marketing platform has boosted our marketing efforts. The campaigns are highly effective and the direct chat feature allows us to connect with customers on a personal level. It's made a significant impact on our business growth!",
    },
  ];
  return (
    <main>
      <Nav />
      <Banner />
      <Features />
      <Demo />
      <MarketingBanner />
      <Testimonials data={testimonialsData} />

      <Pricing />
      <Faq />
      <Footer />
    </main>
  )
}
