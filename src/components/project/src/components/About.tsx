import React from 'react';
import { Award, Users, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '12+' },
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: Heart, label: 'Custom Designs', value: '500+' },
    { icon: Sparkles, label: 'Awards Won', value: '15+' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="aspect-w-4 aspect-h-5 relative">
              <img
                src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Elena Vasquez"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold rounded-full flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6">
              About Elena
            </h2>
            
            <div className="space-y-6 text-gray-600 font-inter leading-relaxed">
              <p className="text-lg">
                With over a decade of experience in haute couture, I've dedicated my career 
                to creating fashion that empowers women to feel confident and beautiful. 
                My design philosophy centers on the belief that clothing should be both 
                functional and deeply personal.
              </p>
              
              <p>
                After graduating from Parsons School of Design, I spent years working with 
                renowned fashion houses in Paris and New York, learning the intricate craft 
                of pattern making, draping, and couture construction. This foundation has 
                allowed me to develop a unique aesthetic that bridges classic elegance with 
                contemporary innovation.
              </p>
              
              <p>
                Today, I work closely with clients to create bespoke pieces that reflect 
                their individual style and lifestyle needs. Each garment is meticulously 
                crafted in my atelier, using only the finest fabrics and traditional 
                techniques passed down through generations of skilled artisans.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-8 w-8 text-gold" />
                  </div>
                  <div className="text-2xl font-playfair font-bold text-dark mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-inter text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;