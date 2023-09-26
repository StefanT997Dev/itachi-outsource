import classes from "./PackageCard.module.scss";

type PackageCardProps = {
    title: string;
    list: string[];
};

const PackageCard = (props: PackageCardProps) => {
    const { title, list } = props;

    return <div className={classes.package_card}>
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.4286 46H6.57143C2.94213 46 0 43.058 0 39.4286V6.57143C0 2.94213 2.94213 0 6.57143 0H39.4286C43.058 0 46 2.94213 46 6.57143V39.4286C46 43.058 43.058 46 39.4286 46ZM6.57143 6.57143V39.4286H39.4286V6.57143H6.57143ZM32.8571 32.8571H13.1429V13.1429H32.8571V32.8571Z" fill="#15172C" />
        </svg>

        <div className={classes.package_card__title}>
            {title}
        </div>
        <ul className={classes.package_card__list}>
            {list.map(l => <li key={l}>{l}</li>)}
        </ul>
    </div>
}

export default PackageCard;