import { Preview } from "@/components/Preview";
import { useState } from 'react';
import { useRouter } from "next/router";

interface ThinkingProps {
    title: string;
    content: string;
    author: string;
    date: string;
};

const dummy: ThinkingProps[] = [
    {
        title: "10월 회고록",
        content: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An',
        date: "2023-10-31"
    },
    {
        title: "10월 회고록",
        content: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An',
        date: "2023-10-31"
    },
    {
        title: "10월 회고록",
        content: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An',
        date: "2023-10-31"
    },
    {
        title: "10월 회고록",
        content: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An',
        date: "2023-10-31"
    },
    {
        title: "10월 회고록",
        content: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An',
        date: "2023-10-31"
    },
    {
        title: "10월 회고록",
        content: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An',
        date: "2023-10-31"
    },
    {
        title: "10월 회고록",
        content: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An',
        date: "2023-10-31"
    },
    {
        title: "10월 회고록",
        content: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An',
        date: "2023-10-31"
    },
        {
        title: "10월 회고록",
        content: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An',
        date: "2023-10-31"
    },
    {
        title: "10월 회고록",
        content: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An',
        date: "2023-10-31"
    },
    {
        title: "10월 회고록",
        content: "개인 블로그를 개발 중입니다 !!",
        author: 'Soojin An',
        date: "2023-10-31"
    },

];


const ThinkingMainPage = () => {
    const router = useRouter();
    return (
        <div className="mt-[4rem] font-[NPS]">
            <div className="flex w-[70vw] mx-auto">
                <div className="mb-[1.5rem] text-xl font-[NPSBold] w-[20%] border-b-2 border-mainYellow">Thinking & Growth</div>
                <div className="w-[80%] flex justify-end">
                    <button className="hover:text-mainYellow px-2" onClick={() => {
                        router.push("/thinking/writing")
                    }}>작성하기</button>
                    
                </div>
            </div>
            <table className={`w-[70vw] mx-auto border h-[56vh] `} >
                <thead>
                    <tr className="h-[6vh] bg-[ivory] text-[#000000]">
                        <th className="w-[5vw] border">구분</th>
                        <th className="w-[35vw] border">제목</th>
                        <th className="w-[20vw] border" >작성자</th>
                        <th className="w-[20vw] border">작성일자</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        dummy.map((data, idx) => (
                            <tr key={idx} className="h-[5vh]">
                                <td className="border">{idx + 1}</td>
                                <td className="border cursor-pointer">{data.title}</td>
                                <td className="border">{data.author}</td>
                                <td className="border">{data.date}</td>
                            </tr>
                        ))
                    }
                </tbody>
                {/* {
                    dummy.map((data) => (
                        <div className="border rounded-lg w-[25vw] h-[35vh] my-3 mx-2">
                            <div className="h-[50%] border-b p-2">Image</div>
                            <div className="h-[10%] p-2">{data.title}</div>
                            <div className="h-[30%] p-2 text-sm">{data.content}</div>
                            <div className="h-[10%] p-2 text-xs flex justify-end ">@{data.author}</div>
                        </div>
                    ))
                } */}
                <div></div>
            </table>                
        </div>
    )
};

export default ThinkingMainPage;