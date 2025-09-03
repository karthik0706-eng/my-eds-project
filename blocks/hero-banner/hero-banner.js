export default async function decorate(block) {
  const config = {};
  block.querySelectorAll(':scope > div').forEach((row) => {
    const [key, value] = row.children;
    if (key && value) {
      config[key.textContent.trim()] = value.textContent.trim();
    }
  });

  block.innerHTML = '';

  const backgroundImage = config.backgroundImage || '';
  const imageAlt = config.imageAlt || '';
  const title = config.title || '';
  const subtitle = config.subtitle || '';
  const ctaText = config.ctaText || '';
  const ctaLink = config.ctaLink || '#';

  block.style.backgroundImage = `url(${backgroundImage})`;
  block.style.backgroundSize = 'cover';
  block.style.backgroundPosition = 'center';

  const content = document.createElement('div');
  content.className = 'hero-banner-content';

  if (title) {
    const h1 = document.createElement('h1');
    h1.textContent = title;
    content.appendChild(h1);
  }

  if (subtitle) {
    const h2 = document.createElement('h2');
    h2.textContent = subtitle;
    content.appendChild(h2);
  }

  if (ctaText) {
    const cta = document.createElement('a');
    cta.href = ctaLink;
    cta.target = '_blank';
    cta.textContent = ctaText;
    cta.className = 'hero-banner-cta';
    content.appendChild(cta);
  }

  block.appendChild(content);
}