import type { Metadata } from "next";
import Legal from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return <Legal slug="terms-conditions" />;
}
