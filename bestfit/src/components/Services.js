import React from "react";
import "../App.css";

const Services = () => {
  const servicesData = [
    {
      title: "Women’s Hormonal Health",
      focus: "Focus on- PCOS, PCOD, Polycystic Ovary Syndrome (PCOS), Endometriosis, Perimenopause / Menopause, Menopause.",
      description:
        "Hormonal health impacts every stage of life. Our expert plans help manage PCOS, Endometriosis, and Menopause symptoms, restoring balance, boosting energy, and supporting long-term wellness through tailored nutrition strategies.",
    },
    {
      title: "Mother & Pregnancy Care",
      focus: "Focus on- Mother Care, Pregnancy, Pregnancy Diet, Fertility, Enhancing your relationship with food and your body.",
      description:
        "Nourishing motherhood starts with the right nutrition. We provide comprehensive care for fertility, pregnancy, and postnatal recovery with personalized diet plans. Our approach ensures both mother and baby thrive while fostering a healthy relationship with food during this special journey.",
    },
    {
      title: "Weight Management",
      focus: "Focus on- Weight Loss, Weight Gain, Health & Weight Management, Weight concern / Alternatives to dieting",
      description:
        "Achieve your ideal weight with sustainable solutions. Whether it’s weight loss, weight gain, or maintaining balance, our programs focus on nutrition and lifestyle changes for lasting results—without fad diets or extreme restrictions.",
    },
    {
      title: "Metabolic & Chronic Conditions",
      focus: "Focus on- Diabetes, Diabetes/Insulin Resistance, Thyroid, Fatty Liver, Kidney Care.",
      description:
        "Managing chronic conditions requires precision and care. We offer therapeutic diets for Diabetes, Thyroid disorders, Fatty Liver, and Kidney health, making nutrition a powerful tool for better metabolic function and overall well-being.",
    },
    {
      title: "Gut & Digestive Health",
      focus: "Focus on- Gut Health, Body Cleansing Diet, Low mood/energy.",
      description:
        "A healthy gut is the foundation of vitality. Our plans improve digestion, reduce bloating, and restore gut balance through nutrient-rich, cleansing diets that naturally boost energy and mood.",
    },
    {
      title: "Short-Term Goal Diet",
      focus: "Focus on- Effective weight loss or gain for upcoming events or special occasions",
      description:
        "Need quick yet healthy results for an upcoming event? Our short-term goal diet plans are designed for effective weight loss or gain without compromising your health. These focused programs combine smart nutrition strategies with practical lifestyle tips to help you look and feel your best—just in time for your special day.",
    },
    {
      title: "Specialized Nutrition",
      focus: "Focus on- Sports Nutrition, Nutrition for Kids, Bone and Joint Health, Senior Care.",
      description:
        "Every stage of life needs unique nutrition. From growing kids to athletes and seniors, our specialized plans ensure strong bones, energy, and vitality tailored to your lifestyle and health goals.",
    },
    {
      title: "Therapeutic & Clinical Diets",
      focus: "Focus on- Autoimmune Conditions, Neurological Conditions, Eating Disorders, Therapeutic Diets.",
      description:
        "For complex health conditions, we provide evidence-based therapeutic diets for autoimmune disorders, neurological issues, and eating disorders. Our approach combines medical nutrition therapy with practical, easy-to-follow plans for long-term recovery and wellness.",
    },
  ];

  return (
    <div className="services-container">
      {/* Banner */}
      <div className="services-banner">
        <div className="services-overlay"></div>
        <div className="services-banner-text">Our Services</div>
      </div>

      {/* Services Content */}
      <div className="services-content">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-focus">{service.focus}</p>
            <p className="service-description">{service.description}</p>
          </div>
        ))}

        {/* WhatsApp Booking Button */}
        <a
          href="https://wa.me/918368105506"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Book Your Appointment on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Services;
