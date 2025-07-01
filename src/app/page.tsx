import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full" style={{ background: 'black', maxHeight: '100vh', overflowY: 'auto' }}>
      <svg width="1440" height="1694" viewBox="0 0 1440 1694" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', display: 'block'}}>
        {/* Yellow (with blur) */}
        <g filter="url(#filter0_f_459_475)">
          <path d="M1014 225.674C1014 273.189 882.148 187.286 719.5 187.286C556.852 187.286 425 273.189 425 225.674C425 178.16 556.852 124 719.5 124C882.148 124 1014 178.16 1014 225.674Z" fill="url(#paint0_linear_459_475)"/>
        </g>
        {/* Yellow-orange (with blur) */}
        <g filter="url(#filter4_f_459_475)">
          <path d="M770 154.014C770 165.888 747.614 175.514 720 175.514C692.386 175.514 670 165.888 670 154.014C670 142.14 692.386 143.014 720 143.014C747.614 143.014 770 142.14 770 154.014Z" fill="#FE8A57"/>
        </g>
        {/* Pink (with blur) */}
        <g filter="url(#filter3_f_459_475)">
          <path d="M1041 230.192C1041 282.622 897.06 187.833 719.5 187.833C541.94 187.833 398 282.622 398 230.192C398 177.762 541.94 118 719.5 118C897.06 118 1041 177.762 1041 230.192Z" fill="#E56488"/>
        </g>
        {/* Purple/blue shapes (sharp) */}
        <path d="M1440 874C1440 1271.65 1117.65 1594 720 1594C322.355 1594 0 1271.65 0 874C0 476.355 322.355 154 720 154C1117.65 154 1440 476.355 1440 874ZM133.83 874C133.83 1197.73 396.267 1460.17 720 1460.17C1043.73 1460.17 1306.17 1197.73 1306.17 874C1306.17 550.267 1043.73 287.83 720 287.83C396.267 287.83 133.83 550.267 133.83 874Z" fill="url(#paint1_radial_459_475)"/>
        <ellipse cx="720" cy="929" rx="649" ry="619" fill="#0A0E12"/>
        <defs>
          <filter id="filter0_f_459_475" x="275" y="-26" width="889" height="416" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_459_475"/>
          </filter>
          <filter id="filter3_f_459_475" x="98" y="-182" width="1243" height="728" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_459_475"/>
          </filter>
          <filter id="filter4_f_459_475" x="590" y="63" width="260" height="192.514" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_459_475"/>
          </filter>
          <linearGradient id="paint0_linear_459_475" x1="425" y1="182" x2="1014" y2="182" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9851D3"/>
            <stop offset="0.5" stopColor="#FFE78E"/>
            <stop offset="1" stopColor="#9851D3"/>
          </linearGradient>
          <radialGradient id="paint1_radial_459_475" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(720 154) rotate(90) scale(595.5 720)">
            <stop stopColor="#FFE78E"/>
            <stop offset="0.35" stopColor="#9851D3"/>
            <stop offset="0.7" stopColor="#192D59"/>
            <stop offset="1" stopColor="#0D1117"/>
          </radialGradient>
        </defs>
      </svg>
      {/* Solid black overlay covering the middle and bottom arch */}
      <div style={{ width: '100%', height: 320, background: 'black' }} />
      <svg width="1440" height="2078" viewBox="0 0 1440 2078" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: 'auto', display: 'block'}}>
        <g filter="url(#filter0_f_459_481)">
          <path d="M1493.63 1114C1543.54 1114 1584 1413.12 1584 1782.1C1584 2151.09 1543.54 2450.21 1493.63 2450.21C1487.62 2450.21 1481.74 2445.86 1476.05 2437.58C1471.57 2431.04 1460.12 2432.08 1458.24 2439.78C1428.57 2561.81 1383.06 2639.92 1332.02 2639.92C1249.93 2639.92 1182.11 2437.86 1171.56 2175.93C1171.25 2168.04 1157.34 2165.24 1149.45 2165.24C1142.82 2165.24 1131.71 2168.47 1131.77 2175.1C1131.85 2183.99 1131.9 2192.92 1131.9 2201.9C1131.9 2570.88 1059.42 2870 970.021 2870C905.56 2870 849.898 2714.49 823.859 2489.41C822.748 2479.8 806.269 2479.45 804.685 2488.99C789.128 2582.72 769.271 2638.92 747.638 2638.92C734.384 2638.92 721.797 2617.82 710.457 2579.93C707.949 2571.54 694.631 2571.89 692.787 2580.44C663.44 2716.61 615.296 2805.4 560.877 2805.4C471.475 2805.4 399 2565.75 399 2270.12C399 1974.49 471.475 1734.84 560.877 1734.84C590.792 1734.84 618.812 1761.67 642.855 1808.46C646.833 1816.2 659.775 1813.66 660.075 1804.96C670.052 1516.21 705.473 1302.71 747.638 1302.71C786.81 1302.71 820.16 1486.97 832.697 1744.66C833.167 1754.33 849.531 1755.54 851.668 1746.09C881.215 1615.46 923.307 1533.79 970.021 1533.79C1027.16 1533.79 1077.39 1655.99 1106.19 1840.53C1107.59 1849.46 1123.22 1850.47 1127.11 1842.31C1133.72 1828.41 1141.34 1820.48 1149.45 1820.48C1157.17 1820.48 1164.44 1827.66 1170.82 1840.34C1174.84 1848.31 1190.01 1847.31 1191.53 1838.52C1219.46 1677.68 1271.91 1569.35 1332.02 1569.35C1352.55 1569.35 1372.2 1582 1390.27 1605.07C1395.21 1611.37 1406.34 1608.35 1406.65 1600.35C1417.36 1319.69 1452.24 1114 1493.63 1114Z" fill="url(#paint0_linear_459_481)"/>
        </g>
        <g filter="url(#filter1_f_459_481)">
          <path d="M6.36816 2054C-43.5406 2054 -84 1754.88 -84 1385.9C-84 1016.91 -43.5406 717.791 6.36816 717.79C12.5131 717.79 18.5144 722.325 24.3146 730.966C28.738 737.556 40.2079 736.539 42.095 728.829C71.7716 607.592 117.139 530.08 167.982 530.08C250.074 530.08 317.894 732.144 328.437 994.065C328.754 1001.96 342.655 1004.76 350.552 1004.76C357.18 1004.76 368.295 1001.53 368.231 994.905C368.146 986.015 368.103 977.08 368.103 968.104C368.103 599.121 440.577 300.001 529.979 300C594.386 300 650.008 455.246 676.075 680.019C677.189 689.629 693.664 689.981 695.245 680.437C710.812 586.452 730.696 530.081 752.362 530.081C765.666 530.081 778.296 551.333 789.669 589.496C792.168 597.883 805.484 597.548 807.333 588.994C836.692 453.148 884.779 364.597 939.123 364.597C1028.53 364.597 1101 604.251 1101 899.879C1101 1195.51 1028.53 1435.16 939.123 1435.16C909.193 1435.16 881.162 1408.3 857.111 1361.47C853.134 1353.73 840.194 1356.27 839.892 1364.97C829.871 1653.25 794.482 1866.29 752.362 1866.29C713.231 1866.29 679.911 1682.41 667.344 1425.15C666.871 1415.47 650.511 1414.27 648.376 1423.72C618.827 1554.46 576.716 1636.21 529.979 1636.21C472.836 1636.21 422.613 1514.01 393.806 1329.48C392.411 1320.54 376.775 1319.53 372.892 1327.69C366.282 1341.59 358.663 1349.52 350.552 1349.52C342.832 1349.52 335.558 1342.34 329.176 1329.66C325.164 1321.69 309.993 1322.69 308.466 1331.48C280.544 1492.32 228.09 1600.65 167.982 1600.65C147.418 1600.65 127.75 1587.97 109.653 1564.84C104.717 1558.53 93.5866 1561.55 93.2778 1569.55C82.4855 1849.23 47.662 2054 6.36816 2054Z" fill="url(#paint1_linear_459_481)"/>
        </g>
        <defs>
          <filter id="filter0_f_459_481" x="99" y="814" width="1785" height="2356" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_459_481"/>
          </filter>
          <filter id="filter1_f_459_481" x="-384" y="0" width="1785" height="2354" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_459_481"/>
          </filter>
          <linearGradient id="paint0_linear_459_481" x1="991.5" y1="1114" x2="992.001" y2="2596.34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE78E"/>
            <stop offset="0.182692" stopColor="#FE8A57"/>
            <stop offset="0.471154" stopColor="#9851D3"/>
            <stop offset="0.677885" stopColor="#0C2762"/>
            <stop offset="1" stopColor="#0A0E12"/>
          </linearGradient>
          <linearGradient id="paint1_linear_459_481" x1="508.5" y1="2054" x2="508.999" y2="1274.44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE78E"/>
            <stop offset="0.182692" stopColor="#FE8A57"/>
            <stop offset="0.471154" stopColor="#9851D3"/>
            <stop offset="1" stopColor="#0A0E12"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
