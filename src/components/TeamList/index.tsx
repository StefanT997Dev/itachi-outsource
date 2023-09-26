import useMobile from "@/hooks/useMobile";
import React from "react";
import TeamListItem from "../TeamListItem";
import classes from "./index.module.scss";
import { TEAM } from "./team";

const TeamList = () => {
  const [selectedMentor, setSelectedMentor] = React.useState<
    string | undefined
  >(TEAM[0].id);
  const { isMobile } = useMobile();

  const selectedImage = TEAM.find((x) => x.id === selectedMentor) ?? TEAM[0];
  const selectedImageIndex = TEAM.indexOf(selectedImage);

  const previousImage =
    TEAM.length > 1
      ? TEAM[
          selectedImageIndex === 0 ? TEAM.length - 1 : selectedImageIndex - 1
        ]
      : undefined;

  const nextImage = TEAM[Math.abs(selectedImageIndex + 1) % TEAM.length];

  return (
    <div className={classes.team_list}>
      <div
        className={`${classes.team_list__arrow_container} ${classes.team_list__arrow_container__left}`}
        onClick={() => setSelectedMentor(previousImage?.id)}
      >
        <svg
          width="20"
          height="8"
          viewBox="0 0 20 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 0V3L20 3V5L4 5V8L0 4L4 0Z" fill="#54D1CC" />
        </svg>
      </div>
      <div className={classes.team_list__list_container}>
        {previousImage && !isMobile && <TeamListItem {...previousImage} />}
        {selectedImage && <TeamListItem {...selectedImage} />}
        {nextImage && !isMobile && <TeamListItem {...nextImage} />}
      </div>
      <div
        className={`${classes.team_list__arrow_container} ${classes.team_list__arrow_container__right}`}
        onClick={() => setSelectedMentor(nextImage?.id)}
      >
        <svg
          width="20"
          height="8"
          viewBox="0 0 20 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 0V3L0 3L0 5L16 5V8L20 4L16 0Z" fill="#54D1CC" />
        </svg>
      </div>
    </div>
  );
};

export default TeamList;
