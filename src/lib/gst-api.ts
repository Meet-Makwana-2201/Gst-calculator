// Note: FastGST.in API - You may need to sign up for an API key
// For now, using a mock structure. Replace with actual API endpoint and key.

// Uncomment these when ready to use the real API:
// import axios from 'axios';
// const API_BASE_URL = 'https://api.fastgst.in/v1';
// const API_KEY = process.env.NEXT_PUBLIC_FASTGST_API_KEY || '';

export interface HSNResult {
    hsnCode: string;
    description: string;
    gstRate: number;
    category?: string;
}

// Cache to reduce API calls
const cache = new Map<string, HSNResult[]>();
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export const searchHSNCode = async (query: string): Promise<HSNResult[]> => {
    if (!query || query.length < 2) {
        return [];
    }

    // Check cache first
    const cacheKey = query.toLowerCase();
    const cached = cache.get(cacheKey);
    if (cached) {
        return cached;
    }

    try {
        // TODO: Replace with actual FastGST API call
        // For now, returning mock data as placeholder
        // const response = await axios.get(`${API_BASE_URL}/hsn/search`, {
        //   params: { q: query },
        //   headers: { 'Authorization': `Bearer ${API_KEY}` }
        // });

        // Mock data for demonstration
        const mockResults: HSNResult[] = getMockHSNData(query);

        // Cache the results
        cache.set(cacheKey, mockResults);
        setTimeout(() => cache.delete(cacheKey), CACHE_DURATION);

        return mockResults;
    } catch (error) {
        console.error('Error fetching HSN data:', error);
        throw new Error('Failed to fetch GST rates. Please try again later.');
    }
};

export const getGSTRate = async (hsnCode: string): Promise<number | null> => {
    try {
        const results = await searchHSNCode(hsnCode);
        const match = results.find(r => r.hsnCode === hsnCode);
        return match ? match.gstRate : null;
    } catch (error) {
        console.error('Error fetching GST rate:', error);
        return null;
    }
};

// Mock data function - Replace this with actual API integration
function getMockHSNData(query: string): HSNResult[] {
    const mockDatabase: HSNResult[] = [
        { hsnCode: '1001', description: 'Wheat and meslin', gstRate: 0, category: 'Food' },
        { hsnCode: '0901', description: 'Coffee', gstRate: 5, category: 'Food' },
        { hsnCode: '0902', description: 'Tea', gstRate: 5, category: 'Food' },
        { hsnCode: '1701', description: 'Cane or beet sugar', gstRate: 5, category: 'Food' },
        { hsnCode: '0401', description: 'Milk and cream', gstRate: 0, category: 'Food' },
        { hsnCode: '0402', description: 'Milk powder', gstRate: 5, category: 'Food' },
        { hsnCode: '0405', description: 'Butter', gstRate: 12, category: 'Food' },
        { hsnCode: '0406', description: 'Cheese', gstRate: 12, category: 'Food' },
        { hsnCode: '8517', description: 'Mobile phones', gstRate: 12, category: 'Electronics' },
        { hsnCode: '8471', description: 'Laptops and computers', gstRate: 18, category: 'Electronics' },
        { hsnCode: '8528', description: 'Television sets', gstRate: 18, category: 'Electronics' },
        { hsnCode: '8516', description: 'Electric heaters and hair dryers', gstRate: 18, category: 'Electronics' },
        { hsnCode: '3304', description: 'Beauty and makeup products', gstRate: 18, category: 'Cosmetics' },
        { hsnCode: '3401', description: 'Soap', gstRate: 18, category: 'Personal Care' },
        { hsnCode: '3305', description: 'Hair care products', gstRate: 18, category: 'Personal Care' },
        { hsnCode: '8703', description: 'Motor cars and vehicles', gstRate: 28, category: 'Automobiles' },
        { hsnCode: '8711', description: 'Motorcycles', gstRate: 28, category: 'Automobiles' },
        { hsnCode: '2203', description: 'Beer', gstRate: 28, category: 'Beverages' },
        { hsnCode: '2402', description: 'Cigars and cigarettes', gstRate: 28, category: 'Tobacco' },
        { hsnCode: '9403', description: 'Furniture', gstRate: 18, category: 'Furniture' },
        { hsnCode: '6203', description: 'Men\'s suits and trousers', gstRate: 12, category: 'Textiles' },
        { hsnCode: '6204', description: 'Women\'s suits and dresses', gstRate: 12, category: 'Textiles' },
        { hsnCode: '6402', description: 'Footwear', gstRate: 18, category: 'Footwear' },
        { hsnCode: '4901', description: 'Printed books', gstRate: 0, category: 'Books' },
        { hsnCode: '4902', description: 'Newspapers', gstRate: 0, category: 'Publications' },
    ];

    const lowerQuery = query.toLowerCase();
    return mockDatabase.filter(item =>
        item.hsnCode.includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        (item.category && item.category.toLowerCase().includes(lowerQuery))
    ).slice(0, 10);
}
