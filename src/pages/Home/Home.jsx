import { Features, Hero, Partners, Testimonials } from '../../components';

function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Hero />
      <Features />
      <Testimonials />
      <Partners />
    </div>
  );
}

export default Home;
