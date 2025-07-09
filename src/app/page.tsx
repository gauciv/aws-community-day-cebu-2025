import Hero from '@/components/Hero'
import Tagline from '@/components/Tagline'
import FirstToKnowForm from '@/components/FirstToKnowForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* SVG Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <svg
          viewBox="0 0 1440 1694"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <g filter="url(#filter0_f_479_493)">
            <path
              d="M1014 225.674C1014 273.189 882.148 187.286 719.5 187.286C556.852 187.286 425 273.189 425 225.674C425 178.16 556.852 124 719.5 124C882.148 124 1014 178.16 1014 225.674Z"
              fill="url(#paint0_linear_479_493)"
            />
          </g>
          <path
            d="M1440 874C1440 1271.65 1117.65 1594 720 1594C322.355 1594 0 1271.65 0 874C0 476.355 322.355 154 720 154C1117.65 154 1440 476.355 1440 874ZM133.83 874C133.83 1197.73 396.267 1460.17 720 1460.17C1043.73 1460.17 1306.17 1197.73 1306.17 874C1306.17 550.267 1043.73 287.83 720 287.83C396.267 287.83 133.83 550.267 133.83 874Z"
            fill="url(#paint1_radial_479_493)"
          />
          <ellipse cx="720" cy="929" rx="649" ry="619" fill="#0A0E12" />
          <g filter="url(#filter3_f_479_493)">
            <path
              d="M1041 230.192C1041 282.622 897.06 187.833 719.5 187.833C541.94 187.833 398 282.622 398 230.192C398 177.762 541.94 118 719.5 118C897.06 118 1041 177.762 1041 230.192Z"
              fill="#FF6B35"
            />
          </g>
          <g filter="url(#filter4_f_479_493)">
            <path
              d="M770 154.014C770 165.888 747.614 175.514 720 175.514C692.386 175.514 670 165.888 670 154.014C670 142.14 692.386 143.014 720 143.014C747.614 143.014 770 142.14 770 154.014Z"
              fill="#FF6B35"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_479_493"
              x="275"
              y="-26"
              width="889"
              height="416"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="75"
                result="effect1_foregroundBlur_479_493"
              />
            </filter>
            <filter
              id="filter3_f_479_493"
              x="98"
              y="-182"
              width="1243"
              height="728"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="150"
                result="effect1_foregroundBlur_479_493"
              />
            </filter>
            <filter
              id="filter4_f_479_493"
              x="590"
              y="63"
              width="260"
              height="192.514"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="40"
                result="effect1_foregroundBlur_479_493"
              />
            </filter>
            <linearGradient
              id="paint0_linear_479_493"
              x1="425"
              y1="182"
              x2="1014"
              y2="182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A90E2" />
              <stop offset="0.5" stopColor="#F7931E" />
              <stop offset="1" stopColor="#4A90E2" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_479_493"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(720 127) rotate(90) scale(609 1012.15)"
            >
              <stop stopColor="#F7931E" />
              <stop offset="0.12465" stopColor="#FF6B35" />
              <stop offset="0.420817" stopColor="#4A90E2" />
              <stop offset="0.675336" stopColor="#4A90E2" />
              <stop offset="1" stopColor="#0D1117" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <Hero />
        <Tagline />
        <FirstToKnowForm />
        <Footer />
      </div>
    </main>
  )
}
