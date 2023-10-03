import React from 'react'

const TechItem = ({ icon }) => {
    return (
        <div className='bg-white-100 rounded-full w-20 h-20 transition-all hover:w-24 hover:h-24 flex justify-center '>
            <img
                className='w-3/4 object-contain'
                src={icon}
            />
        </div>
    )
}

export default TechItem