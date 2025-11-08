import { HiLocationMarker, HiMail } from 'react-icons/hi';

const ContactSection = () => (
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>

    <div className="card bg-base-200 shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
      <p className="text-lg mb-8">
        I'm always open to discussing new opportunities, collaborations, and interesting projects!
      </p>

      <div className="space-y-6 mb-8">
        <div className="flex items-center justify-center gap-3">
          <HiMail className="text-2xl text-primary" />
          <div>
            <p className="font-semibold">Email</p>
            <div className="space-y-1">
              <a
                href="mailto:praneeth.muvva@duke.edu"
                className="block text-primary hover:text-primary/80 transition-colors"
              >
                praneeth.muvva@duke.edu
              </a>
              <a
                href="mailto:praneeth.muvva@gmail.com"
                className="block text-primary hover:text-primary/80 transition-colors"
              >
                praneeth.muvva@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <HiLocationMarker className="text-2xl text-primary" />
          <div>
            <p className="font-semibold">Based in</p>
            <p className="text-base-content/70">Durham, NC • Coppell, TX</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;