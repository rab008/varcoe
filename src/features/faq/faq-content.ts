/**
 * Static FAQ content (Varcoe heat-pump support). Single source of truth for the
 * `/faq` page and its FAQPage JSON-LD. Text cleaned from the supplied document.
 */

export type FaqItem = { question: string; answer: string };
export type TimerVideo = {
  brand: string;
  videoId: string;
  description: string;
};

export const faqContent = {
  eyebrow: "Heat pump help",
  title: "Frequently Asked Questions",
  intro:
    "Quick answers to the questions our Auckland team hears most often. Can't find what you need? Get in touch and we'll help.",

  items: [
    {
      question: "Do I need to clean my heat pump filters?",
      answer:
        "Yes — for the best airflow. Clean the heat pump filters approximately every three months for the best results and optimal airflow.",
    },
    {
      question:
        "My heat pump has stopped working and the power light is flashing?",
      answer:
        "In the colder months this means the outdoor unit has gone into defrost mode. This is normal and should take about 15 minutes to complete. Leave the unit as is and it will return to normal operation.",
    },
    {
      question:
        "My heat pump remote screen is blank and is not transmitting (beeping)?",
      answer:
        "In most cases you'll need to change the batteries in your remote. Depending on your model they sit on the back of the remote and typically take 2 × AA batteries.",
    },
    {
      question: "My outdoor heat pump unit has water coming from it?",
      answer:
        "If it's coming from the drain, that's moisture removed from inside — normal. If it's coming from under the outdoor unit, that's condensation, which is also normal.",
    },
    {
      question: "I've set my heat pump timer but the heat pump hasn't come on?",
      answer:
        "Check the unit — the timer light should be on. If it isn't, repeat the process of setting the timer: aim the remote at the heat pump, and when you hear a beep you'll know the timer has been set.",
    },
    {
      question: "Does my heat pump need servicing?",
      answer:
        "Yes — manufacturers typically recommend servicing a heat pump yearly.",
    },
    {
      question:
        "There are plants around my outdoor heat pump unit — is that going to be a problem?",
      answer:
        "It can be. It's important to keep the outdoor unit clear of any debris and greenery so it can breathe and run efficiently.",
    },
  ] satisfies FaqItem[],

  timer: {
    eyebrow: "Video guides",
    title: "Setting your heat pump timer",
    intro:
      "Watch these quick videos showing how to set the timer on a Panasonic, Daikin, or Mitsubishi heat pump remote.",
    videos: [
      {
        brand: "Panasonic Heat Pump",
        videoId: "i3z1Z0_keLM",
        description: "How to set the timer function on a Panasonic heat pump.",
      },
      {
        brand: "Daikin Heat Pump",
        videoId: "n_oR0dpvlWg",
        description: "How to set the timer function on a Daikin heat pump.",
      },
      {
        brand: "Mitsubishi Heat Pump",
        videoId: "ps9JeMgwakw",
        description: "How to set the timer function on a Mitsubishi heat pump.",
      },
    ] satisfies TimerVideo[],
  },

  contact: {
    text: "Still have questions? Contact us anytime — we're on the phone Monday to Friday, 9am–5pm.",
    cta: { label: "Contact Varcoe", href: "/contact" },
  },
} as const;
