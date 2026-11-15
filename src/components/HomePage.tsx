import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { dictionaries, type Locale } from "@/i18n";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  return (
    <>
      <Navbar t={t.nav} locale={locale} />
      <main>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Stack t={t.stack} />
        <Projects t={t.projects} />
        <Experience t={t.experience} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
