export default async function decorate(block) {
  const backgroundImage = block.querySelector('img[data-aue-prop="backgroundImage"]');
  const imageAlt = block.querySelector('[data-aue-prop="imageAlt"]');
  const title = block.querySelector('[data-aue-prop="title"]');
  const subtitle = block.querySelector('[data-aue-prop="subtitle"]');
  const ctaText = block.querySelector('[data-aue-prop="ctaText"]');
  const ctaLink = block.querySelector('a[href]');

  // Set background image
  if (backgroundImage) {
    block.style.backgroundImage = `url(${backgroundImage.src})`;
    block.style.backgroundSize = 'cover';
    block.style.backgroundPosition = 'center';
    backgroundImage.closest('picture')?.remove(); // remove <picture>/<img>
  }

  // Create content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('hero-banner-content');

  // Reuse Title
  if (title) {
    title.classList.add('hero-banner-title');
    contentWrapper.appendChild(title);
  }

  // Reuse Subtitle
  if (subtitle) {
    subtitle.classList.add('hero-banner-subtitle');
    contentWrapper.appendChild(subtitle);
  }

  // Reuse CTA
  if (ctaText && ctaLink) {
    ctaLink.textContent = ctaText.textContent;
    ctaLink.classList.add('hero-banner-cta');
    ctaLink.setAttribute('target', '_blank');
    contentWrapper.appendChild(ctaLink);
    ctaText.remove(); // remove the text-only field
  }

  // Append wrapper into block
  block.appendChild(contentWrapper);

  // Remove unused fields (like alt text)
  if (imageAlt) imageAlt.remove();
}
