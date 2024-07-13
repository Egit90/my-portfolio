import NavBar from "@/components/NavBar";
import InfoSection from "@/components/InfoSection";
import { INFO } from "@/data/Info";
import { Metadata } from "next";
import Projects from "@/components/Projects";
import { MYPROJECTS } from "@/data/projects";

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
      <Projects myProjects={MYPROJECTS} />
    </main>
  );
}
