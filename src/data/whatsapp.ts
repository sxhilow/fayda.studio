const phoneNumber = "27812765709";
const message = "Hi Sahil! 👋 I'm interested in working with Fayda Studio. Can we chat about a project?";

export const whatsappData = {
  phoneNumber,
  message,
  link: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
};
