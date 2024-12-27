import React, { useEffect, useState } from 'react'

const Offer = () => {

    const calculateTimeLeft = () => {

        const difference = +new Date("2025-02-22T12:15:00") - +new Date();

        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
                hours: String(Math.floor((difference / (1000 * 60 * 60))) % 24).padStart(2, "0"),
                minutes: String(Math.floor((difference / 1000 / 60) % 24)).padStart(2, "0"),
                seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
            }
        } else {
            timeLeft = {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            }
        }

        return timeLeft;

    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer)

    })

    return (
        <section className='bg-banner bg-center bg-cover h-[555px] p-8 rounded-xl max-padd-container my-8'>
            <div className='flex items-center flex-col gap-1 mt-40 max-w-xl'>

                <h3 className='uppercase medium-20'>Sales Fever</h3>

                <h2 className='md:bold-44 bold-32 uppercase'>20% off Everything</h2>

                <span className='italic font-ace'>Offer End In</span>

                <div className='flex gap-x-2.5 xs:gap-x-7 mt-2'>
                    <div className='bg-white p-2 rounded-lg text-center'>
                        <span className='font-bold text-2xl md:text-4xl'>{timeLeft.days}</span>
                        <span className='block'>Days</span>
                    </div>

                    <div className='bg-white p-2 rounded-lg text-center'>
                        <span className='font-bold text-2xl md:text-4xl'>{timeLeft.hours}</span>
                        <span className='block'>Hours</span>
                    </div>

                    <div className='bg-white p-2 rounded-lg text-center'>
                        <span className='font-bold text-2xl md:text-4xl'>{timeLeft.minutes}</span>
                        <span className='block'>Minutes</span>
                    </div>

                    <div className='bg-white p-2 rounded-lg text-center'>
                        <span className='font-bold text-2xl md:text-4xl'>{timeLeft.seconds}</span>
                        <span className='block'>Seconds</span>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Offer