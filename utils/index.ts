export default function handleScroll(): number {
  const MaxHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const ScrollPercent = (window.scrollY / MaxHeight) * 100;
  return ScrollPercent;
}

export function checkScrolled(scrollAmount: number) {
  let scrollCheck;
  if (window.scrollY > scrollAmount) {
    scrollCheck = true;
    return scrollCheck;
  } else {
    scrollCheck = false;
    return scrollCheck;
  }
}

