import theme from '@/styles/theme';

const MyPageIcon = ({ color }: { color: keyof typeof theme }) => {
  return (
    <>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_730_38)">
          <path
            d="M9.5 12C12.809 12 15.5 9.309 15.5 6C15.5 2.691 12.809 0 9.5 0C6.191 0 3.5 2.691 3.5 6C3.5 9.309 6.191 12 9.5 12ZM9.5 2C11.706 2 13.5 3.794 13.5 6C13.5 8.206 11.706 10 9.5 10C7.294 10 5.5 8.206 5.5 6C5.5 3.794 7.294 2 9.5 2ZM11.25 16.22C10.682 16.074 10.093 16 9.5 16C5.64 16 2.5 19.14 2.5 23C2.5 23.552 2.052 24 1.5 24C0.948 24 0.5 23.552 0.5 23C0.5 18.038 4.538 14 9.5 14C10.262 14 11.019 14.095 11.75 14.284C12.285 14.422 12.606 14.967 12.469 15.502C12.332 16.037 11.789 16.358 11.251 16.221L11.25 16.22ZM23.621 11.879C22.487 10.745 20.511 10.745 19.378 11.879L12.671 18.586C11.916 19.341 11.499 20.346 11.499 21.415V23.001C11.499 23.553 11.947 24.001 12.499 24.001H14.085C15.154 24.001 16.158 23.584 16.913 22.829L23.62 16.122C24.187 15.555 24.499 14.802 24.499 14C24.499 13.198 24.187 12.445 23.621 11.879ZM22.206 14.707L15.498 21.414C15.121 21.792 14.619 22 14.084 22H13.498V21.414C13.498 20.88 13.706 20.378 14.084 20L20.792 13.293C21.169 12.915 21.828 12.915 22.206 13.293C22.395 13.481 22.499 13.732 22.499 14C22.499 14.268 22.395 14.518 22.206 14.707Z"
            fill={theme[color]}
          />
        </g>
        <defs>
          <clipPath id="clip0_730_38">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default MyPageIcon;