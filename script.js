const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = `${text} ✓`;
      setTimeout(() => {
        button.textContent = text;
      }, 1800);
    } catch (error) {
      console.error('Copy failed', error);
      alert('Unable to copy, please copy manually.');
    }
  });
});

const socialLinks = {
  facebook: 'https://www.facebook.com',
  instagram: 'https://www.instagram.com',
  twitter: 'https://www.twitter.com',
  youtube: 'https://www.youtube.com',
  whatsapp: 'https://wa.me/97517589193',
};

Object.entries(socialLinks).forEach(([key, url]) => {
  const anchor = document.getElementById(`${key}-link`);
  if (anchor) {
    anchor.href = url;
  }
});
