import { useState } from "react";
import { TextEditor } from "@/components/TextEditor";


const TechWriting = () => {
    const [value, setValue] = useState<string>("");
    return (
        <div className="w-[60vw] mx-auto ">
            <section className="mt-[4rem] mb-[1.25rem] font-[NPS] italic">
                <div className="text-lg border-b-2 border-mainYellow w-[10rem]">Tech Writings</div>
            </section>
            <section className="">
                <TextEditor value={value} onChange={(newValue = "") => setValue(newValue)} height={400} />
            </section>
            <section className="w-full flex justify-end font-[NPS] text-sm mt-5">
                <button>초기화</button>
                <button className="mx-5">임시저장</button>
                <button>저장</button>
            </section>
        </div>
    )
};

export default TechWriting;