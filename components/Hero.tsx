const style = {
    wrapper: ``,
    Home: `flex flex-col justify-center items-center h-screen`,
    text: `p-[0.8rem] text-6xl font-semibold text-white items-center`,
    details: `text-xl text-center text-white font-thin mt-4`,
};

const Hero = () => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.Home}>
                    <span className={style.text}>
                        Welcome to DevJam
                    </span>
                    <span className={style.details}>
                        Find your tribe and spark meaningful connections - where niche meets happen, on DevJam.
                    </span>
                </div>
            </div>
        </>
    )
}

export default Hero;
