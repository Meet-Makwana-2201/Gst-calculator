import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://onecalculator.online';

    // Static routes
    const routes = [
        '',
        '/about',
        '/calculator',
        '/contact',
        '/faq',
        '/gst-rates',
        '/privacy',
        '/blog',
        '/calculators',
        '/calculators/gst',
        '/calculators/percentage',
        '/calculators/discount',
        '/calculators/profit-loss',
        '/calculators/simple-interest',
        '/calculators/compound-interest',
        '/calculators/emi',
    ];

    // Get blog posts dynamically
    const blogDir = path.join(process.cwd(), 'src/app/blog');
    const blogPosts = fs.readdirSync(blogDir).filter(file => {
        const filePath = path.join(blogDir, file);
        return fs.statSync(filePath).isDirectory() && file !== 'page.tsx'; // Exclude page.tsx if it's not a folder (though readdir returns names)
    }).filter(dir => {
        // Ensure it has a page.tsx inside
        return fs.existsSync(path.join(blogDir, dir, 'page.tsx'));
    });

    const blogRoutes = blogPosts.map(slug => `/blog/${slug}`);

    const allRoutes = [...routes, ...blogRoutes];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
