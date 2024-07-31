import theme from '@/styles/theme';

const DietIcon = ({
  size,
  color,
}: {
  size: number;
  color: keyof typeof theme;
}) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.1505 12.0783C23.5972 11.3395 22.8111 10.8087 21.9191 10.5716C22.3539 9.30776 22.6751 8.00767 22.8791 6.68677C22.9458 6.20662 22.9 5.71755 22.7456 5.25807C22.5911 4.79859 22.3321 4.38124 21.9889 4.03887C21.6457 3.6965 21.2278 3.43846 20.7679 3.28507C20.3081 3.13167 19.8189 3.08711 19.3389 3.15489C19.2077 3.17259 18.8183 3.22985 18.2862 3.33294C18.6157 2.6035 18.7718 1.80769 18.7423 1.00785C18.7379 0.871115 18.7066 0.736578 18.6503 0.611924C18.5939 0.48727 18.5135 0.374939 18.4137 0.281345C18.314 0.187751 18.1967 0.114727 18.0687 0.0664423C17.9407 0.0181577 17.8045 -0.00444197 17.6677 -6.63725e-05C17.531 0.00430922 17.3964 0.0355744 17.2718 0.091944C17.1471 0.148314 17.0348 0.228684 16.9412 0.328466C16.8476 0.428248 16.7746 0.545487 16.7263 0.673491C16.678 0.801494 16.6554 0.937754 16.6598 1.07449C16.6776 1.57748 16.5744 2.07738 16.3589 2.53223C16.2083 2.12578 15.9935 1.74612 15.7227 1.40769C15.2624 0.883837 14.6781 0.483746 14.0233 0.244003C13.3684 0.0042605 12.6639 -0.0674824 11.9742 0.0353358C11.2179 0.096041 10.4951 0.372901 9.89174 0.832924C9.20967 0.319795 8.38451 0.0322434 7.53126 0.010346C6.44856 -0.0945895 5.3684 0.233764 4.52728 0.923512C4.1002 1.30374 3.75537 1.76729 3.514 2.28567C3.27263 2.80404 3.1398 3.3663 3.12369 3.9379C3.09512 4.85316 3.3616 5.75336 3.8838 6.50559C3.24854 7.05026 2.75542 7.74138 2.44702 8.51927C2.13862 9.29716 2.02422 10.1384 2.11369 10.9704C1.29023 11.4293 0.648507 12.156 0.295075 13.03C-0.0583574 13.9039 -0.10223 14.8724 0.170742 15.7747C0.883999 18.2565 2.21155 20.5184 4.03061 22.3512C5.77573 24.0528 8.11971 25.0004 10.5571 24.9897H14.4326C16.8697 25.0006 19.2134 24.0529 20.958 22.3512C22.7778 20.5187 24.1057 18.2567 24.8189 15.7747C25.0048 15.1493 25.0412 14.4889 24.9251 13.8469C24.809 13.2048 24.5436 12.599 24.1505 12.0783ZM19.6284 5.21654C19.7895 5.1948 19.9535 5.2106 20.1075 5.26272C20.2615 5.31484 20.4014 5.40186 20.5162 5.51698C20.631 5.63211 20.7177 5.77222 20.7694 5.92637C20.8211 6.08053 20.8365 6.24455 20.8143 6.40563C20.596 7.77297 20.2419 9.11516 19.7575 10.4123H17.0909L18.4372 9.066C18.6269 8.86962 18.7318 8.6066 18.7294 8.33359C18.7271 8.06058 18.6176 7.79942 18.4245 7.60637C18.2314 7.41331 17.9703 7.30381 17.6973 7.30144C17.4243 7.29906 17.1613 7.40402 16.9649 7.59369L14.1462 10.4123H12.5334C12.4573 9.86468 12.5095 9.30686 12.6859 8.78284C12.8622 8.25883 13.1579 7.78295 13.5496 7.39273C13.9942 6.94395 15.6987 5.72674 19.6284 5.21654ZM5.20617 4.00766C5.21243 3.721 5.27706 3.43863 5.39611 3.17779C5.51516 2.91695 5.68614 2.68312 5.89859 2.49058C6.32818 2.17304 6.86186 2.02949 7.39277 2.08866C7.64921 2.07811 7.90498 2.12192 8.14329 2.21721C8.3816 2.3125 8.59706 2.45711 8.77554 2.64156C8.91603 2.79854 9.08807 2.9241 9.28042 3.01005C9.47276 3.09599 9.68107 3.14038 9.89174 3.14031C10.1019 3.13927 10.3095 3.09405 10.5011 3.00759C10.6927 2.92113 10.864 2.79536 11.0038 2.63843C11.1591 2.47416 11.3454 2.34235 11.5521 2.25066C11.7587 2.15896 11.9815 2.10921 12.2075 2.10428C12.5516 2.04297 12.9057 2.06794 13.2378 2.17697C13.57 2.286 13.8699 2.47567 14.1108 2.72902C14.4269 3.13369 14.5919 3.63598 14.5773 4.14927C14.5773 4.21695 14.5773 4.3648 14.5773 4.3648C13.1951 4.86254 12.0143 5.80005 11.2162 7.0335C10.5587 6.25515 9.68389 5.69072 8.70373 5.41248C7.72357 5.13424 6.68268 5.15484 5.7143 5.47164C5.36875 5.06382 5.18759 4.54186 5.20617 4.00766ZM4.16493 10.4123C4.16493 9.58386 4.49404 8.78933 5.07985 8.20352C5.66566 7.61771 6.46019 7.2886 7.28865 7.2886C8.11711 7.2886 8.91164 7.61771 9.49745 8.20352C10.0833 8.78933 10.4124 9.58386 10.4124 10.4123H4.16493ZM22.8198 15.1906C22.1976 17.3325 21.0526 19.2862 19.4878 20.8757C18.1348 22.1903 16.319 22.92 14.4326 22.9072H10.5571C8.67014 22.9195 6.85389 22.1899 5.4998 20.8757C3.93491 19.2863 2.78989 17.3326 2.16784 15.1906C2.07449 14.8753 2.05639 14.5426 2.11498 14.219C2.17357 13.8955 2.30722 13.5903 2.5052 13.3278C2.6973 13.0687 2.94757 12.8583 3.23585 12.7136C3.52414 12.5689 3.84238 12.494 4.16493 12.4948H20.8247C21.1484 12.493 21.4678 12.5675 21.7573 12.7122C22.0467 12.8569 22.298 13.0678 22.4907 13.3278C22.6873 13.591 22.8195 13.8966 22.8766 14.2201C22.9337 14.5436 22.9143 14.8759 22.8198 15.1906Z"
          fill={theme[color]}
        />
      </svg>
    </>
  );
};

export default DietIcon;