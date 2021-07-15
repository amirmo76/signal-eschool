import faLang from "../../../statics/values/langs/fa.json";

import { ReactComponent as DashboardSVG } from "../../../statics/svgs/dashboard.svg";
import { ReactComponent as ContentSVG } from "../../../statics/svgs/content.svg";
import { ReactComponent as AssignmentSVG } from "../../../statics/svgs/assignment.svg";
import { ReactComponent as ProjectSVG } from "../../../statics/svgs/project.svg";
import { ReactComponent as QuizSVG } from "../../../statics/svgs/quiz.svg";
import { ReactComponent as ChartIconSVG } from "../../../statics/svgs/chart.svg";

const items = [
  {
    id: 0,
    title: faLang.dashboard,
    Icon: DashboardSVG,
    pathname: "dashboard",
  },
  {
    id: 1,
    title: faLang.contents,
    Icon: ContentSVG,
    pathname: "content",
  },
  {
    id: 2,
    title: faLang.assignments,
    Icon: AssignmentSVG,
    pathname: "assignment",
  },
  {
    id: 3,
    title: faLang.projects,
    Icon: ProjectSVG,
    pathname: "project",
  },
  {
    id: 4,
    title: faLang.quizes,
    Icon: QuizSVG,
    pathname: "quiz",
  },
  {
    id: 5,
    title: faLang.grades,
    Icon: ChartIconSVG,
    pathname: "grades",
  },
];

export default items;
