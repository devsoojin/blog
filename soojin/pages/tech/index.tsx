import { Preview } from "@/components/Preview";
import { useState } from 'react';
import { useRouter } from "next/router";

interface TechPrevProps {
    title: string;
    summary: string;
    author: string;
};

const dummy: TechPrevProps[] = [
    {
        title: "개인 블로그 개발기",
        summary: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An'
    },
    {
        title: "개인 블로그 개발기",
        summary: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An'

    },
    {
        title: "개인 블로그 개발기",
        summary: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An'

    },
    {
        title: "개인 블로그 개발기",
        summary: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An'

    },
    {
        title: "개인 블로그 개발기",
        summary: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An'

    },
    {
        title: "개인 블로그 개발기",
        summary: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An'
    },
];


const TechMainPage = () => {
    const router = useRouter();
    const [showMore, setShowMore] = useState<boolean>(false);
    return (
        <div className="mt-[4rem] font-[NPS]">
            <div className="flex w-[80vw] mx-auto">
                <div className="mb-[1.5rem] text-xl font-[NPSBold] w-[20%] border-b-2 border-mainYellow">Recent Tech Feeds</div>
                <div className="w-[80%] flex justify-end">
                    <button className="hover:text-mainYellow" onClick={() => {
                        if (dummy.length > 6) {
                            setShowMore(!showMore);
                        }
                    }}>더보기</button>
                    <button className="mx-5 hover:text-mainYellow" onClick={() => {
                        router.push("/tech/writing")
                    }}>작성하기</button>
                    
                </div>
            </div>
            <section className={`flex flex-wrap justify-center w-[80vw] mx-auto h-[80vh] ` + (showMore ? "overflow-y-scroll" : "")} >
                {
                    dummy.map((data) => (
                        <div className="border rounded-lg w-[25vw] h-[35vh] my-3 mx-2">
                            <div className="h-[50%] border-b p-2">Image</div>
                            <div className="h-[10%] p-2">{data.title}</div>
                            <div className="h-[30%] p-2 text-sm">{data.summary}</div>
                            <div className="h-[10%] p-2 text-xs flex justify-end ">@{data.author}</div>
                        </div>
                    ))
                }
                <div></div>
            </section>                
        </div>
    )
};

export default TechMainPage;