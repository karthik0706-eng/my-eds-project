export default async function decorate(block) {
  const title = block.querySelector(':scope > div > div:first-child');
  const description = block.querySelector(':scope > div > div:nth-child(2)');
  const cta = block.querySelector(':scope > div > div:nth-child(3)');
  const backgroundImage = block.dataset.backgroundImage;

  if (title) title.classList.add('hero-banner-title');
  if (description) description.classList.add('hero-banner-description');
  if (cta) cta.classList.add('hero-banner-cta');

  if (backgroundImage) {
    block.style.backgroundImage = `url(${backgroundImage})`;
    block.style.backgroundSize = 'cover';
    block.style.backgroundPosition = 'center';
  }

  block.classList.add('hero-banner');
}