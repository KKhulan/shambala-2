import React from 'react'
import { Plancard } from '../small'

export const Plans = () => {
  return (
    <div className="h-full flex flex-col items-center">
      <div id="headers" className="flex justify-center items-center flex-col">
        <div id="backthing" className="absolute blur-3xl bg-white/20 w-[15%] h-[10%]"></div>
        <div className=" z-2 font-semibold text-h1 text-white">Our future plan</div>
        <div className="z-2 font-semibold text-h3 text-white">2020 - 2032</div>
      </div>

      <div id="spacer" className=" h-[100px]"></div>

      <Plancard
        index={'first'}
        icon={'location'}
        headText={'The first four years'}
        bodyText={'A Green zone will be established on an area of 16 hectares.'}
        date={'Apr 15, 2020 - Nov 1, 2024'}
      />
      <Plancard
        index={'middle'}
        l
        icon={'plane'}
        headText={'The second four years'}
        bodyText={'The infrastructure of the Renewable Energy Research Center.'}
        date={'Apr 15, 2020 - Nov 1, 2024'}
      />
      <Plancard
        index={'end'}
        icon={'rocket'}
        headText={'The third four years'}
        bodyText={'The Research Center building and other construction will be completed.'}
        date={'Apr 15, 2020 - Nov 1, 2024'}
      />

      <div id="spacer" className=" h-[100px]"></div>
    </div>
  )
}

export default Plans
