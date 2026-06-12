import GlassSurface from "./GlassSurface";

const navItems = [
  ["#method", "方法"],
  ["#ai", "AI"],
  ["#work", "作品"],
  ["#about", "关于"],
  ["#contact", "联系"],
];

export default function Nav({ mobileOpen, onToggleMobile, onNavigate }) {
  return (
    <>
      <GlassSurface
        as="nav"
        className="nav"
        aria-label="主导航"
        width="min(calc(100% - 32px), 920px)"
        height={72}
        borderRadius={0}
        borderWidth={0.05}
        brightness={52}
        opacity={0.84}
        blur={9}
        displace={0.28}
        backgroundOpacity={0.27}
        saturation={1.32}
        distortionScale={-104}
        redOffset={0}
        greenOffset={4}
        blueOffset={9}
      >
        <div className="nav__content">
          <a className="brand" href="#top" aria-label="返回首页" onClick={onNavigate("#top")}>
            <span>ZW</span>
            <strong>XUZIWEN</strong>
          </a>

          <div className="nav__links">
            {navItems.map(([href, label]) => (
              <a href={href} key={href} onClick={onNavigate(href)}>
                {label}
              </a>
            ))}
          </div>

          <a className="nav__cta" href="#contact" onClick={onNavigate("#contact")}>
            <span>联系方式</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>

          <button className="menu-toggle" type="button" aria-label="打开导航" aria-expanded={mobileOpen} onClick={onToggleMobile}>
            <span />
            <span />
          </button>
        </div>
      </GlassSurface>

      <div className={`mobile-menu${mobileOpen ? " is-open" : ""}`} id="mobileMenu" aria-hidden={!mobileOpen}>
        {navItems.map(([href, label]) => (
          <a href={href} key={href} onClick={onNavigate(href)}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
