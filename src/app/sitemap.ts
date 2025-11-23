import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://easy-gst-calculator.netlify.app';

    const routes = [
        '',
        '/about',
        '/calculator',
        '/contact',
        '/faq',
        '/gst-rates',
        '/privacy',
        '/blog',
        '/blog/difference-between-gst-and-vat',
        '/blog/gst-calculation-for-freelancers-india',
        '/blog/gst-calculator-excel-download',
        '/blog/gst-rate-chart-2025-india',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
