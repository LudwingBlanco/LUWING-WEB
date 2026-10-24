import type { Project } from "@/data/projects";
import { ProjectPreview, previewUrls } from "@/components/ProjectPreview";

export function BrowserFrame({
  project,
  eager = false,
  className = "",
}: {
  project: Project;
  eager?: boolean;
  className?: string;
}) {
  return (
    <div className={`browser ${className}`} aria-hidden="true">
      <div className="browser-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-url">{previewUrls[project.preview]}</span>
      </div>
      <div className="browser-body">
        <ProjectPreview project={project} eager={eager} />
      </div>
    </div>
  );
}

export function PhoneFrame({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <div className={`phone ${className}`} aria-hidden="true">
      <div className="phone-screen">
        <span className="phone-notch" aria-hidden="true" />
        <ProjectPreview project={project} variant="mobile" />
      </div>
    </div>
  );
}
