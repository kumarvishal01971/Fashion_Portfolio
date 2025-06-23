import React from 'react';
import { Scissors, Palette, Crown, Shirt } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: 'Haute Couture',
      description: 'One-of-a-kind garments crafted with the highest level of artistry and attention to detail.',
      features: ['Hand-sewn construction', 'Premium fabrics', 'Unlimited fittings', 'Lifetime care'],
      price: 'Starting at $5,000'
    },
    {
      icon: Shirt,
      title: 'Ready-to-Wear',
      description: 'Contemporary pieces that blend luxury with accessibility for the modern woman.',
      features: ['Limited collections', 'Quality materials', 'Perfect fit guarantee', 'Seasonal updates'],
      price: 'Starting at $800'
    },
    {
      icon: Scissors,
      title: 'Alterations & Tailoring',
      description: 'Expert alterations to ensure your garments fit perfectly and flatter your figure.',
      features: ['Professional fitting', 'Quick turnaround', 'Precision tailoring', 'Style consultation'],
      price: 'Starting at $150'
    },
    {
      icon: Palette,
      title: 'Style Consultation',
      description: 'Personal styling sessions to help you discover your unique aesthetic and build a cohesive wardrobe.',
      features: ['Wardrobe analysis', 'Color palette', 'Style guide', 'Shopping assistance'],
      price: 'Starting at $300'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6">
            Services
          </h2>
          <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
            From bespoke haute couture to personal styling, I offer comprehensive 
            fashion services tailored to your unique needs and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-8 animate-scale-in"
            >
              <div className="flex items-start space-x-6">
                <div className="bg-gold/10 p-4 rounded-lg flex-shrink-0">
                  <service.icon className="h-8 w-8 text-gold" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-playfair font-semibold text-dark mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 font-inter mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm font-inter text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-playfair font-bold text-gold">
                      {service.price}
                    </span>
                    <button className="bg-dark text-white px-6 py-2 rounded-full font-inter font-medium hover:bg-dark/90 transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-semibold text-dark mb-4">
              Ready to Create Something Beautiful?
            </h3>
            <p className="text-gray-600 font-inter mb-6">
              Let's discuss your vision and bring your dream wardrobe to life. 
              Book a consultation to get started.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold text-white px-8 py-3 rounded-full font-inter font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;