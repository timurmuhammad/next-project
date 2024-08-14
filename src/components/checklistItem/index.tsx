import Image from 'next/image'
import checkCircle from "../../ui/icons/check_circle.svg";
import changeGreen from "@/ui/icons/change_green.svg";
import changeOrange from "@/ui/icons/change_orange.svg";

type iconType = 'blue' | 'green'| 'orange'

type Props =  {
  icon?: iconType
  text: string
}

export const ChecklistItem: React.FC<Props> = ({ icon = 'blue', text }) => {
	return <div className='flex items-center gap-[6px]'>
    {
      icon === 'green' ? <Image src={changeGreen} width={21} height={21} alt='icon'></Image>
      : icon === 'orange' ? <Image src={changeOrange} width={21} height={21} alt='icon'></Image>
      : <Image src={checkCircle} width={21} height={21} alt='icon'></Image>
    }

    <p className="text-black text-nowrap">
      {text}
    </p>
	</div>
}
