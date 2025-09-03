export default async function decorate(block) {
  const title = block.querySelector('[data-aue-prop="title"]');
  const subtitle = block.querySelector('[data-aue-prop="subtitle"]');
  const ctaText = block.querySelector('[data-aue-prop="ctaText"]');
  const ctaLink = block.querySelector('a[href]');
  const backgroundImage = block.dataset.backgroundImage;
  const imageAlt = block.querySelector('[data-aue-prop="imageAlt"]');

  if (title) title.classList.add('hero-banner-title');
  if (subtitle) subtitle.classList.add('hero-banner-subtitle');
  if (ctaText && ctaLink) {
    const ctaButton = document.createElement('a');
    ctaButton.href = ctaLink.getAttribute('href');
    ctaButton.target = '_blank';
    ctaButton.textContent = ctaText.textContent;
    ctaButton.classList.add('hero-banner-cta');
    ctaText.replaceWith(ctaButton);
  }
  if (backgroundImage) {
    block.style.backgroundImage = `url(${backgroundImage})`;
    block.style.backgroundSize = 'cover';
    block.style.backgroundPosition = 'center';
  }
  if (imageAlt) {
    block.setAttribute('aria-label', imageAlt.textContent);
  }

  block.classList.add('hero-banner');
}