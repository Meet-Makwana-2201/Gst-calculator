import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: "Embeddable GST Calculator Widget - Add to Your Website",
  description: "Embed our free GST calculator widget on your website. Easy integration with iframe or script tag. Perfect for accounting websites, business portals, and more.",
  keywords: [
    "GST calculator widget",
    "embed GST calculator",
    "GST calculator iframe",
    "website widget",
    "GST calculator plugin",
  ],
};

export default function Widget() {
  const iframeCode = `<iframe 
  src="https://easy-gst-calculator.netlify.app/widget/embed" 
  width="100%" 
  height="600" 
  frameborder="0" 
  style="border: 1px solid #e5e7eb; border-radius: 12px;"
></iframe>`;

  const scriptCode = `<!-- GST Calculator Widget -->
<div id="gst-calculator-widget"></div>
<script src="https://easy-gst-calculator.netlify.app/widget/embed.js" async></script>`;

  return (
    <main className="flex flex-col min-h-screen">
      <section className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
            Embed GST Calculator Widget
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Add our free GST calculator to your website in minutes. Perfect for accounting websites, business portals, and e-commerce sites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 hover-lift">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Iframe Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Easy integration using an iframe. Copy and paste the code below into your HTML.
              </p>
              <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-xs">
                  <code>{iframeCode}</code>
                </pre>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(iframeCode);
                  }}
                  className="absolute top-2 right-2"
                  size="sm"
                  variant="outline"
                >
                  Copy
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2 hover-lift">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Script Tag Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                More flexible integration using JavaScript. Works with React, Vue, and vanilla HTML.
              </p>
              <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-xs">
                  <code>{scriptCode}</code>
                </pre>
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(scriptCode);
                  }}
                  className="absolute top-2 right-2"
                  size="sm"
                  variant="outline"
                >
                  Copy
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-2">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Free to use</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No API keys required</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Responsive design</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Supports IGST/CGST/SGST</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Currency support (₹ & $)</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Dark mode support</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Need Custom Integration?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We offer custom widget integrations and white-label solutions for businesses. Contact us for enterprise solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all hover-lift shadow-lg"
          >
            Contact for Enterprise Solutions
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}

