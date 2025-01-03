import styles from './all_tooltip.module.scss'
import cn from 'classnames'
import beak_bottom from "@/ui/icons/beak_bottom.svg";
import mark from "@/ui/icons/mark.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shadcn/ui/tooltip"
import Image from 'next/image'




type Props = {
  type?: 'orange' | 'green' | 'yellow',
  title?: string,
  text: string,
  exclamatory?: boolean,
}



export const AllTooltip: React.FC<Props> = ({ type = '', title = '', text = '', exclamatory = false }) => {
  return <div className="flex items-center justify-center">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {exclamatory ? <div className='cursor-pointer'><Image src={mark} width={24} height={24} alt='icon'></Image></div> : <span className={styles.span}>?</span>}
        </TooltipTrigger>
        <TooltipContent asChild align = 'start' alignOffset = {-16}>
          {
            type === 'orange' ? <div className={cn(styles.box, styles.orange)}>
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="  w-10 h-10 "
                preserveAspectRatio="xMidYMid meet"
              >
                <g clip-path="url(#clip0_402_4026)">
                  <path
                    d="M35 2.5C35.663 2.5 36.2989 2.76339 36.7678 3.23223C37.2366 3.70107 37.5 4.33696 37.5 5V35C37.5 35.663 37.2366 36.2989 36.7678 36.7678C36.2989 37.2366 35.663 37.5 35 37.5H5C4.33696 37.5 3.70107 37.2366 3.23223 36.7678C2.76339 36.2989 2.5 35.663 2.5 35V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H35ZM5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H35C36.3261 40 37.5979 39.4732 38.5355 38.5355C39.4732 37.5979 40 36.3261 40 35V5C40 3.67392 39.4732 2.40215 38.5355 1.46447C37.5979 0.526784 36.3261 0 35 0L5 0Z"
                    fill="#FF5F04"
                  />
                  <path
                    d="M17.505 27.5C17.505 27.1717 17.5697 26.8467 17.6953 26.5433C17.8209 26.24 18.0051 25.9644 18.2372 25.7323C18.4694 25.5001 18.745 25.316 19.0483 25.1903C19.3516 25.0647 19.6767 25 20.005 25C20.3333 25 20.6584 25.0647 20.9617 25.1903C21.265 25.316 21.5406 25.5001 21.7728 25.7323C22.0049 25.9644 22.1891 26.24 22.3147 26.5433C22.4403 26.8467 22.505 27.1717 22.505 27.5C22.505 28.1631 22.2416 28.799 21.7728 29.2678C21.3039 29.7367 20.668 30 20.005 30C19.342 30 18.7061 29.7367 18.2372 29.2678C17.7684 28.799 17.505 28.1631 17.505 27.5ZM17.75 12.4875C17.7167 12.1722 17.7501 11.8533 17.848 11.5516C17.9459 11.25 18.1061 10.9723 18.3183 10.7365C18.5305 10.5008 18.7898 10.3123 19.0795 10.1833C19.3692 10.0542 19.6829 9.98755 20 9.98755C20.3172 9.98755 20.6308 10.0542 20.9205 10.1833C21.2102 10.3123 21.4695 10.5008 21.6817 10.7365C21.8939 10.9723 22.0541 11.25 22.152 11.5516C22.2499 11.8533 22.2833 12.1722 22.25 12.4875L21.375 21.255C21.3456 21.5995 21.188 21.9203 20.9334 22.1541C20.6788 22.3879 20.3457 22.5177 20 22.5177C19.6543 22.5177 19.3212 22.3879 19.0666 22.1541C18.812 21.9203 18.6544 21.5995 18.625 21.255L17.75 12.4875Z"
                    fill="#FF5F04"
                  />
                </g>
              </svg>
              <div className="flex flex-col justify-center    ">
                <p className="  text-[16px] text-start  ">
                  {/* Error */}
                  {title}
                </p>
                <p className="  text-[12px]  text-start ">
                  {/* Something went wrong */}
                  {text}
                </p>
              </div>
            </div>
              : type === 'green' ?
                <div className={cn(styles.box, styles.green)}>
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="  w-10 h-10 "
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clip-path="url(#clip0_402_4033)">
                      <path
                        d="M35 2.5C35.663 2.5 36.2989 2.76339 36.7678 3.23223C37.2366 3.70107 37.5 4.33696 37.5 5V35C37.5 35.663 37.2366 36.2989 36.7678 36.7678C36.2989 37.2366 35.663 37.5 35 37.5H5C4.33696 37.5 3.70107 37.2366 3.23223 36.7678C2.76339 36.2989 2.5 35.663 2.5 35V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H35ZM5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H35C36.3261 40 37.5979 39.4732 38.5355 38.5355C39.4732 37.5979 40 36.3261 40 35V5C40 3.67392 39.4732 2.40215 38.5355 1.46447C37.5979 0.526784 36.3261 0 35 0L5 0Z"
                        fill="#46C688"
                      />
                      <path
                        d="M27.425 12.425C27.7749 12.0781 28.2472 11.883 28.7399 11.8816C29.2325 11.8802 29.7059 12.0728 30.0577 12.4177C30.4094 12.7626 30.6114 13.2321 30.6198 13.7246C30.6282 14.2172 30.4424 14.6933 30.1025 15.05L20.1225 27.525C19.951 27.7097 19.744 27.858 19.5139 27.9609C19.2837 28.0638 19.0352 28.1192 18.7832 28.1239C18.5311 28.1286 18.2807 28.0824 18.0469 27.988C17.8131 27.8937 17.6008 27.7532 17.4225 27.575L10.81 20.96C10.6258 20.7883 10.4781 20.5813 10.3756 20.3513C10.2731 20.1213 10.218 19.873 10.2135 19.6213C10.2091 19.3695 10.2554 19.1194 10.3497 18.886C10.444 18.6525 10.5844 18.4404 10.7624 18.2624C10.9405 18.0843 11.1526 17.944 11.386 17.8497C11.6195 17.7554 11.8696 17.709 12.1213 17.7135C12.3731 17.7179 12.6214 17.773 12.8514 17.8755C13.0814 17.978 13.2884 18.1258 13.46 18.31L18.695 23.5425L27.3775 12.48L27.425 12.425Z"
                        fill="#46C688"
                      />
                    </g>
                  </svg>
                  <div className="flex flex-col justify-center    ">
                    <p className="  text-[16px] text-start  ">
                      {/* Success */}
                      {title}
                    </p>
                    <p className="  text-[12px]  text-start ">
                      {/* An example success alert with an icon */}
                      {text}
                    </p>
                  </div>
                </div>
                : type === 'yellow' ?
                  <div className={cn(styles.box, styles.yellow)}>
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="  w-10 h-10 "
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g clip-path="url(#clip0_402_4040)">
                        <path
                          d="M35 2.5C35.663 2.5 36.2989 2.76339 36.7678 3.23223C37.2366 3.70107 37.5 4.33696 37.5 5V35C37.5 35.663 37.2366 36.2989 36.7678 36.7678C36.2989 37.2366 35.663 37.5 35 37.5H5C4.33696 37.5 3.70107 37.2366 3.23223 36.7678C2.76339 36.2989 2.5 35.663 2.5 35V5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5H35ZM5 0C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H35C36.3261 40 37.5979 39.4732 38.5355 38.5355C39.4732 37.5979 40 36.3261 40 35V5C40 3.67392 39.4732 2.40215 38.5355 1.46447C37.5979 0.526784 36.3261 0 35 0L5 0Z"
                          fill="#FFB800"
                        />
                        <path
                          d="M22.325 16.47L16.6 17.1875L16.395 18.1375L17.52 18.345C18.255 18.52 18.4 18.785 18.24 19.5175L16.395 28.1875C15.91 30.43 16.6575 31.485 18.415 31.485C19.7775 31.485 21.36 30.855 22.0775 29.99L22.2975 28.95C21.7975 29.39 21.0675 29.565 20.5825 29.565C19.895 29.565 19.645 29.0825 19.8225 28.2325L22.325 16.47ZM22.5 11.25C22.5 11.913 22.2366 12.5489 21.7678 13.0178C21.2989 13.4866 20.663 13.75 20 13.75C19.337 13.75 18.7011 13.4866 18.2322 13.0178C17.7634 12.5489 17.5 11.913 17.5 11.25C17.5 10.587 17.7634 9.95107 18.2322 9.48223C18.7011 9.01339 19.337 8.75 20 8.75C20.663 8.75 21.2989 9.01339 21.7678 9.48223C22.2366 9.95107 22.5 10.587 22.5 11.25Z"
                          fill="#FFB800"
                        />
                      </g>
                    </svg>
                    <div className="flex flex-col justify-center    ">
                      <p className="  text-[16px] text-start  ">
                        {/* Info */}
                        {title}
                      </p>
                      <p className="  text-[12px]  text-start ">
                        {/* An example success alert with an icon */}
                        {text}
                      </p>
                    </div>
                  </div>
                  :
                  <div>
                    <p className={styles.frame}>
                      {text}
                    </p>
                    {/* <p className={styles.arrow}>
                      <Image src={beak_bottom} width={16} height={9} alt=''></Image>
                    </p> */}
                  </div>
          }
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
}