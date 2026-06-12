import { useEffect } from "react";

export default function ProjectModal({ image, onClose }) {
  const isOpen = Boolean(image);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div className={`project-modal${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen} role="dialog" aria-label="项目详情预览" onClick={onClose}>
      <button className="project-modal__close" type="button" aria-label="关闭项目详情" onClick={onClose}>
        Close
      </button>
      {image ? <img src={image} alt="项目详情图" onClick={(event) => event.stopPropagation()} /> : null}
    </div>
  );
}
