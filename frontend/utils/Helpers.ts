export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
  targetId: string,
) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId.replace('#', ''));
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};
