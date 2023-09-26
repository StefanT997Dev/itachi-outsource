import { v4 as uuid } from 'uuid';
import classes from './SkillList.module.scss';

interface SkillListProps {
    skills: string[];
    isLimited: boolean;
}

const SkillList = ({ skills, isLimited = false }: SkillListProps) => {
    const skillsSliced = isLimited ? skills.length > 3 ? skills.slice(0, 3) : skills : skills;

    return (
        <div className={classes.skills_list}>
            {skillsSliced.map(s => (
                <div className={classes.skills_list__skill} key={uuid()}>
                    {s}
                </div>
            ))}
            <div className={classes.skills_list__plus}>
                {isLimited && '+'}
            </div>
        </div>
    )
}

export default SkillList;