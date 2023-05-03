import Link from 'next/link';
import Image from 'next/image';
import favicon from "@/assets/logo.png";
import { ConnectWallet } from "@thirdweb-dev/react";

const style = {
    headerItems: ` flex items-center justify-end`,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-white font-bold text-2xl`,
    space: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center`,
    wrapper: `bg-transparent w-screen px-[1.2rem] py-[0.8rem] flex before:blur`,
    headerItem: `text-white px-4 font-semibold text-white hover:text-white cursor-pointer`,
};

const Header = () => {
    return (
        <>
            <div className={style.wrapper}>
                <Link href="/">
                    <div className={style.logoContainer}>
                        <Image src={favicon} alt='' height={44} width={44} />
                        <div className={style.logoText}>DevJam</div>
                    </div>
                </Link>

                <div className={style.space}>
                </div>

                <div className={style.headerItems}>
                    <div className={style.headerItem}> Home </div>
                    <div className={style.headerItem}> About </div>
                    <div className={style.headerItem}> Category </div>
                    <div className={style.headerItem}> Contact </div>
                    <div className={style.headerItem}>
                        <ConnectWallet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
