import colors from '../statics/values/colors.json';

export function getGradeColor(max, grade) {
  const percentage = (grade / max) * 100;
  if (percentage > 75) return colors.success;
  if (percentage < 40) return colors.danger;
  return colors.secondary_2;
}
