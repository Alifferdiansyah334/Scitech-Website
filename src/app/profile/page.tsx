import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";
import ProfileSection from "@/components/ProfileSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ProfilePage() {
  return (
    <main className="min-h-screen">
      <MouseGlow />
      <Navbar />
      <ProfileSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
