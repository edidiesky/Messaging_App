import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ProviderLayout from "@/providers/StoreProvider";

export const metadata: Metadata = {
    title: "NexChat",
    description: "Connecting Dreams with Opportunities",
};

export default function LandingPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <ProviderLayout>
                <body
                    className={""}
                >
                    <Header />
                    {children}
                    <Footer />
                </body>
            </ProviderLayout>
           
            
        </html>
    );
}
