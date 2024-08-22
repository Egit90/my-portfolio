import NavBar from "@/components/NavBar";
import InfoSection from "@/components/InfoSection";
import { INFO } from "@/data/Info";
import { Metadata } from "next";
import Projects from "@/components/Projects";
import { MYPROJECTS } from "@/data/projects";
import Footer from "@/components/footer";
import Line from "@/components/Line";

export const metadata: Metadata = {
  title: INFO.pageTitle,
  description: INFO.pageDescription,
  keywords: INFO.keywords.join(", "),
};

export default function Home() {
  return (
    <main className="bg-white px-8 min-h-screen">
      <NavBar />
      <InfoSection />
      <Line Section="Learning Projects" />
      <Projects myProjects={MYPROJECTS} />
      <Footer />
    </main>
  );
}
