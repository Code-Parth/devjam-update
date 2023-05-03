import Image from "next/image";
import aboutImage from "@/assets/about-img.svg";

const style = {
    wrapper: `relative`,
    copyContainer: `w-1/2`,
    cardContainer: `rounded-[3rem]`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    description: `text-white container-[400px] text-xl mt-[0.8rem] mb-[2.5rem] text-justify font-thin`,
    name: `flex w-screen relative justify-center flex-wrap items-center text-white text-2xl font-semibold`,
}

const About = () => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.contentWrapper}>
                    <div className={style.name}>About</div>

                    <div className={style.cardContainer}>
                        <Image src={aboutImage} height={512} width={512} alt="" />
                    </div>

                    <div className={style.copyContainer}>
                        <div className={style.description}>
                            Devjam is a Web3 video chat platform that connects users with niche-based interests using blockchain technology, providing a secure and private space to discover and share passions, and build meaningful connections.
                            <br />
                            <br />
                            With Devjam, users canr join category-based meets to connect with others who share the same passions. Whether you're a developer looking to connect with fellow coders or a designer seeking like-minded creatives, Devjam provides a unique and engaging platform to spark meaningful conversations and build long-lasting connections.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;