
export const BotCard = () => {
	return <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-[1272px] gap-12">
  <div className="flex flex-col justify-start items-start self-stretch flex-grow relative overflow-hidden gap-8 p-4 rounded-md border border-[#ebebeb]">
    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
      <div className="flex-grow-0 flex-shrink-0 w-[43px] h-[43px] relative">
        <div className="absolute left-[-1px] top-[-1px]" />
        <img
          src="image-8.png"
          className="w-[76px] h-11 absolute left-[-18px] top-[-2px] object-cover"
        />
      </div>
      <p className="flex-grow w-[309px] text-lg text-left text-black">
        OKX Low-Risk Index Copy Bot
      </p>
    </div>
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[360px] text-sm font-light text-left text-black">
      The bot analyzes the market for cryptocurrencies that offer the lowest risks and medium good
      profits.
    </p>
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#717171]">Profit</p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
          <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-[3px] bg-[#e4fafc]">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#0d0c43]">242.24%</p>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-7 h-7">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[77.5px] top-[1.5px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx={14} cy={14} r={14} fill="#ECECEC" />
            </svg>
            <p className="w-3 h-3.5 absolute left-[86px] top-2.5 text-xs text-center text-[#3c3b3b]">
              ?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#717171]">Max Drawdown</p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
          <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-[3px] bg-[#e4fafc]">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#0d0c43]">7.21%</p>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-7 h-7">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[57.5px] top-[1.5px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx={14} cy={14} r={14} fill="#ECECEC" />
            </svg>
            <p className="w-3 h-3.5 absolute left-[66px] top-2.5 text-xs text-center text-[#3c3b3b]">
              ?
            </p>
          </div>
        </div>
      </div>
    </div>
    <svg
      width={360}
      height={1}
      viewBox="0 0 360 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="self-stretch flex-grow-0 flex-shrink-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2={360} y2="0.5" stroke="#EBEBEB" />
    </svg>
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
      <div className="flex flex-col justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#717171]">Quote currency</p>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3 px-2.5 py-2 rounded-md bg-neutral-50 border-[0.5px] border-[#d9d9d9]">
          <svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[25px] h-[25px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <g clip-path="url(#clip0_168_1272)">
              <mask
                id="mask0_168_1272"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={25}
                height={25}
              >
                <path d="M25 0H0V25H25V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_168_1272)">
                <path
                  d="M12.5 25C19.4035 25 25 19.4035 25 12.5C25 5.59644 19.4035 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4035 5.59644 25 12.5 25Z"
                  fill="#F3BA2F"
                />
                <path
                  d="M9.46563 11.2531L12.5 8.21875L15.5359 11.2547L17.3016 9.48906L12.5 4.6875L7.7 9.4875L9.46563 11.2531ZM4.6875 12.5L6.45312 10.7344L8.21875 12.5L6.45312 14.2656L4.6875 12.5ZM9.46563 13.7469L12.5 16.7813L15.5359 13.7453L17.3016 15.5101L12.5 20.3125L7.7 15.5125L7.69766 15.5101L9.46563 13.7469ZM16.7813 12.5L18.5469 10.7344L20.3125 12.5L18.5469 14.2656L16.7813 12.5ZM14.2906 12.4984H14.2922V12.5L12.5 14.2922L10.7102 12.5031L10.707 12.5L10.7102 12.4976L11.0234 12.1836L11.1758 12.0312L12.5 10.7078L14.2914 12.4992L14.2906 12.4984Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              {/* <clippath id="clip0_168_1272">
                <rect width={25} height={25} fill="white" />
              </clippath> */}
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-lg font-light text-left text-[#303030]">
            BNB
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#717171]">Exchange</p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 py-2">
          <img
            src="image-9.png"
            className="flex-grow-0 flex-shrink-0 w-[25px] h-[25px] object-cover"
          />
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#303030]">OKX</p>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#717171]">
          Winning trades
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">92%</p>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#717171]">
          Losing trades
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">8%</p>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#717171]">
          W/L Ratio
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">721/23</p>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-between items-start self-stretch flex-grow relative overflow-hidden p-4 rounded-md border border-[#ebebeb]">
    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
      <div className="flex-grow-0 flex-shrink-0 w-[43px] h-[43px] relative">
        <div className="absolute left-[-1px] top-[-1px]" />
        <img
          src="image-5.png"
          className="w-[60px] h-11 absolute left-[-9.5px] top-[-2px] object-cover"
        />
      </div>
      <p className="flex-grow w-[309px] text-lg text-left text-black">
        Poloniex Futures x5 Copy Bot
      </p>
    </div>
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[360px] text-sm font-light text-left text-black">
      Perpetual derivatives bot, 10 crypto pairs, maximum leverage x5
    </p>
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#717171]">Profit</p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
          <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-[3px] bg-[#e4fafc]">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#0d0c43]">642.24%</p>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-7 h-7">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[78.5px] top-[1.5px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx={14} cy={14} r={14} fill="#ECECEC" />
            </svg>
            <p className="w-3 h-3.5 absolute left-[87px] top-2.5 text-xs text-center text-[#3c3b3b]">
              ?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#717171]">Max Drawdown</p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
          <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-[3px] bg-[#e4fafc]">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#0d0c43]">7.21%</p>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-7 h-7">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[57.5px] top-[1.5px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx={14} cy={14} r={14} fill="#ECECEC" />
            </svg>
            <p className="w-3 h-3.5 absolute left-[66px] top-2.5 text-xs text-center text-[#3c3b3b]">
              ?
            </p>
          </div>
        </div>
      </div>
    </div>
    <svg
      width={360}
      height={1}
      viewBox="0 0 360 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="self-stretch flex-grow-0 flex-shrink-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2={360} y2="0.5" stroke="#EBEBEB" />
    </svg>
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
      <div className="flex flex-col justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#717171]">Quote currency</p>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3 px-2.5 py-2 rounded-md bg-neutral-50 border-[0.5px] border-[#d9d9d9]">
          <svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[25px] h-[25px] relative"
            preserveAspectRatio="none"
          >
            <g clip-path="url(#clip0_168_1281)">
              <mask
                id="mask0_168_1281"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={25}
                height={25}
              >
                <path d="M25 0H0V25H25V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_168_1281)">
                <path
                  d="M12.5 25C19.4035 25 25 19.4035 25 12.5C25 5.59644 19.4035 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4035 5.59644 25 12.5 25Z"
                  fill="#26A17B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0015 13.5807V13.5792C13.9156 13.5855 13.4727 13.612 12.4844 13.612C11.6953 13.612 11.1398 13.5886 10.9445 13.5792V13.5815C7.90703 13.448 5.63984 12.919 5.63984 12.2862C5.63984 11.6542 7.90703 11.1253 10.9445 10.9894V13.0549C11.143 13.069 11.7118 13.1027 12.4977 13.1027C13.4406 13.1027 13.9132 13.0636 14.0015 13.0557V10.9909C17.0328 11.1261 19.2945 11.6549 19.2945 12.2862C19.2945 12.919 17.0328 13.4464 14.0015 13.5807ZM14.0015 10.7761V8.92764H18.2312V6.10889H6.71484V8.92764H10.9445V10.7753C7.50703 10.9331 4.92188 11.6144 4.92188 12.4299C4.92188 13.2456 7.50703 13.9261 10.9445 14.0847V20.0081H14.0015V14.0831C17.4336 13.9253 20.0124 13.2448 20.0124 12.4299C20.0124 11.6152 17.4336 10.9347 14.0015 10.7761Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-lg font-light text-left text-[#303030]">
            Tether
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#717171]">Exchange</p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2.5 py-2">
          <img
            src="image-6.png"
            className="flex-grow-0 flex-shrink-0 w-[25px] h-[25px] object-cover"
          />
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#303030]">Poloniex</p>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#717171]">
          Winning trades
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">92%</p>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#717171]">
          Losing trades
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">8%</p>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#717171]">
          W/L Ratio
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">721/23</p>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-between items-start self-stretch flex-grow relative overflow-hidden p-4 rounded-md border border-[#ebebeb]">
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
      <div className="flex-grow-0 flex-shrink-0 w-[43px] h-[43px] relative">
        <div className="absolute left-[-1px] top-[-1px]" />
        <img
          src="image-7.png"
          className="w-11 h-11 absolute left-[-1.67px] top-[-2px] object-cover"
        />
      </div>
      <p className="flex-grow-0 flex-shrink-0 text-lg text-left text-black">
        Binance MemeCoin Scalper
      </p>
    </div>
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[360px] text-sm font-light text-left text-black">
      Buys promising meme coins that have just been listed and takes profits on highs
    </p>
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#717171]">Profit</p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
          <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-[3px] bg-[#e4fafc]">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#0d0c43]">1122.24%</p>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-7 h-7">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[79.5px] top-[1.5px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx={14} cy={14} r={14} fill="#ECECEC" />
            </svg>
            <p className="w-3 h-3.5 absolute left-[88px] top-2.5 text-xs text-center text-[#3c3b3b]">
              ?
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#717171]">Max Drawdown</p>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
          <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-2 py-1 rounded-[3px] bg-[#e4fafc]">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#0d0c43]">115.21%</p>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-7 h-7">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[68.5px] top-[1.5px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx={14} cy={14} r={14} fill="#ECECEC" />
            </svg>
            <p className="w-3 h-3.5 absolute left-[77px] top-2.5 text-xs text-center text-[#3c3b3b]">
              ?
            </p>
          </div>
        </div>
      </div>
    </div>
    <svg
      width={360}
      height={1}
      viewBox="0 0 360 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="self-stretch flex-grow-0 flex-shrink-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2={360} y2="0.5" stroke="#EBEBEB" />
    </svg>
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#717171]">Quote currency</p>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3 px-2.5 py-2 rounded-md bg-neutral-50 border-[0.5px] border-[#d9d9d9]">
          <svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[25px] h-[25px] relative"
            preserveAspectRatio="xMidYMid meet"
          >
            <g clip-path="url(#clip0_168_1264)">
              <path
                d="M12.5 25C14.9723 25 17.3891 24.2669 19.4447 22.8934C21.5003 21.5199 23.1024 19.5676 24.0485 17.2835C24.9946 14.9995 25.2422 12.4861 24.7599 10.0614C24.2775 7.63661 23.087 5.40933 21.3389 3.66117C19.5907 1.91301 17.3634 0.722505 14.9387 0.24019C12.5139 -0.242126 10.0006 0.005416 7.7165 0.951511C5.43242 1.89761 3.48019 3.49976 2.10667 5.55538C0.73315 7.61099 3.78442e-05 10.0277 3.78442e-05 12.5C-0.00400905 14.1427 0.316551 15.7699 0.943301 17.2883C1.57005 18.8067 2.49064 20.1863 3.65218 21.3479C4.81372 22.5094 6.19331 23.43 7.71171 24.0567C9.23011 24.6835 10.8574 25.0041 12.5 25Z"
                fill="#2775CA"
              />
              <path
                d="M15.9373 14.4795C15.9373 12.6613 14.8441 12.0307 12.6566 11.7704C11.093 11.5625 10.7816 11.1454 10.7816 10.417C10.7816 9.68861 11.3021 9.21816 12.343 9.21816C13.2816 9.21816 13.8021 9.53066 14.0623 10.3125C14.0903 10.3878 14.1407 10.4527 14.2067 10.4985C14.2728 10.5442 14.3513 10.5685 14.4316 10.5682H15.2646C15.3128 10.5694 15.3608 10.5608 15.4056 10.5429C15.4505 10.525 15.4912 10.4982 15.5253 10.4641C15.5594 10.43 15.5862 10.3893 15.6041 10.3444C15.622 10.2996 15.6306 10.2516 15.6294 10.2034V10.1522C15.5287 9.58774 15.2445 9.07228 14.8207 8.68596C14.397 8.29963 13.8575 8.06407 13.2862 8.01588V6.76588C13.2862 6.55793 13.1294 6.40225 12.8691 6.34998H12.0873C11.8794 6.34998 11.7237 6.50566 11.6714 6.76588V7.96816C10.1044 8.18179 9.11458 9.21816 9.11458 10.5204C9.11458 12.2397 10.1566 12.917 12.3441 13.1772C13.8021 13.4375 14.2759 13.7454 14.2759 14.5829C14.2759 15.4204 13.5475 15.9897 12.5578 15.9897C11.2032 15.9897 10.7396 15.4216 10.5782 14.6352C10.5633 14.5474 10.5181 14.4675 10.4504 14.4096C10.3827 14.3517 10.2969 14.3193 10.2078 14.3182H9.31799C9.26979 14.3171 9.22187 14.3258 9.17712 14.3437C9.13237 14.3617 9.09173 14.3885 9.05763 14.4226C9.02354 14.4567 8.99671 14.4973 8.97877 14.5421C8.96082 14.5868 8.95213 14.6347 8.95322 14.6829V14.7352C9.16231 16.0375 9.99526 16.975 11.7146 17.2352V18.4852C11.7146 18.6932 11.8703 18.85 12.1305 18.9022H12.9123C13.1203 18.9022 13.2771 18.7454 13.3282 18.4852V17.2352C14.8907 16.975 15.9328 15.8807 15.9328 14.475L15.9373 14.4795Z"
                fill="white"
              />
              <path
                d="M9.84314 19.9478C8.34453 19.3981 7.05081 18.4015 6.13687 17.0928C5.22293 15.7841 4.73284 14.2264 4.73284 12.6301C4.73284 11.0339 5.22293 9.47615 6.13687 8.16745C7.05081 6.85875 8.34453 5.8622 9.84314 5.31253C9.94314 5.26928 10.0271 5.19587 10.0834 5.10256C10.1396 5.00924 10.1653 4.90069 10.1568 4.79208V4.06253C10.1638 3.96684 10.1359 3.87184 10.0782 3.79516C10.0205 3.71848 9.93703 3.6653 9.84314 3.64549C9.76983 3.63784 9.69617 3.65635 9.63519 3.69776C7.73907 4.30043 6.08391 5.49085 4.9093 7.0967C3.73469 8.70256 3.10156 10.6405 3.10156 12.6301C3.10156 14.6197 3.73469 16.5577 4.9093 18.1636C6.08391 19.7694 7.73907 20.9599 9.63519 21.5625C9.67849 21.5877 9.72714 21.6022 9.77715 21.605C9.82716 21.6077 9.8771 21.5985 9.92289 21.5783C9.96867 21.558 10.009 21.5271 10.0406 21.4882C10.0721 21.4494 10.0941 21.4036 10.1045 21.3546C10.1568 21.3023 10.1568 21.25 10.1568 21.1455V20.4171C10.1568 20.2603 9.99996 20.0523 9.84314 19.9478ZM15.3647 3.69776C15.3214 3.6726 15.2726 3.65809 15.2225 3.65543C15.1725 3.65276 15.1225 3.66201 15.0767 3.68242C15.0309 3.70283 14.9905 3.73381 14.959 3.77283C14.9275 3.81184 14.9057 3.85777 14.8954 3.90685C14.8443 3.95799 14.8443 4.01026 14.8443 4.1148V4.84321C14.8531 4.94825 14.8858 5.04988 14.94 5.1403C14.9941 5.23072 15.0683 5.30752 15.1568 5.3648C16.6554 5.91448 17.9491 6.91102 18.8631 8.21972C19.777 9.52842 20.2671 11.0862 20.2671 12.6824C20.2671 14.2787 19.777 15.8364 18.8631 17.1451C17.9491 18.4538 16.6554 19.4504 15.1568 20C15.0569 20.0433 14.9731 20.1168 14.917 20.2101C14.861 20.3034 14.8355 20.412 14.8443 20.5205V21.25C14.8372 21.3456 14.865 21.4404 14.9224 21.5171C14.9799 21.5937 15.0631 21.647 15.1568 21.6671C15.2301 21.6747 15.3038 21.6562 15.3647 21.6148C17.2601 21.0038 18.9129 19.8074 20.0853 18.1976C21.2577 16.5879 21.8893 14.6477 21.8893 12.6563C21.8893 10.6648 21.2577 8.72471 20.0853 7.11495C18.9129 5.50519 17.2601 4.30877 15.3647 3.69776Z"
                fill="white"
              />
            </g>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-lg font-light text-left text-[#303030]">
            USDC
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#717171]">Exchange</p>
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[114px] relative px-2.5 py-2">
          <img
            src="image-6-2.png"
            className="flex-grow-0 flex-shrink-0 w-[25px] h-[25px] object-cover"
          />
          <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#303030]">Binance</p>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#717171]">
          Winning trades
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">92%</p>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#717171]">
          Losing trades
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">8%</p>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#717171]">
          W/L Ratio
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-sm font-light text-left text-black">721/23</p>
      </div>
    </div>
  </div>
</div>;
}