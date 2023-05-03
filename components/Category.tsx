import Image from "next/image";
import aboutImage from "@/assets/about-img.svg";
import Link from "next/link";

const style = {
    wrapper: `relative`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    name: `text-white font-medium flex relative justify-center flex-wrap items-center`,
    description: `text-white container-[400px] text-l mt-[0.8rem] mb-[2.5rem] text-justify font-thin`,
    title: `flex w-screen relative justify-center flex-wrap items-center text-white text-2xl font-semibold`,
    copyContainer: `w-1/4 h-1/3 m-[1rem] bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-300`,
    button: `flex justify-center items-center border rounded-md text-white font-light`,
}

const Category = () => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.contentWrapper}>
                    <div className={style.title}>Categories</div>

                    <div className={style.copyContainer}>
                        <span className={style.name}>
                            Ui/Ux
                        </span>
                        <span className={style.description}>
                            UI/UX is the design and development of the visual and interactive elements of a website or application, aimed at improving user satisfaction, usability, and accessibility.
                        </span>
                        <Link href="">
                            <div className={style.button}>Let's Meet</div>
                        </Link>
                    </div>

                    <div className={style.copyContainer}>
                        <span className={style.name}>
                            Frontend
                        </span>
                        <span className={style.description}>
                            Front-end development is building the user interface of a website or application using HTML, CSS, and JavaScript. Frontend development is a crucial aspect of creating a successful web presence.
                        </span>
                        <Link href="">
                            <div className={style.button}>Let's Meet</div>
                        </Link>
                    </div>

                    <div className={style.copyContainer}>
                        <span className={style.name}>
                            Backend
                        </span>
                        <span className={style.description}>
                            Back-end development refers to the implementation and management of server-side components of a website or application that handle data and business logic.
                        </span>
                        <Link href="">
                            <div className={style.button}>Let's Meet</div>
                        </Link>
                    </div>

                    <div className={style.copyContainer}>
                        <span className={style.name}>
                            Cyber Security
                        </span>
                        <span className={style.description}>
                            Cybersecurity involves protecting digital systems, networks, and sensitive information from unauthorized access, theft, damage, or other malicious activities.
                        </span>
                        <Link href="">
                            <div className={style.button}>Let's Meet</div>
                        </Link>
                    </div>

                    <div className={style.copyContainer}>
                        <span className={style.name}>
                            Marketing
                        </span>
                        <span className={style.description}>
                            Marketing identifies customer needs, delivers value, and maintains relationships using techniques like research, branding, advertising, and CRM.
                        </span>
                        <Link href="">
                            <div className={style.button}>Let's Meet</div>
                        </Link>
                    </div>

                    <div className={style.copyContainer}>
                        <span className={style.name}>
                            Web 3
                        </span>
                        <span className={style.description}>
                            Web3 is the future of the internet that leverages decentralized technologies to create more secure, private, and trustless interactions between users while empowering individuals and communities.
                        </span>
                        <Link href="">
                            <div className={style.button}>Let's Meet</div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;