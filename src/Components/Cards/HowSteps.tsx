// import React from 'react'

const HowSteps = (props : any) => {
  return (
    <div className="h-85 w-70 flex flex-col justify-center items-center text-zinc-900 text-center gap-2 mx-auto">
        <div>
            {props.icon}
        </div>
        <div className="text-2xl font-bold">{props.title}</div>
        <div className="leading-5">{props.desc}</div>
    </div>
  )
}

export default HowSteps