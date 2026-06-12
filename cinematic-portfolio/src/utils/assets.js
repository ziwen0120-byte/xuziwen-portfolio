export const portfolioAsset = (fileName) => {
  const prefix = window.location.pathname.includes("/cinematic-portfolio/") ? "../portfolio-assets/" : "./portfolio-assets/";
  return `${prefix}${fileName}`;
};
