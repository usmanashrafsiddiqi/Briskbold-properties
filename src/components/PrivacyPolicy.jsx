import React from "react";
import Footer from "./Footer";
import { useEffect } from "react";
export default function PrivacyPolicy() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
      }, []);
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/blurbg.jpg')",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 pt-40 pb-20">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-10 text-center bg-gradient-to-r from-[#0d4752] to-[#105561] text-transparent bg-clip-text">
            Privacy Policy
          </h1>

          {/* Subheading */}
          <p className="text-lg mb-20 text-center max-w-3xl mx-auto">
            At BriskBold Properties, your privacy is our priority. This policy outlines how we collect,
            use, and protect your personal data while delivering exceptional real estate services.
          </p>

          {/* Split Content */}
          <div className="flex flex-col lg:flex-row justify-between gap-24 w-full">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 text-left text-base space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-2 text-white">Who We Are:</h2>
                <p>
                  BriskBold Properties is a trusted real estate agency specializing in buying, selling,
                  and renting premium properties. This privacy policy applies to all data collected
                  through our website and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2 text-white">Information Collection:</h2>
                <p>
                  We may collect personal details such as your name, contact number, email address,
                  and preferences when you use our website, fill out contact forms, or engage with our listings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2 text-white">How We Use Your Information:</h2>
                <p>
                  Your information is used to respond to inquiries, schedule property visits,
                  provide customized recommendations, and send you updates about properties
                  matching your interests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2 text-white">Data Protection:</h2>
                <p>
                  We implement strict security measures to safeguard your information.
                  However, no method of transmission over the internet is entirely secure.
                  We strive to use commercially acceptable means to protect your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2 text-white">Third-Party Services:</h2>
                <p>
                  We may use trusted third-party services like Google Analytics to enhance our platform.
                  These services may collect information through cookies and usage data.
                </p>
              </section>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 text-left text-base space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-2 text-white">Cookies:</h2>
                <p>
                  Our site uses cookies to enhance user experience. You can choose to disable cookies
                  through your browser settings, but this may affect certain features of the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2 text-white">Sharing of Information:</h2>
                <p>
                  We do not sell or rent your personal information. We may share information with trusted
                  partners for purposes such as marketing or property-related services — all under confidentiality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2 text-white">User Rights:</h2>
                <p>
                  You have the right to access, correct, or delete your personal data.
                  For any such requests, contact us at the details provided below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2 text-white">Policy Updates:</h2>
                <p>
                  This Privacy Policy may be updated from time to time. We encourage you to review
                  this page periodically to stay informed about how we protect your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-2 text-white">Contact Us:</h2>
                <p>
                  If you have questions about this Privacy Policy or our data handling practices,
                  feel free to contact us at <strong>info@briskboldproperties.com</strong>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
