export const metadata = {
  title: "Contact Us - Get Support or Feedback | GST Calculator",
  description: "Have questions or need help? Contact us today. We're here to assist you with GST calculations and support requests.",
  keywords: ["Contact GST Calculator", "Support", "Feedback", "Get Help GST"],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://easy-gst-calculator.netlify.app/contact",
  },
  openGraph: {
    title: "Contact Us - Get Support or Feedback | GST Calculator",
    description: "Have questions or need help? Contact us today. We're here to assist you with GST calculations and support requests.",
    url: "https://easy-gst-calculator.netlify.app/contact",
    siteName: "GST Calculator",
    images: [
      {
        url: "https://easy-gst-calculator.netlify.app/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact GST Calculator",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get Support or Feedback | GST Calculator",
    description: "Have questions or need help? Contact us today. We're here to assist you with GST calculations and support requests.",
    images: ["https://easy-gst-calculator.netlify.app/og-contact.jpg"],
  },
};



export default function Contact() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Contact Us</h2>
      <p>If you have any questions or need support, please reach out to us.</p>
      <form className="mt-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 border w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 border w-full"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            className="p-2 border w-full"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  )
}
