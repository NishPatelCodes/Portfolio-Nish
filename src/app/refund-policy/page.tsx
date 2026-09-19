import type { Metadata } from "next";
import Legal from "@/components/LegalPage";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundPage() {
  return <Legal slug="refund-policy" />;
}
