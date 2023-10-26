"use client"
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useCookies } from 'react-cookie';


const CHECKBOX_ARR = {cat: [
        ["FVRCP Vaccine (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia)", "Start at 8 weeks, with boosters every 3-4 weeks until 16 weeks."],
        ["Rabies Vaccine", "Typically administered around 12-16 weeks."],
        ["FeLV Vaccine (Feline Leukemia Virus)", "Start around 8-12 weeks, with a second dose 3-4 weeks later."],
        ["Chlamydia and FIV (Feline Immunodeficiency Virus)", "The use of these vaccines may vary, and they are not always part of the routine vaccination schedule."],
        ["Bordetella (Kennel Cough) and FIP (Feline Infectious Peritonitis)", "Administered based on specific risk factors and the veterinarian's recommendation."],
    ], 
    dog: [
        ["DHPP Vaccine (Distemper, Hepatitis, Parainfluenza, Parvovirus)", "Start at 6-8 weeks, with boosters every 3-4 weeks until 16 weeks."],
        ["Rabies Vaccine", "Typically administered around 12-16 weeks."],
        ["Leptospirosis Vaccine", " Depending on the region and local prevalence, your veterinarian may recommend this vaccine."],
        ["Canine Coronavirus (CCV) Vaccine", "Administered based on risk factors and the veterinarian's recommendation.."],
        ["Bordetella (Kennel Cough) vaccine", "Administered based on the risk of exposure, especially for dogs in close contact with other dogs."],
    ],
    cow: [
        ["Clostridial Vaccines (7-way or 8-way)", "Protects against diseases such as blackleg."],
        ['Bovine Viral Diarrhea (BVD) Vaccine', 'Administered to prevent BVD infections.'],
        ['Infectious Bovine Rhinotracheitis (IBR) Vaccine', 'Helps prevent respiratory disease in cattle.'],
        ['Leptospirosis Vaccine', 'Protects against Leptospira bacteria; timing and frequency depend on local conditions and risk factors.'],
        ['Brucellosis Vaccine', 'Administered to control brucellosis in cattle, particularly important for breeding animals.']
    ],
    horse: [
        ['Equine Encephalomyelitis Vaccine (EEE/WEE)', 'Start at 4-6 months, with boosters based on local prevalence.'],
        ['Tetanus Toxoid', 'Boosters are usually given annually'],
        ['West Nile Virus Vaccine', 'Recommended in areas where the virus is prevalent.'],
        ['Rabies Vaccine', 'Administered annually.'],
        ['Strangles (Streptococcus equi) Vaccine', "Timing and frequency depend on the veterinarian's recommendation and local conditions."],
    ],
    goat: [
        ['Clostridial Vaccines (CD&T)', 'Protects against diseases like enterotoxemia.'],
        ['Caseous Lymphadenitis (CL) Vaccine', 'Administered based on the risk of infection.'],
        ['Caprine Arthritis Encephalitis (CAE) Vaccine', 'Timing and frequency depend on local conditions and risk factors.'],
        ['Peste des Petits Ruminants (PPR) Vaccine', 'Important in regions where PPR is prevalent.'],
        ['Foot-and-Mouth Disease (FMD) Vaccine', 'Administered based on local conditions and regulations.']
    ]
}

export default function Profile() {
    const [cookies, setCookie, removeCookie] = useCookies();
    const router = useRouter();
    const [profileUrl, setProfileUrl] = useState("");
    const [type, setType] = useState("");
    const profileRef = useRef(null);

    useEffect(() => {
        if(cookies.log != 1)
            router.push("/");
    }, []);

        const onFileUrlChanged = (ev) => {
        if (ev.target.files && ev.target.files[0]) {
            setProfileUrl(URL.createObjectURL(ev.target.files[0]));
        }
    }
    return(
        <form className="bg-white min-h-screen flex flex-col">
            <Navbar/>
            <div className="grow">
                <div className="bg-white rounded p-8">
                <div className="text-slate-700 mb-5 text-center">
                    <h2 className="text-5xl font-bold">Pet Profile</h2>
                </div>
                <div className="flex justify-center items-center flex-col md:flex-row md:gap-12 gap-3">
                <div className="flex justify-center my-10">
                    <div>
                        <div className="rounded-full relative h-64 w-64 cursor-pointer" onClick={ev => {profileRef.current.click()}}>
                            <Image src={profileUrl.length > 0? profileUrl: '/img/hero.jpg'} alt="img" fill className="rounded-full"/>
                            <Image src="/img/pen.png" width={50} height={50} className="rounded-full bg-white absolute bottom-0 right-10 border border-gray-400 p-2"/>
                        </div>
                        <input type="file" ref={profileRef} onChange= {ev => onFileUrlChanged(ev)} className="hidden bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
                    </div>
                </div>

                <div>
                <div className="flex justify-center">
                    <div>
                        <p className="text-violet-950 text-sm">Name:</p>
                        <input required placeholder="Name" className="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div>
                        <p className="text-violet-950 text-sm">Breed:</p>
                        <input required placeholder="Breed" className="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div>
                        <p className="text-violet-950 text-sm">Type:</p>
                        <select onChange={ev => setType(ev.target.value)} required defaultValue="Type" className="bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3">
                            <option disabled={true} value="" selected>
                            --Choose and option--
                            </option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="cow">Cow</option>
                            <option value="horse">Horse</option>
                            <option value="goat">Goat</option>
                        </select>
                    </div>
                </div>

                <div className="items-center flex text-[0.94rem] leading-5 justify-center mb-3">
                </div>
                </div>
                </div>
                <div className="mx-auto flex max-w-[calc(100vw-50px)] w-[536px]">
                    {type.length>0?
                    <div className="mb-5">
                        <p className="text-violet-950 text-sm mb-3">Vaccination:</p>
                        {CHECKBOX_ARR[type].map((ele, index) => 
                        <div key={index} className="flex jusity-center items-center gap-3 mb-1.5">
                            <input type="checkbox" />
                            <div>
                                <h1 className="text-sm text-black font-semibold">{ele[0]}</h1>
                                <p className="text-gray-600 text-xs">{ele[1]}</p>
                            </div>
                        </div>)}
                    </div>: ""}
                </div>
                <div className="flex justify-center">
                    <div>
                        <p className="text-violet-950 text-sm">Status:</p>
                        <textarea required placeholder="Status" className="max-w-[calc(100vw-50px)] w-[536px] h-[200px] bg-zinc-100 text-zinc-500 cursor-text inline-block text-[0.94rem] leading-5 h-11 mb-5 w-64 rounded p-3" />
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center">
                    <button className="items-start bg-lime-500 text-white inline-block text-[1.06rem] leading-6 font-medium h-11 text-center w-64 rounded">Save<i className="inline-block"></i></button>
                </div>
            </div>
            </div>
            <Footer/>
        </form>
    )
}