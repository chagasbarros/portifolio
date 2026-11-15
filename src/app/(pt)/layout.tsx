// @ts-ignore: allow side-effect CSS import without type declarations
import "../globals.css";
import RootDocument from "@/components/RootDocument";
import { buildMetadata } from "@/i18n";

export const metadata = buildMetadata("pt");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="pt">{children}</RootDocument>;
}
