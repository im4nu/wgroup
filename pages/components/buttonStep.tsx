import Image from 'next/image'
import arrowRight from '../assets/icons/arrowRight.svg'

interface ButtonFormProps{
    field: string;
    action: any;
}

export default function ButtonStep({field, action} : ButtonFormProps){
    return(
        <button onClick={action} className="flex flex-row items-center gap-3">
            <div className="flex">
                <p className='text-primary-default'>{field}</p>
            </div>

            <div className="flex bg-primary-alternative items-center justify-center rounded-full py-2 px-2">
                <Image src={arrowRight} alt="Seta para direita" />
            </div>
        </button>
    )
}