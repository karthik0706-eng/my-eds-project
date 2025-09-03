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
    backgroundImage.remove(); // Remove the <img> tag after setting the background
  }

  // Wrap content in a container
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('hero-banner-content');

  if (title) {
    title.classList.add('hero-banner-title');
    contentWrapper.appendChild(title);
  }

  if (subtitle) {
    subtitle.classList.add('hero-banner-subtitle');
    contentWrapper.appendChild(subtitle);
  }

  if (ctaText && ctaLink) {
    const ctaButton = document.createElement('a');
    ctaButton.href = ctaLink.getAttribute('href');
    ctaButton.target = '_blank';
    ctaButton.textContent = ctaText.textContent;
    ctaButton.classList.add('hero-banner-cta');
    contentWrapper.appendChild(ctaButton);
  }

  // Add content wrapper to the block
  block.appendChild(contentWrapper);

  // Remove the alt text div after setting it
  if (imageAlt) {
    imageAlt.remove();
  }
}