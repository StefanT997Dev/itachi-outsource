import { Mentor } from "@/models/mentor";
import MentorListItem from "../MentorListItem/MentorListItem";
import classes from './MentorsList.module.scss';

interface Props {
  exampleMentors: Mentor[];
}

const MentorsList = ({ exampleMentors }: Props) => {
  return (
    <div className={classes.mentor_list}>
      {exampleMentors.map((mentor) => (
        <MentorListItem key={mentor.id} mentor={mentor} />
      ))
      }
    </div>
  )
}

export default MentorsList;