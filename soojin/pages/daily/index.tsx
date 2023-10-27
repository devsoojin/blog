import { useRouter } from "next/router"

const DailyMainPage = () => {
    const router = useRouter();
    return (
        <div className="mt-[4rem] font-[NPS}">
            <div className="flex w-[80vw] mx-auto">
                <div className="mb-[1.5rem] text-xl font-[NPSBold] w-[15%] border-b-2 border-mainYellow">Daily Todo</div>
                <div className="w-[80%] flex justify-end">

                    <button className="mx-5 hover:text-mainYellow" onClick={() => {
                        router.push("/tech/writing")
                    }}>작성하기</button>
                    
                </div>
            </div>
            <div className="flex mx-auto w-[80vw]">
                준비중입니다.
            </div>
        </div>
    )
}

export default DailyMainPage;