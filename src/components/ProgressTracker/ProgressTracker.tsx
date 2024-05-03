import type { FC } from "react";
import { ProgressTracker } from "@atlaskit/progress-tracker";
import type { Stages } from "@atlaskit/progress-tracker";

interface TrackerProps {
  items: Stages;
}

const Tracker: FC<TrackerProps> = ({ items }) => (
  <div className="tracker-container not-content link-style">
    <ProgressTracker items={items} spacing="comfortable" />
  </div>
);

export default Tracker;