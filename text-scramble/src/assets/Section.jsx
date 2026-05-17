import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'




const Section = () => {

    useGSAP(() => {

        let tl= gsap.timeline();

        tl.to("#text1", {
            duration: 3,
            scrambleText: {
                text: "Text Reveal",
                chars: "TMOWACB!^",
                revealDelay: 0,
                speed: 0.5,
              
            },
         
        }).to("#text2", {
            duration: 3,
            scrambleText: {
                text: "Animation",
                chars: "TMOWACB!^",
                revealDelay: 0,
                speed: 0.5,
                rightToLeft:true,
              
            },
            
        },"<")



    }, [])
    return (
        <div className='h-[100dvh]'>
            <div id='text' className="h-[100dvh] gap-4 flex-col flex items-center justify-center text-7xl font-bold whitespace-pre-line text-center">
                <div id='text1'>

                </div>
                <div id='text2' className=''>
                        Animation
                </div>
            </div>


        </div>

    )
}

export default Section