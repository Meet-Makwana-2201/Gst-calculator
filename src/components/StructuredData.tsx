import Head from 'next/head';

interface StructuredDataProps {
    data: object;
}

export const StructuredData = ({ data }: StructuredDataProps) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
};

export const generateSoftwareSchema = (name: string, description: string, url: string) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: name,
        description: description,
        url: url,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
        },
    };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
};
