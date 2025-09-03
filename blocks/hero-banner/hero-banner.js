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

  // Create content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('hero-banner-content');

  // Add title
  if (title) {
    const titleElement = document.createElement('h1');
    titleElement.textContent = title.textContent;
    titleElement.classList.add('hero-banner-title');
    contentWrapper.appendChild(titleElement);
  }

  // Add subtitle
  if (subtitle) {
    const subtitleElement = document.createElement('h2');
    subtitleElement.textContent = subtitle.textContent;
    subtitleElement.classList.add('hero-banner-subtitle');
    contentWrapper.appendChild(subtitleElement);
  }

  // Add CTA button
  if (ctaText && ctaLink) {
    const ctaButton = document.createElement('a');
    ctaButton.href = ctaLink.getAttribute('href');
    ctaButton.target = '_blank';
    ctaButton.textContent = ctaText.textContent;
    ctaButton.classList.add('hero-banner-cta');
    contentWrapper.appendChild(ctaButton);
  }

  // Append content wrapper to the block
  block.appendChild(contentWrapper);

  // Remove the alt text div after setting it
  if (imageAlt) {
    imageAlt.remove();
  }
}