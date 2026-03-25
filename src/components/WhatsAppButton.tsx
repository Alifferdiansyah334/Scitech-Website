import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6287877955526"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-[0_12px_30px_rgba(15,110,62,0.45)] z-50 flex items-center justify-center transition transform hover:scale-110 btn-lift"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
