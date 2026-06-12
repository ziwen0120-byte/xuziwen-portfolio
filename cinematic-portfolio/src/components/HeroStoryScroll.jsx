import ScrollFloat from "./ScrollFloat";

export default function HeroStoryScroll({ onNavigate }) {
  return (
    <div className="hero-overlays" id="heroOverlays">
      <div className="hero-block hero-block--intro is-active" data-start="0" data-end="0.25">
        <p className="eyebrow">UI/UX Designer</p>
        <ScrollFloat
          as="h1"
          className="hero-title"
          lines={["XUZIWEN", "PORTFOLIO"]}
          label="XUZIWEN PORTFOLIO"
          startProgress={0}
          endProgress={0.18}
          initialVisible
        />
      </div>

      <div className="hero-block hero-block--left" data-start="0.23" data-end="0.5">
        <p className="eyebrow">Business · Structure</p>
        <ScrollFloat as="h2" lines={["把复杂业务", "转译成清晰体验"]} label="把复杂业务 转译成清晰体验" startProgress={0.18} endProgress={0.34} />
      </div>

      <div className="hero-block hero-block--right" data-start="0.48" data-end="0.75">
        <p className="eyebrow">Visual · Handoff</p>
        <ScrollFloat as="h2" lines={["让视觉系统", "服务真实交付"]} label="让视觉系统 服务真实交付" startProgress={0.43} endProgress={0.59} />
      </div>

      <div className="hero-block" data-start="0.73" data-end="1">
        <p className="eyebrow">AI Enhanced Workflow</p>
        <ScrollFloat as="h2" lines={["用 AI 加速探索", "由设计判断收束"]} label="用 AI 加速探索 由设计判断收束" startProgress={0.68} endProgress={0.84} />
        <div className="hero__bottom">
          <p>把调研、结构、视觉和验证串成一条更快的工作流，让页面既能打动人，也能被团队真正落地。</p>
          <a className="button button--gold" href="#work" onClick={onNavigate("#work")}>
            查看作品
          </a>
        </div>
      </div>
    </div>
  );
}
