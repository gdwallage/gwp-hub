// Gary Wallage Master Hub - Instant Navigation & Prefetching
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic pre-fetching on card hover for instant subdomain feel
    const cards = document.querySelectorAll('.genre-card');
    const prefetched = new Set();

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const url = card.getAttribute('href');
            if (url && !prefetched.has(url)) {
                prefetched.add(url);
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = url;
                document.head.appendChild(link);
            }
        }, { once: true });
    });
});
