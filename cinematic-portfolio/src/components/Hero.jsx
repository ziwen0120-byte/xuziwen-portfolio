import BorderGlow from "./BorderGlow";
import HeroStoryScroll from "./HeroStoryScroll";
import { portfolioAsset } from "../utils/assets";
import heroVideo from "../../assets/video/sketch-to-reality-sports-car.mp4";

export default function Hero({ onNavigate }) {
  return (
    <section className="hero" aria-label="作品集首屏">
      <video
        id="scrollVideo"
        className="hero-video"
        muted
        playsInline
        preload="auto"
        tabIndex="-1"
        aria-label="电影感 UI/UX 作品集背景视频"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div id="videoStage" className="video-stage" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="hero__shade" aria-hidden="true" />

      <HeroStoryScroll onNavigate={onNavigate} />

      <BorderGlow as="aside" className="hero-card" aria-label="个人摘要">
        <img className="hero-card__avatar" src={portfolioAsset("avatar-portrait-new.png")} alt="徐梓文头像" />
        <div>
          <span>Available for UI/UX roles</span>
          <strong>徐梓文</strong>
          <p>5 年+ UI/UX 与跨行业产品设计经验，擅长把业务目标转译为可执行的界面、流程和设计系统。</p>
        </div>
      </BorderGlow>

      <div className="scroll-cue" aria-hidden="true">
        <span />
        Scroll
      </div>
    </section>
  );
}
