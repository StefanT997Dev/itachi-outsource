import ColorCircleDesktop from "@/../public/da-li-je-programiranje-za-mene-benefiti-desktop.png";
import ColorCircleMobile from "@/../public/da-li-je-programiranje-za-mene-benefiti-mobile.png";
import BegginersLandingPageHeroImage from "@/../public/da-li-je-programiranje-za-mene-header-hero.png";
import FieldTextInput from "@/components/FieldTextInput/FieldTextInput";
import Logo from "@/components/Logo/Logo";
import useMobile from "@/hooks/useMobile";
import { required } from "@/utils/validators";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Form as FinalForm } from "react-final-form";
import classes from "./index.module.scss";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/services/firebase";
import { useState } from "react";
import Modal from "@/components/Modal/Modal";

type FormData = {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
};

export default function BeginnersLandingPage() {
  const { isMobile } = useMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const registerClient = async (values: FormData) => {
    try {
      setIsLoading(true);
      debugger
      const docRef = await addDoc(collection(db, "reservations"), values);
      setIsLoading(false);
      setIsModalOpen(true);
    } catch (e) {
      setIsLoading(false);
      console.error("Error adding document: ", e);
    }
  };

  function animateScroll(e: MouseEvent) {
    e.preventDefault();

    const element = document.getElementById("zakaži");
    const target = element?.getBoundingClientRect();
    const startScrollY = window.scrollY;
    const targetScrollY = target!.top + startScrollY;
    const distance = Math.abs(targetScrollY - startScrollY);
    const slowScrollDistance = 0.1 * distance; // Distance for slow scrolling at the beginning and end
    const regularScrollDistance = 0.8 * distance; // Distance for regular scrolling

    const duration = 1200; // Total duration for the scroll animation (in milliseconds)
    const startTime = performance.now();

    function scrollStep(timestamp: any) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      let scrollPosition;
      if (progress <= 0.1) {
        // Slow scroll at the beginning
        scrollPosition =
          startScrollY + (targetScrollY - startScrollY) * (progress / 0.1);
      } else if (progress <= 0.9) {
        // Regular scroll in the middle
        const middleProgress = (progress - 0.1) / 0.8;
        scrollPosition =
          startScrollY +
          slowScrollDistance +
          middleProgress * regularScrollDistance;
      } else {
        // Slow scroll at the end
        const endProgress = (progress - 0.9) / 0.1;
        scrollPosition = targetScrollY - slowScrollDistance * (1 - endProgress);
      }

      window.scrollTo(0, scrollPosition);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }

  if (typeof window !== "undefined") {
    const ctaLink = document.getElementById("cta");
    const ctaLink2 = document.getElementById("cta2");

    ctaLink?.addEventListener("click", (e) => {
      animateScroll(e);
    });

    ctaLink2?.addEventListener("click", (e) => {
      animateScroll(e);
    });
  }

  return (
    <>
      <Head>
        <title>Modern IT solutions for your business</title>
        <meta
          name="description"
          content="Umesto da se obavežeš na obuku u trajanju od šest meseci ili duže i potrošiš gomilu novca, bolje je ovako..."
        ></meta>
      </Head>

      <div className={classes.content}>
        <div className={classes.content__header}>
          <div className={classes.content__header__logo}>
            <Logo width="5em" />
          </div>
          <div className={classes.content__header__title}>
            <h1>
              Modern IT solutions for your business
            </h1>
          </div>
          <div className={classes.content__header__description}>
            <h2>
              If you are looking to automate your business through a
              {!isMobile ? <br /> : null} custom built software,
              you are in the right place!
            </h2>
          </div>
          <Image
            src={BegginersLandingPageHeroImage}
            className={classes.content__header__hero_image}
            alt="Osoba je srećna, koristi mobilni telefon i izgleda pametno"
            sizes="100vw"
            placeholder="blur"
            priority
          />
        </div>

        <div id="benefits" className={classes.content__benefits}>
          <div className={classes.content__benefits__title}>
            <h2>
              Here is how{isMobile ? <br /> : null} you
              {!isMobile ? <br /> : null} will benefit by
              {!isMobile ? <br /> : null} choosing us:
            </h2>
          </div>
          <div className={classes.content__benefits__description}>
            <Image
              src={isMobile ? ColorCircleMobile : ColorCircleDesktop}
              className={classes.content__benefits__description__image}
              alt="Efekat boja u vidu krugova"
              sizes="100vw"
              placeholder="blur"
              priority
            />
            <ul>
              <li>
                • Automate work and save time and money through a full stack software solution personalized for your business.
                <br />
              </li>
              <li>
                • You will not need to hire ios and android developers separately since we are skilled in Flutter and React Native.
                <br />
              </li>
              <li>
                • Combine Java or C# with Angular or React for a tailored full-stack web app.
              </li>
            </ul>
          </div>
          <div className={classes.content__benefits__additional_benefits}>
            <div>
              <div
                className={
                  classes.content__benefits__additional_benefits__title
                }
              >
                UI/UX Design
              </div>
              <div
                className={
                  classes.content__benefits__additional_benefits__description
                }
              >
                Our designer ensures a modern and professional look for your app, be it mobile or web.
              </div>
            </div>
            <div>
              <div
                className={
                  classes.content__benefits__additional_benefits__title
                }
              >
                Effortless
              </div>
              <div
                className={
                  classes.content__benefits__additional_benefits__description
                }
              >
                You will get a dedicated project manager without the need to
                manage developers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
