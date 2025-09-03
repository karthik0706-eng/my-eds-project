export default async function decorate(block) {
  const title = block.querySelector('[data-aue-prop="title"]');
  const subtitle = block.querySelector('[data-aue-prop="subtitle"]');
  const ctaText = block.querySelector('[data-aue-prop="ctaText"]');
  const ctaLink = block.querySelector('a[href]');
  const imageLink = block.querySelector('a[href]'); // Assuming the image URL is provided as an <a> tag
  const imageAlt = block.querySelector('[data-aue-prop="imageAlt"]');
  const backgroundImage = block.dataset.backgroundImage;

  // Add classes to title and subtitle
  if (title) title.classList.add('hero-banner-title');
  if (subtitle) subtitle.classList.add('hero-banner-subtitle');

  // Handle CTA button
  if (ctaText && ctaLink) {
    const ctaButton = document.createElement('a');
    ctaButton.href = ctaLink.getAttribute('href');
    ctaButton.target = '_blank';
    ctaButton.textContent = ctaText.textContent;
    ctaButton.classList.add('hero-banner-cta');
    ctaText.replaceWith(ctaButton);
  }

  // Handle image rendering
  if (backgroundImage) {
    const img = document.createElement('img');
    img.src = backgroundImage;
    img.alt = imageAlt ? imageAlt.textContent : 'Hero Banner Image';
    img.classList.add('hero-banner-image');
    block.prepend(img);
  } else if (imageLink) {
    const img = document.createElement('img');
    img.src = imageLink.getAttribute('href');
    img.alt = imageAlt ? imageAlt.textContent : 'Hero Banner Image';
    img.classList.add('hero-banner-image');
    imageLink.replaceWith(img);
  }

  // Add block-level class
  block.classList.add('hero-banner');
}