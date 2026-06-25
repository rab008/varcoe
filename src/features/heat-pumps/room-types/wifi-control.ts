import type { Service } from "@/features/services/services-data";

/**
 * WiFi Control page content — transcribed from the live page
 * (https://www.varcoe.co.nz/wifi-control/) into the shared `Service` shape.
 * Rendered at the top-level `/wifi-control` route via `RoomTypeDetail`.
 */
export const wifiControl: Service = {
  slug: "wifi-control",
  title: "WiFi Control",
  icon: "thermostat",
  summary:
    "Manage your climate from anywhere — control heating and cooling from your phone and stop paying to heat an empty house.",
  description:
    "Wi-Fi heat pump and air conditioner control for Auckland homes — adjust temperature, switch heating/cooling and set schedules from your phone, anywhere.",
  detail: {
    heroImage: {
      src: "/images/services/heat-pumps/hero.svg",
      alt: "Controlling a heat pump from a phone app",
    },
    heroTitle:
      "Wi-Fi Heat Pump Control Auckland - Manage Your Climate From Anywhere",
    heroSubtitle: "Manage your climate from anywhere",
    intro: [
      "For Auckland homeowners who want to stop paying to heat an empty house — and just turn it on from their phone on the way home.",
      "Wi-Fi climate control means your heating and cooling system connects to your home network. Download an app on your phone, and now you can adjust temperature, switch between heating and cooling, set schedules — all from anywhere.",
      "Turn the system on before you get home on a cold morning. Switch it off after you've left for the weekend. Adjust the temperature from another room because nobody can agree on comfort.",
    ],
    whyList: {
      title: "Why This Matters",
      items: [
        {
          label: "Save real money on power bills",
          text: "Honestly the biggest benefit. You only run the system when you actually need it — most people forget to turn systems off when they leave. Apps show energy consumption in real time, so you see where your power's going.",
        },
        {
          label: "Control each room differently",
          text: "If you've got a multi-room system, you can set different temperatures in different zones.",
        },
        {
          label: "Set it and forget it",
          text: "Program the system to turn on and off at specific times.",
        },
        {
          label: "Voice commands work",
          text: "If you've got Alexa, Google Home or Apple HomeKit, your climate system talks to them.",
        },
        {
          label: "You know what's happening",
          text: "Apps send notifications if something's wrong, with real-time monitoring so you can check on the system from anywhere.",
        },
      ],
    },
    infoSections: [
      {
        title: "What You're Actually Getting",
        points: [
          { text: "Remote control app." },
          { text: "Scheduling." },
          { text: "Energy reports." },
          { text: "Voice integration." },
          { text: "Presets you can save." },
          { text: "System alerts." },
        ],
      },
      {
        title: "Where This Actually Works Well",
        points: [
          {
            label: "Homes (especially busy ones)",
            text: "Families where people come and go at different times benefit most.",
          },
          {
            label: "Business spaces",
            text: "Offices and retail save money — set schedules so systems only run during business hours.",
          },
        ],
        image: {
          src: "/images/services/heat-pumps/energy.svg",
          alt: "Wi-Fi climate control energy reports",
        },
      },
      {
        title: "The Brands We Work With",
        points: [
          {
            label: "Mitsubishi Electric",
            text: "They've been doing this since 1968. Award-winning app interface, intuitive controls, strong on energy efficiency and quiet operation.",
          },
          {
            label: "Daikin",
            text: "Trusted in NZ for good reason. Advanced scheduling, smart automation and detailed energy monitoring.",
          },
          {
            label: "Panasonic",
            text: "Air-quality focus with nanoe X, paired with an easy-to-use app and energy monitoring. Energy-efficient and trusted in NZ for decades.",
          },
        ],
      },
      {
        title: "Real Installation Reality",
        points: [
          {
            label: "We come assess your setup",
            text: "We look at your system and home network to confirm what's needed.",
          },
          {
            label: "Transparent quote",
            text: "Clear pricing before any work starts.",
          },
          {
            label: "Technicians do the work",
            text: "We fit and connect the Wi-Fi control and set up the app.",
          },
          {
            label: "After we leave",
            text: "You know how to run it — and we're here if anything comes up.",
          },
        ],
        image: {
          src: "/images/services/heat-pumps/installation.svg",
          alt: "Wi-Fi control installation",
        },
      },
      {
        title: "Keeping It Running",
        paragraphs: [
          "An annual service is worth it — check the Wi-Fi connection stability, make sure the app works properly, firmware updates are installed and settings are optimised.",
        ],
        points: [],
        image: {
          src: "/images/services/heat-pumps/maintenance.svg",
          alt: "Wi-Fi control maintenance",
        },
      },
    ],
    experts: {
      title: "Why We're Different",
      paragraphs: [
        "40+ years in heating and cooling. We know Auckland's climate.",
        "We know what homeowners actually need, not what marketing says they need.",
      ],
    },
    closingCta: {
      title: "Ready to Control Your Climate From Your Phone?",
      body: "Free consultation. We'll figure out what makes sense for your home.",
      cta: { label: "Get a free quote", href: "/contact" },
    },
  },
};
