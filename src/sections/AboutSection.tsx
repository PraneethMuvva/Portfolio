import { useState } from 'react';

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    document.getElementById(`slide${slideIndex + 1}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  const goToPrevious = () => {
    const prevSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    goToSlide(prevSlide);
  };

  const goToNext = () => {
    const nextSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    goToSlide(nextSlide);
  };

  return (
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
      <div className="lg:col-span-3 card bg-base-200 shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"> 
        <p className="text-lg text-base-content leading-relaxed mb-4">
          Hey there, I’m Praneeth! I was born in Chicago, grew up in Dallas, and am now a Duke undergrad studying 
          Electrical & Computer Engineering and Computer Science. I’ve always been fascinated by how ideas move from 
          theory to something tangible, whether that’s a neural network model powering new kinds of healthcare devices 
          or a full-stack app built for everyday use. Over the years, I’ve explored that spectrum through internships, 
          lab research, and hands-on projects that connect academic curiosity with real-world impact.
        </p>
        <p className="text-lg text-base-content leading-relaxed mb-4">
          My background blends hands-on engineering experience with computational problem-solving skills.
          I’ve worked on projects ranging from adaptive brain stimulation research to embedded flight control systems, 
          and I enjoy thinking about problems where hardware meets software, or where algorithms have to 
          hold up under real-world constraints. I see technology not just as code or circuits, but as tools 
          for solving problems people actually face.
        </p>
        <p className="text-lg text-base-content leading-relaxed mb-4">
          Outside of academics, I like challenging myself in other ways too—through weightlifting, triathlons, 
          and taekwondo. I also enjoy hiking the National Parks, diving into strategy games with friends, and 
          experimenting in the kitchen. For me, whether it’s athletics, games, or engineering projects, it’s 
          all about testing limits and finding new paths.
        </p>
      </div>


      <div className="lg:col-span-2 flex flex-col justify-center lg:pl-4">
        <div className="relative mx-auto lg:ml-auto lg:mr-0 mb-4 w-[28rem]">
          <div className="carousel carousel-center rounded-box shadow-lg bg-base-200 space-x-2 p-4 w-full overflow-hidden" id="about-carousel">
          <div className="carousel-item" id="slide1">
            <img
              src="/src/assets/hiking.jpg"
              alt="Hiking adventure"
              className="rounded-box w-96 h-96 object-cover"
            />
          </div>
          <div className="carousel-item" id="slide2">
            <img
              src="/src/assets/football.jpg"
              alt="Football"
              className="rounded-box w-96 h-96 object-cover"
            />
          </div>
          <div className="carousel-item" id="slide3">
            <img
              src="/src/assets/science+fair.jpg"
              alt="Science fair"
              className="rounded-box w-96 h-96 object-cover"
            />
          </div>
          <div className="carousel-item" id="slide4">
            <img
              src="/src/assets/taekwondo.jpg"
              alt="Taekwondo"
              className="rounded-box w-96 h-96 object-cover"
            />
          </div>
        </div>

          <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
            <button
              onClick={goToPrevious}
              className="btn btn-circle btn-sm bg-base-100/90 hover:bg-base-100 border-0 shadow-lg pointer-events-auto z-10"
            >
              ❮
            </button>
            <button
              onClick={goToNext}
              className="btn btn-circle btn-sm bg-base-100/90 hover:bg-base-100 border-0 shadow-lg pointer-events-auto z-10"
            >
              ❯
            </button>
          </div>
        </div>

        <div className="w-[28rem] mx-auto lg:ml-auto lg:mr-0">
          <div className="flex justify-center gap-2">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`btn btn-xs ${currentSlide === index ? 'btn-primary' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutSection;