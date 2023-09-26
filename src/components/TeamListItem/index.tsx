import classes from './index.module.scss';
import Image, { StaticImageData } from 'next/image';

interface TeamListItemProps {
  id: string;
  image: StaticImageData;
  name: string;
  worksIn: string;
  about: string;
}

const TeamListItem = ({ image, name, worksIn, about }: TeamListItemProps ) => {
  return (
    <div className={classes.team_list_item}>
      <Image
        className={classes.team_list_item__image}
        src={image}
        sizes="100vw"
        width={100}
        height={100}
        alt="Mentor"
        priority
      ></Image>
      <div className={classes.team_list_item__name}>{name}</div>
      <div className={classes.team_list_item__description}>{worksIn}</div>
      <div className={classes.team_list_item__description}>{about}</div>
    </div>
  );
}

export default TeamListItem;