import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const targetDate = new Date('2027-03-01 00:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-[#B84644] rounded-[20px] w-[110px] sm:w-[130px] md:w-[150px] h-[130px] sm:h-[150px] md:h-[170px] flex-shrink-0">
      <div className="text-[32px] sm:text-[38px] md:text-[44px] font-poppins font-black text-white leading-none">
        {String(value).padStart(2, '0')}
      </div>
      <div className="border-b border-dashed border-white w-full h-[2px] my-2 max-w-[80%] mx-auto"></div>
      <div className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-normal text-white mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-rouge overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between">
        <div className="relative z-10 text-center xl:text-left mb-8 xl:mb-0">
          <p className="font-kindheart text-[20px] text-white mb-2">Envie</p>
          <h2 className="text-white text-[32px] sm:text-[36px] md:text-[44px] font-poppins font-black leading-tight">
            Ouverture de la<br />
            pré-vente dans…
          </h2>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4">
          <TimeBox value={timeLeft.days} label="Jours" />
          <TimeBox value={timeLeft.hours} label="Heures" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Secondes" />
        </div>
      </div>

      {/* Decorations */}
      {/* Yellow Arc (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-auto h-auto z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="219" height="116" viewBox="0 0 219 116" fill="none">
          <g clip-path="url(#clip0_8061_687)">
            <path d="M143.512 148.543C138.787 148.777 134.042 148.6 129.27 147.895C111.579 145.302 96.4879 135.795 85.605 120.352C79.0876 111.097 74.3474 101.49 69.8006 92.2262C60.8096 73.9869 54.6518 62.4818 41.9077 56.4133C25.6078 48.6403 2.29858 49.0568 -22.0802 57.6045L-35.6746 18.8237C-1.14372 6.74893 33.6105 6.94236 59.6415 19.3463C85.9146 31.8852 96.9658 54.3116 106.71 74.1C110.764 82.3308 114.59 90.1028 119.272 96.7456C123.669 102.962 128.748 106.324 135.237 107.267C149.402 109.329 171.145 100.441 192.018 84.0471L217.442 116.339C202.036 128.439 173.654 147.084 143.514 148.573L143.512 148.543Z" fill="#F8B100" />
          </g>
          <defs>
            <clipPath id="clip0_8061_687">
              <rect width="248" height="145" fill="white" transform="translate(-36 12.2303) rotate(-2.82673)" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* White Curve (Top Right) */}
      <div className="absolute top-0 right-0 w-auto h-auto z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="137" height="77" viewBox="0 0 137 77" fill="none">
          <g clip-path="url(#clip0_8028_2466)">
            <path d="M119.184 77C110.23 77 101.164 76.0335 92.0985 74.078C46.8591 64.2779 11.5854 31.7759 0 -10.7509L30.3921 -19C38.8731 12.1534 65.0809 36.0241 98.7799 43.3292C132.546 50.6343 165.076 40.115 185.749 15.1878L210 35.2824C187.729 62.1201 154.48 77 119.184 77Z" fill="#F6F1EA" />
          </g>
          <defs>
            <clipPath id="clip0_8028_2466">
              <rect width="210" height="96" fill="white" transform="translate(0 -19)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
}
