export function updateMeta({ title, description, path }) {
    document.title = title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta && description) {
        descMeta.setAttribute('content', description);
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
        canonical.setAttribute('href', `https://bouayaben.com${path}`);
    }
}
