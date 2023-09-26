import Link from 'next/link';
import classes from './ClientContactButton.module.scss';

const ClientContactButton = () => (
    <a href="tel:+381606250232" className={classes.client_contact_button}>
        📞+381 60 625 0232
    </a>
);

export default ClientContactButton;