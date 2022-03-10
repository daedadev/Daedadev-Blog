export default function handleScroll() {
  const MaxHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const ScrollPercent = (window.scrollY / MaxHeight) * 100;
  return ScrollPercent;
}

export function checkScrolled(scrollAmount) {
  let scrollCheck;
  if (window.scrollY > scrollAmount) {
    scrollCheck = true;
    return scrollCheck;
  } else {
    scrollCheck = false;
    return scrollCheck;
  }
}

export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
