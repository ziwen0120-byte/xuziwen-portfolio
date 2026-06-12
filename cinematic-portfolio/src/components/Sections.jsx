import { useEffect, useState } from "react";
import { aiCapabilities, methodPanels, metrics, projects } from "../data/portfolioData";
import { portfolioAsset } from "../utils/assets";
import GlassSurface from "./GlassSurface";

const datingPrototypeUrl = portfolioAsset("dating-profile-prototype-package/index.html");

function PrototypePhone({ title = "Dating profile AI prototype" }) {
  return (
    <div className="ai-prototype-shell">
      <span className="ai-device-button ai-device-button--mute" aria-hidden="true" />
      <span className="ai-device-button ai-device-button--volume-up" aria-hidden="true" />
      <span className="ai-device-button ai-device-button--volume-down" aria-hidden="true" />
      <span className="ai-device-button ai-device-button--power" aria-hidden="true" />
      <div className="ai-prototype-screen">
        <div className="ai-device-island" aria-hidden="true">
          <span />
        </div>
        <iframe className="ai-prototype-frame" src={datingPrototypeUrl} title={title} loading="lazy" />
      </div>
    </div>
  );
}

export function Metrics() {
  return (
    <GlassSurface
      as="section"
      className="metrics section"
      width="100%"
      height="auto"
      borderRadius={0}
      borderWidth={0.025}
      brightness={46}
      opacity={0.82}
      blur={15}
      displace={0.06}
      backgroundOpacity={0.14}
      saturation={1.1}
      distortionScale={-20}
      redOffset={0}
      greenOffset={1}
      blueOffset={2}
    >
      <div className="metrics__inner">
        {metrics.map(([value, label]) => (
          <div className="metric reveal" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </GlassSurface>
  );
}

export function Method() {
  return (
    <section id="method" className="method">
      <div className="method__pin">
        <div className="method__intro">
          <p className="eyebrow">Design Method</p>
          <h2>从业务判断到可验证体验</h2>
        </div>
        <div className="method-track" id="methodTrack">
          {methodPanels.map((panel) => (
            <article className="method-panel" key={panel.index}>
              <span>{panel.index}</span>
              <h3>{panel.title}</h3>
              <p>{panel.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AICapability() {
  const [prototypeOpen, setPrototypeOpen] = useState(false);

  useEffect(() => {
    if (!prototypeOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setPrototypeOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [prototypeOpen]);

  return (
    <>
      <section id="ai" className="section ai-capability">
        <div className="ai-capability__head reveal">
          <div>
            <h2>AI 能力展示</h2>
          </div>
          <div className="ai-capability__summary">
            <p className="eyebrow">AI Capability</p>
            <p>AI 能力不只是会出图，而是能把调研、策略、文案、视觉和原型串成可复用流程。</p>
          </div>
        </div>

        <div className="ai-capability__layout">
          <div className="ai-capability__grid">
            {aiCapabilities.map((item) => (
              <article className="ai-card reveal" key={item.index}>
                <div className="ai-card__icon" aria-hidden="true">
                  <span>{item.index}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="ai-card__footer">
                  <strong>{item.index}</strong>
                  <div>
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="ai-lab reveal" aria-label="AI 工作流展示">
            <div className="ai-lab__top">
              <div>
                <p>Prompt Lab</p>
                <strong>Interactive</strong>
              </div>
              <button className="ai-lab__fullscreen" type="button" onClick={() => setPrototypeOpen(true)} aria-label="打开全屏体验">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5" />
                </svg>
                全屏
              </button>
            </div>
            <div className="ai-lab__notice">
              <span aria-hidden="true" />
              本样本只展示推荐页到打招呼路径，更多内容敬请期待。
            </div>
            <PrototypePhone />
          </aside>
        </div>
      </section>

      <div
        className={`prototype-modal${prototypeOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="AI 原型全屏体验"
        aria-hidden={!prototypeOpen}
        onClick={() => setPrototypeOpen(false)}
      >
        <button className="prototype-modal__close" type="button" aria-label="关闭全屏体验" onClick={() => setPrototypeOpen(false)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        <div className="prototype-modal__stage" onClick={(event) => event.stopPropagation()}>
          <div className="prototype-modal__label">
            <span>Interactive Prototype</span>
            <strong>沉浸式浏览与操作</strong>
          </div>
          <div className="prototype-modal__phone">
            <PrototypePhone title="Dating profile AI prototype fullscreen" />
          </div>
        </div>
      </div>
    </>
  );
}

export function Work({ onSelectProject }) {
  return (
    <section id="work" className="section work">
      <div className="section-head reveal">
        <p className="eyebrow">Selected Work</p>
        <h2>项目作品</h2>
        <p>覆盖移动端点餐、小程序、B 端后台、车载 HMI、数字大屏与品牌视觉。</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card reveal" key={project.title} onClick={() => onSelectProject(project.detail)}>
            <img src={project.cover} alt={project.alt} />
            <div className="project-card__body">
              <span>
                {project.index} · {project.type}
              </span>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section about">
      <div className="about__photo reveal">
        <img src={portfolioAsset("profile-workdesk-new.png")} alt="设计工作台视觉图" />
        <strong>Designed by XUZIWEN</strong>
      </div>
      <div className="about__content reveal">
        <p className="eyebrow">About Me</p>
        <h2>
          <span>业务优先，</span>
          <span>系统落地，</span>
          <span>视觉有记忆点。</span>
        </h2>
        <p>
          我有业务侧一线经验，也有 UI/UX、HMI、数字大屏和运营视觉实践。
          设计时会先判断目标和约束，再进入信息架构、视觉系统和可验证原型。
        </p>
        <div className="about-list">
          <span>Business first</span>
          <span>System thinking</span>
          <span>AI collaboration</span>
        </div>
      </div>
    </section>
  );
}

export function Contact({ onNavigate }) {
  return (
    <section id="contact" className="contact">
      <div className="contact__panel reveal">
        <p className="eyebrow">Contact</p>
        <h2>
          <span>Let's build</span>
          <span>something</span>
          <span>useful.</span>
        </h2>
        <p>如果你需要一位理解业务、能做视觉、能落地交互，也能拥抱 AI 工作流的 UI/UX 设计师，我们可以聊聊。</p>
        <div className="contact__actions">
          <a className="button button--gold" href="mailto:ziwen0120@yeah.net">
            ziwen0120@yeah.net
          </a>
          <a className="button" href="tel:13777835072">
            13777835072
          </a>
        </div>
      </div>
      <aside className="qr-card reveal">
        <div className="qr-card__code">
          <img src={portfolioAsset("wechat-qr.png")} alt="徐梓文微信二维码" />
        </div>
        <p className="qr-card__hint">
          扫码添加微信时，请备注来意、岗位信息或项目背景。招聘沟通建议附上职位描述、团队方向与工作地点；项目合作可说明周期、预算范围及期望交付内容，方便我更快理解需求并给出回应。
        </p>
        <div className="qr-card__illustration" aria-hidden="true">
          <img src={portfolioAsset("contact-illustration.png")} alt="" />
        </div>
        <div>
          <strong>WeChat</strong>
          <span>@徐梓文</span>
        </div>
      </aside>
    </section>
  );
}
