import type { Metadata } from "next";
import Legal from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return <Legal slug="privacy-policy" />;
}
