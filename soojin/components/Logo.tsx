import { useRouter } from "next/router";

export const Logo = () => {
    const router = useRouter();
    return (
        <div>
            <div className="bg-mainGreen font-[NPSBold] text-[ivory] w-[7.25rem] h-[2rem] text-center flex flex-col justify-center cursor-pointer" onClick={() => {
                router.push("/")
            }}>
                ANSOOJIN
            </div>
        </div>
    )
}