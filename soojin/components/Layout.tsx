import { Logo } from "./Logo"
import { useRouter } from "next/router"
import { useState } from "react";
import { BsMailbox } from "react-icons/bs";

export const Layout = (props: { children: React.ReactNode }) => {
    const router = useRouter();
    const [page, setPage] = useState<string>("home");

    const movePage = (pageName: string) => {
        if (pageName === 'tech') {
            router.push('/tech');
            setPage('tech');
        }
        else if (pageName === 'daily') {
            router.push('/daily');
            setPage('daily');
        }
        else if (pageName === 'thinking') {
            router.push('/thinking');
            setPage('thinking');
        }
        else {
            router.push('/');
            setPage('home');
        }
    }

    return (
        <div>
            <header className="flex w-[100vw] h-[75px] bg-[ivory] text-[darkGrey] fixed z-50">
                <section className="w-[30%] v-center px-5 " onClick={() => {
                    movePage('home')
                }}>
                    <Logo />
                </section>
                <section className="w-[50%] v-center font-[NPSBold]">
                    <div className="w-[80%] mx-auto flex">
                        <div className={`mr-[3rem] cursor-pointer h-full ` + (page === 'tech' ? "border-b-2 border-mainRed text-mainRed" : "")} onClick={() => {
                            movePage('tech');
                        }}>Tech</div>
                        <div className={`mr-[3rem] cursor-pointer ` + (page === 'daily' ? "border-b-2 border-mainRed text-mainRed" : "")} onClick={() => movePage('daily')}>Daily</div>
                        <div className={`mr-[3rem] cursor-pointer ` + (page === 'thinking' ? "border-b-2 border-mainRed text-mainRed" : "")} onClick={() => movePage('thinking')}>Thinking</div>
                    </div>
                </section>
                <section className="w-[20%] px-5 flex justify-end">
                    <div className="v-center">
                        <div className="text-lg flex justify-center cursor-pointer hover:text-mainYellow">
                            <BsMailbox  />
                        </div>
                        <div className="text-xs flex justify-center">Contact</div>
                    </div>
                </section>
            </header>
            <main className="pt-[75px] w-[90vw] mx-auto">{props.children}</main>
        </div>
    )
}