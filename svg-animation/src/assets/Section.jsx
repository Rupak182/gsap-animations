import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React from 'react'


const integrationSteps = [
    {
        id: 1,
        name: "Gmail",
        description: "Pulled recent emails with Sarah for deal context",
        icon: "/gmail.svg"
    },
    {
        id: 2,
        name: "Google Calendar",
        description: "Found open slot Thursday at 2pm",
        icon: "/google-calendar.svg"
    },
    {
        id: 3,
        name: "HubSpot",
        description: "Checked deal background, updated stage to Closing",
        icon: "/hubspot.svg"
    },
    {
        id: 4,
        name: "Notion",
        description: "Created meeting agenda with talking points",
        icon: "/notion.webp"
    },
    {
        id: 5,
        name: "Slack",
        description: "Sent update to #sales with meeting link",
        icon: "/slack.svg"
    }
];




const runnerFeatures = [
    {
        id: 1,
        title: "Concurrent Runners",
        description: "Run multiple tasks in parallel. Draft follow-ups while pulling analytics while updating your CRM. Receipts and timestamps for everything."
    },
    {
        id: 2,
        title: "Local + Cloud",
        description: "Works across your local machine and cloud services. Manages files, apps, and workflows wherever they live. Your data stays yours."
    },
    {
        id: 3,
        title: "Memory Across Sessions",
        description: "Runner remembers what matters across sessions: your contacts, your preferences, your unfinished work. Context that compounds over time."
    }
];



const Section = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".first-screen",
                start: "top top",
                end: "+=3000",
                // markers: true,
                pin: true,
                // pinSpacing: false,
                scrub: true,
            },
        })
        tl.to(".fill-line", {
            height: "100%",
            duration: 1
        })
            .from(".integration-item", {
                opacity: 0,
                stagger: 0.2,
                duration: 0.2
            }, "<")
            // .fromTo('.typing-phone', { text: "", color: "#A0553A" }, { text: "(415) 555-0142", duration: 1, ease: "none" }, "<")
            // .set('.typing-phone', { color: "rgb(29,27,27)" })
            // .fromTo(".typing-email", { text: "", color: "#A0553A" }, { text: "sarah@acme.co", duration: 1.5, ease: "none" }, ">")
            // .set('.typing-email', { color: "rgb(29,27,27)" })
            // .fromTo(".typing-occasion", { text: "", color: "#A0553A" }, { text: "Client dinner", duration: 1.5, ease: "none" }, ">")
            // .set('.typing-occasion', { color: "rgb(29,27,27)" })
            // .fromTo(".typing-request", { text: "", color: "#A0553A" }, { text: "Window table, one vegetarian guest", duration: 2, ease: "none" }, ">")
            // .set('.typing-request', { color: "rgb(29,27,27)" })



    }, [])

    return (
        <main className='first-screen w-full h-screen p-20 flex items-center justify-center px-40 gap-10 '>

            <section className='relative flex-1 flex flex-col gap-5'>
                <div className='absolute left-0 top-0 bottom-0 border-l border-dashed -translate-x-2 border-[#CDCBC6]' />

                <div>
                    <div className='relative'>

                        <h1 className='text-5xl mb-4 font-expose text-[rgb(29,27,27)]'>
                            Everything that makes Runner different.
                        </h1>
                        <p className="font-brush text-[rgb(160,85,58)] text-3xl absolute bottom-0 right-0 ">
                            (and better!)
                        </p>
                    </div>

                    <p className='text-base '>
                        Runner seamlessly integrates with the tools you already rely on, streamlining your workflow and ensuring that tasks are completed efficiently and effectively. It takes care of the details so you can focus on what truly matters.
                    </p>
                </div>
                <div className='relative text-section'>
                    <div className='fill-line absolute left-0 -translate-x-2 top-0 w-[1.5px] bg-[#A0553A] h-0' />
                    {runnerFeatures.map(feature => (
                        <div key={feature.id} className="flex gap-2 relative">
                            <div className='border border-dashed border-[#CDCBC6] left-0 -translate-x-10  w-full absolute' />
                            {/* <span className="text-4xl font-light italic opacity-20">{feature.id}</span> */}
                            <div className="py-2">
                                <h2 className=" font-expose text-lg  font-medium mb-1">{feature.title}</h2>
                                <p className="text-base ">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='flex-1 relative h-full p-12 flex items-center justify-center'>
                <img src="runner.webp" className='h-[90vh] object-cover w-full' alt="" />
                <div className='absolute w-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white'>
                    <div className='p-4 bg-[#F5F5F4] px-7 mb-2'>
                        Help me prep for a deal close meeting with Sarah from Acme Corp
                    </div>

                    <div>
                        {integrationSteps.map(step => (
                            <div key={step.id} className="flex gap-1 integration-item">
                                <div className="px-5 py-2 flex items-center gap-3">
                                    <div className='p-2 bg-[#F3F3F2] rounded-sm'>

                                        <img src={step.icon} className='w-4 h-4' alt="" />
                                    </div>
                                    <span>
                                        <h2 className="   text-[rgb(29,27,27)] font-medium">{step.name}</h2>
                                        <p className="text-base text-[rgb(110,110,110)]">
                                            {step.description}
                                        </p>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>


                    
                </div>
            </section>
        </main>
    )
}

export default Section