import { ReactTyped } from 'react-typed';

const HeroSection = () => (
  <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-[fadeInScale_1s_ease-out]">
      Praneeth Muvva
    </h1>
    <h2 className="text-2xl text-base-content/80 mb-8 animate-[slideUp_1s_ease-out_0.2s_both]">
      Electrical and Computer Engineering + Computer Science @ Duke University
    </h2>
    <div className="text-lg text-base-content/70 mb-12 max-w-2xl animate-[slideUp_1s_ease-out_0.4s_both]">
      <ReactTyped
        strings={[
          "Designing Systems Where Hardware Meets Intelligence",
          "Engineering Devices that Learn, Adapt, and Interact",
          "Exploring How Code Shapes the Physical World",
          "Building Embedded Solutions that Think for Themselves",
          "Curious About Everything Between Silicon and Software"
        ]}
        typeSpeed={50}
        backSpeed={30}
        backDelay={3000}
        loop
        showCursor={true}
        cursorChar="|"
        className="text-lg text-base-content/70"
      />
    </div>
    <button
      className="btn btn-primary btn-lg animate-[slideUp_1s_ease-out_0.6s_both]"
      onClick={() => {
        const element = document.getElementById('about');
        if (element) {
          // Add temporary padding to account for navbar
          const tempPadding = document.createElement('div');
          tempPadding.style.height = '80px';
          element.insertBefore(tempPadding, element.firstChild);

          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Remove temporary padding after scroll
          setTimeout(() => {
            if (tempPadding.parentNode) {
              tempPadding.parentNode.removeChild(tempPadding);
            }
          }, 1000);
        }
      }}
    >
      Learn More
    </button>
  </div>
);

export default HeroSection;