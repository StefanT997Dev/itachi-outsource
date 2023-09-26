import { Mentor } from "@/models/mentor";
import Link from "next/link";
import Image from 'next/image';
import SkillList from "../SkillList/SkillList";
import classes from './MentorListItem.module.scss';

interface Props {
    mentor: Mentor;
}

const MentorListItem = ({ mentor }: Props) => {
    const { id, image, firstName, lastName, category, bio, skills, worksAt } = mentor;

    return (
        <>
            <Link className={classes.mentor} key={id} href={`/it-kursevi/${id}`}>
                <Image
                    className={classes.mentor__image}
                    src={image}
                    alt="Something"
                    sizes='100vw'
                    placeholder='blur'
                />
                <div className={classes.mentor__title}>
                    {firstName} {lastName}
                </div>
                <div className={classes.mentor__category}>
                    {category}
                </div>
                <div className={classes.mentor__works_in}>
                    {`radi u: ${worksAt}`}
                </div>
                <div className={classes.mentor__skills}>
                    <SkillList skills={skills} isLimited />
                </div>
                <div className={classes.mentor__bio}>
                    {bio.length > 120 ? bio.slice(0, bio.lastIndexOf(" ", 117)) : bio}...
                </div>
                <div className={classes.mentor__details}>
                    DETALJNIJE
                    {/* <div className={classes.mentor__details__line} /> */}
                </div>
            </Link>
        </>
    )
}

export default MentorListItem;