import {
  Features,
  Hero,
  Partners,
  Stories,
  Testimonials,
} from '../../components';

function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Hero />
      <Features />
      <Testimonials />
      <Partners />
      <Stories />
    </div>
  );
}

export default Home;
