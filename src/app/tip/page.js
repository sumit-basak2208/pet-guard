import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-white'>
      <Navbar/>
<div className="text-stone-500 py-12 px-3">
  <div className="mx-20">
    <div className="border-l-[4.8px] mb-12 pl-12 border-lime-500 border-solid">
      {/* <h6 className="text-lime-500 font-bold mb-2 uppercase"></h6> */}
      <h1 className="text-neutral-800 text-5xl font-bold uppercase">Guidelines for Dog care</h1>
    </div>
    <div className="grid-cols-2 grid gap-3 -ml-6 -mr-6 -mt-12">
      <div className="col-span-1 mt-12 px-6">
        <div className="bg-zinc-100 flex p-6 h-full items-center">
          <Image src="/img/home.png" alt="abt" width={100} height={30} className='mr-3'/>
          <div>
            <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Socialization and Emergency Preparedness</h5>
            <p className="mb-4">Socialize puppies for a well-adjusted adult dog. Be prepared for emergencies with knowledge of the nearest veterinary clinic and a well-equipped first aid kit.</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 mt-12 px-6">
        <div className="bg-zinc-100 flex p-6 h-full items-center">
          <Image src="/img/dog.png" alt="abt" width={100} height={30} className='mr-3'/>
          <div>
            <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Senior Dog Care and Training</h5>
            <p className="mb-4">When every second counts, trust PetGuard for immediate and expert emergency assistance, because your pet's well-being is our top priority.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="my-20">
    <div className="border-l-[4.8px] mb-12 pl-12 border-lime-500 border-solid">
      {/* <h6 className="text-lime-500 font-bold mb-2 uppercase"></h6> */}
      <h1 className="text-neutral-800 text-5xl font-bold uppercase">Guidelines for Cat care</h1>
    </div>
    <div className="grid-cols-2 grid gap-3 -ml-6 -mr-6 -mt-12">
      <div className="col-span-1 mt-12 px-6">
        <div className="bg-zinc-100 flex p-6 h-full items-center">
          <Image src="/img/home.png" alt="abt" width={100} height={30} className='mr-3'/>
          <div>
            <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Environmental Enrichment and Litter Box Placement</h5>
            <p className="mb-4">Create a stimulating environment for your cat with vertical spaces and window perches. Proper litter box placement and maintenance contribute to feline hygiene and well-being.</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 mt-12 px-6">
        <div className="bg-zinc-100 flex p-6 h-full items-center">
          <Image src="/img/dog.png" alt="abt" width={100} height={30} className='mr-3'/>
          <div>
            <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Senior Cat Care and Socialization</h5>
            <p className="mb-4">As cats age, adapt their care routines and diet. Socialize kittens early to ensure positive interactions with various environments and individuals.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="my-20">
    <div className="border-l-[4.8px] mb-12 pl-12 border-lime-500 border-solid">
      {/* <h6 className="text-lime-500 font-bold mb-2 uppercase"></h6> */}
      <h1 className="text-neutral-800 text-5xl font-bold uppercase">Guidelines for cow care</h1>
    </div>
    <div className="grid-cols-2 grid gap-3 -ml-6 -mr-6 -mt-12">
      <div className="col-span-1 mt-12 px-6">
        <div className="bg-zinc-100 flex p-6 h-full items-center">
          <Image src="/img/home.png" alt="abt" width={100} height={30} className='mr-3'/>
          <div>
            <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Reproduction Management and Hoof Care</h5>
            <p className="mb-4">Implement proper breeding practices and monitor cows during calving. Regularly trim hooves to prevent lameness and discomfort.</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 mt-12 px-6">
        <div className="bg-zinc-100 flex p-6 h-full items-center">
          <Image src="/img/injection.png" alt="abt" width={100} height={30} className='mr-3'/>
          <div>
            <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Grain Intolerance and Routine Veterinary Check-ups</h5>
            <p className="mb-4">Introduce grains slowly to prevent digestive upset. Regular veterinary check-ups are crucial for herd health.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="my-20">
    <div className="border-l-[4.8px] mb-12 pl-12 border-lime-500 border-solid">
      {/* <h6 className="text-lime-500 font-bold mb-2 uppercase"></h6> */}
      <h1 className="text-neutral-800 text-5xl font-bold uppercase">Guidelines for horse care</h1>
    </div>
    <div className="grid-cols-2 grid gap-3 -ml-6 -mr-6 -mt-12">
      <div className="col-span-1 mt-12 px-6">
        <div className="bg-zinc-100 flex p-6 h-full items-center">
          <Image src="/img/injection.png" alt="abt" width={100} height={30} className='mr-3'/>
          <div>
            <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase"> Equine Dentistry and Vaccination</h5>
            <p className="mb-4">Schedule routine dental care to maintain overall health. Follow a vaccination schedule tailored to your horse's lifestyle and location.</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 mt-12 px-6">
        <div className="bg-zinc-100 flex p-6 h-full items-center">
          <Image src="/img/food.png" alt="abt" width={100} height={30} className='mr-3'/>
          <div>
            <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Exercise and Equine Nutrition</h5>
            <p className="mb-4">Consistent exercise routines and a balanced diet are essential for maintaining muscle tone and cardiovascular health in horses.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="my-20">
    <div className="border-l-[4.8px] mb-12 pl-12 border-lime-500 border-solid">
      {/* <h6 className="text-lime-500 font-bold mb-2 uppercase"></h6> */}
      <h1 className="text-neutral-800 text-5xl font-bold uppercase">Guidelines for goat care</h1>
    </div>
    <div className="grid-cols-2 grid gap-3 -ml-6 -mr-6 -mt-12">
      <div className="col-span-1 mt-12 px-6">
        <div className="bg-zinc-100 flex p-6 h-full items-center">
          <Image src="/img/food.png" alt="abt" width={100} height={30} className='mr-3'/>
          <div>
            <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Hoof Trimming and Fiber/Forage Diet</h5>
            <p className="mb-4">Regularly trim hooves to prevent lameness. Provide a balanced diet, avoiding sudden changes to prevent digestive issues.</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 mt-12 px-6">
        <div className="bg-zinc-100 flex p-6 h-full items-center">
          <Image src="/img/injection.png" alt="abt" width={100} height={30} className='mr-3'/>
          <div>
            <h5 className="text-neutral-800 text-xl font-bold mb-4 uppercase">Disease Prevention and Quarantine Practices</h5>
            <p className="mb-4">Vaccinate against common diseases and quarantine new goats to prevent the spread of infections.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div style={{backgroundImage: 'url("/img/testimonial.jpg")', backgroundSize: 'cover'}} className="bg-no-repeat text-stone-500 h-[30rem] my-10 py-12 px-3 min-w-screen flex justify-end items-center">
  <div className="mx-20 max-w-[40rem]">
    <div className="flex flex-wrap justify-center -ml-3 -mr-3">
      <div>
        <div className="bg-white relative z-[1] p-12">
          <div className="overflow-hidden">
            <div>
              <div className="float-left">
                 <div className="text-center flex items-center flex-col">
                  <p className="mb-4">By incorporating these guidelines into your pet care routine, you're actively contributing to the health and happiness of your pets. Remember, each pet is unique, and professional advice from your veterinarian is invaluable for tailored care. Explore our blog for in-depth articles, tips, and expert advice on various aspects of pet care. Your journey to being a responsible and loving pet owner begins here!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<Footer/>
    </div>
  )
}
