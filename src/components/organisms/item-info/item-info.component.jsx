import { useMemo } from 'react';
import dayjs from 'dayjs';
import InfoList from '../../atoms/info-list';
import { getGradeColor } from '../../../utils/grade';

import faLang from '../../../statics/values/langs/fa.json';

function ItemInfo({ status, due, grade }) {
  const infoItems = useMemo(() => {
    const items = [];
    // add status
    items.push({
      id: 0,
      title: <span>{faLang.status}</span>,
      value: (
        <span className={status === 'active' ? 'success' : 'danger'}>
          {status === 'active' ? faLang.active : faLang.not_active}
        </span>
      ),
    });
    // add due text
    items.push({
      id: 1,
      title: <span>{faLang.due}</span>,
      value: (
        <span>
          {dayjs(due)
            .calendar('jalali')
            .locale('fa')
            .format('DD MMMM YYYY ساعت HH:mm:ss')}
        </span>
      ),
    });
    // add max grade
    items.push({
      id: 2,
      title: <span>{faLang.grade}</span>,
      value: (
        <span>{`${grade.extra ? `(${grade.extra}+) ` : ''}${
          grade.max - (grade.extra || 0)
        }`}</span>
      ),
    });
    // add your grade
    if (grade.current)
      items.push({
        id: 2,
        title: <span>{faLang.my_grade}</span>,
        value: (
          <span style={{ color: getGradeColor(grade.current) }}>
            {grade.current}
          </span>
        ),
      });
    return items;
  }, [status, due, grade]);

  return (
    <div>
      <InfoList items={infoItems} />
    </div>
  );
}

export default ItemInfo;
