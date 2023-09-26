import WorkListItem from '../WorkListItem';
import classes from './index.module.scss';
import { WORKS } from './works';
import { v4 as uuid } from 'uuid';

const WorkList = () => {
  return (
    <div className={classes.works_list}>
      {WORKS.map((x, i) => <WorkListItem key={uuid()} {...x} index={i} />)}
    </div>
  )
}

export default WorkList;