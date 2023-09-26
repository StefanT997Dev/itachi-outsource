import Image, { StaticImageData } from 'next/image';
import classes from './index.module.scss';

interface TestemonialProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const Testemonial = ({ image, title, description }: TestemonialProps) => (
  <div className={classes.testemonial}>
    <Image className={classes.testemonial__image} src={image} alt="testemonial"  />
    <div className={classes.testemonial__title}>
      {title}
    </div>
    <div className={classes.testemonial__description}>{description}</div>
  </div>
);

export default Testemonial;