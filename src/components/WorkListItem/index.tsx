import useMobile from "@/hooks/useMobile";
import classes from "./index.module.scss";
import Image, { StaticImageData } from 'next/image';

interface WorkListItemProps {
  image: StaticImageData;
  title: string;
  description: string;
  index: number;
}

const WorkListItem = ({ image, title, description, index }: WorkListItemProps) => {
  const { isMobile } = useMobile();

  return (
    <div
      style={
        { 
          marginTop: (!isMobile && index % 2 == 1) ? "5em" : "0",
          height: (!isMobile && index %2 == 0) ? "80%": "auto"
        }
      }
      className={classes.work_item}
    >
      <Image
        className={classes.work_item__image}
        src={image}
        sizes="100vw"
        width={100}
        height={100}
        alt="Javascript bedge"
        priority
      />
      <div className={classes.work_item__title}>{title}</div>
      <div className={classes.work_item__description}>{description}</div>
    </div>
  );
};

export default WorkListItem;