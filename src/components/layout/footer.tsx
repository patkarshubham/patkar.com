import { getCurrentYear } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900">
      <span className="absolute top-0 -translate-x-1/2 left-1/2">
        <svg
          width="1260"
          height="457"
          viewBox="0 0 1260 457"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_11105_867)">
            <circle cx="630" cy="-173.299" r="230" fill="#3B2EFF" />
          </g>
          <defs>
            <filter
              id="filter0_f_11105_867"
              x="0"
              y="-803.299"
              width="1260"
              height="1260"
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
                stdDeviation="200"
                result="effect1_foregroundBlur_11105_867"
              />
            </filter>
          </defs>
        </svg>
      </span>
      <div className="relative z-10 py-16 xl:py-24">
        <div className="container px-5 mx-auto sm:px-7">
          <div className="grid gap-y-8 gap-x-6 lg:grid-cols-12">
            <div className="lg:col-span-3 xl:col-span-4">
              <div>
                <Link href="/" className="block mb-6">
                  <Image
                    src="/images/logo-white.svg"
                    alt="patkars.com"
                    width={128}
                    height={32}
                  />
                </Link>
                <p className="block text-sm text-gray-400 mb-9">
                  patkars.com – AI-powered tools and SaaS. Transform ideas into
                  reality, streamline your workflow, and scale with intelligent
                  automation.
                </p>
                <div className="flex">
                  <a
                    href="https://www.linkedin.com/company/patkars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white/80 size-10"
                    aria-label="patkars.com on LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_11105_879)">
                        <path
                          d="M13.5447 3.68965C12.5249 3.22173 11.4313 2.87699 10.2879 2.67954C10.2671 2.67573 10.2463 2.68525 10.2356 2.7043C10.0949 2.95444 9.93915 3.28077 9.83006 3.53727C8.60027 3.35316 7.37679 3.35316 6.17221 3.53727C6.0631 3.27507 5.90166 2.95444 5.76038 2.7043C5.74966 2.68589 5.72886 2.67636 5.70803 2.67954C4.56527 2.87636 3.47171 3.2211 2.45129 3.68965C2.44246 3.69346 2.43488 3.69982 2.42986 3.70806C0.355594 6.80697 -0.212634 9.82971 0.0661201 12.815C0.0673814 12.8296 0.0755799 12.8435 0.086932 12.8524C1.45547 13.8574 2.78114 14.4676 4.08219 14.872C4.10301 14.8784 4.12507 14.8707 4.13832 14.8536C4.44608 14.4333 4.72043 13.9902 4.95565 13.5241C4.96953 13.4968 4.95628 13.4645 4.92791 13.4537C4.49275 13.2886 4.0784 13.0873 3.67982 12.8588C3.64829 12.8404 3.64577 12.7953 3.67477 12.7737C3.75865 12.7108 3.84255 12.6454 3.92264 12.5794C3.93713 12.5674 3.95732 12.5648 3.97435 12.5724C6.59286 13.7679 9.4277 13.7679 12.0153 12.5724C12.0323 12.5642 12.0525 12.5667 12.0677 12.5788C12.1478 12.6448 12.2316 12.7108 12.3161 12.7737C12.3451 12.7953 12.3433 12.8404 12.3117 12.8588C11.9131 13.0918 11.4988 13.2886 11.063 13.453C11.0346 13.4638 11.022 13.4968 11.0359 13.5241C11.2762 13.9895 11.5505 14.4327 11.8526 14.853C11.8652 14.8707 11.8879 14.8784 11.9087 14.872C13.2161 14.4676 14.5417 13.8574 15.9103 12.8524C15.9223 12.8435 15.9298 12.8302 15.9311 12.8156C16.2647 9.36431 15.3723 6.36636 13.5655 3.7087C13.5611 3.69982 13.5535 3.69346 13.5447 3.68965ZM5.34668 10.9973C4.55833 10.9973 3.90876 10.2735 3.90876 9.38464C3.90876 8.49578 4.54574 7.77202 5.34668 7.77202C6.15392 7.77202 6.79721 8.50214 6.78459 9.38464C6.78459 10.2735 6.14761 10.9973 5.34668 10.9973ZM10.6632 10.9973C9.87484 10.9973 9.22526 10.2735 9.22526 9.38464C9.22526 8.49578 9.86222 7.77202 10.6632 7.77202C11.4704 7.77202 12.1137 8.50214 12.1011 9.38464C12.1011 10.2735 11.4704 10.9973 10.6632 10.9973Z"
                          fill="currentColor"
                          fillOpacity="0.8"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11105_879">
                          <rect
                            width="16"
                            height="16"
                            fill="currentColor"
                            transform="translate(0 0.919434)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/patkars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white/80 size-10"
                    aria-label="patkars.com on X (Twitter)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M12.2176 2.18848H14.4666L9.55323 7.80414L15.3334 15.4458H10.8076L7.26277 10.8112L3.20671 15.4458H0.956369L6.2117 9.43921L0.666748 2.18848H5.30749L8.51168 6.4247L12.2176 2.18848ZM11.4283 14.0997H12.6745L4.63034 3.4639H3.29306L11.4283 14.0997Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/patkars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white/80 size-10"
                    aria-label="patkars.com on GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_11105_885)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.00009 1.25293C6.10091 1.25392 4.264 1.92657 2.81783 3.15061C1.37166 4.37465 0.410521 6.07027 0.106282 7.93426C-0.197957 9.79825 0.174536 11.7091 1.15717 13.325C2.13979 14.941 3.66848 16.1568 5.46987 16.7549C5.86729 16.8287 6.01698 16.5824 6.01698 16.3729C6.01698 16.1635 6.00903 15.5563 6.00638 14.8924C3.78085 15.3732 3.31057 13.9533 3.31057 13.9533C2.9476 13.0312 2.42301 12.7889 2.42301 12.7889C1.69706 12.2962 2.47733 12.3054 2.47733 12.3054C3.28143 12.3621 3.70402 13.1261 3.70402 13.1261C4.41672 14.3418 5.57585 13.9901 6.03155 13.7847C6.10309 13.2696 6.31107 12.9193 6.54025 12.7204C4.76247 12.5202 2.89461 11.8378 2.89461 8.78988C2.88359 7.9994 3.1786 7.23496 3.71859 6.65472C3.63646 6.4545 3.36224 5.64575 3.79675 4.54722C3.79675 4.54722 4.46839 4.33383 5.99712 5.36256C7.30836 5.00601 8.69183 5.00601 10.0031 5.36256C11.5305 4.33383 12.2008 4.54722 12.2008 4.54722C12.6366 5.64312 12.3624 6.45187 12.2803 6.65472C12.822 7.23506 13.1176 8.00083 13.1056 8.79251C13.1056 11.8471 11.2337 12.5202 9.45331 12.7164C9.73945 12.964 9.99512 13.4475 9.99512 14.1903C9.99512 15.2546 9.98585 16.1108 9.98585 16.3729C9.98585 16.585 10.1302 16.8326 10.5356 16.7549C12.3372 16.1567 13.866 14.9407 14.8487 13.3245C15.8313 11.7082 16.2036 9.79713 15.899 7.93296C15.5944 6.0688 14.6328 4.37317 13.1861 3.14933C11.7395 1.9255 9.90215 1.25329 8.00274 1.25293H8.00009Z"
                          fill="currentColor"
                        />
                        <path
                          d="M3.02954 12.6743C3.01232 12.7139 2.94873 12.7257 2.89707 12.6981C2.84541 12.6704 2.80699 12.619 2.82554 12.5782C2.84408 12.5374 2.90635 12.5268 2.95801 12.5545C3.00967 12.5821 3.04941 12.6348 3.02954 12.6743Z"
                          fill="currentColor"
                        />
                        <path
                          d="M3.35423 13.0339C3.3268 13.0476 3.29541 13.0514 3.26545 13.0447C3.23548 13.038 3.2088 13.0211 3.18997 12.997C3.13831 12.9417 3.1277 12.8653 3.16744 12.831C3.20719 12.7968 3.27873 12.8126 3.33039 12.8679C3.38205 12.9232 3.39398 12.9996 3.35423 13.0339Z"
                          fill="currentColor"
                        />
                        <path
                          d="M3.66958 13.4908C3.62056 13.525 3.5371 13.4908 3.49074 13.4223C3.47791 13.41 3.46772 13.3953 3.46075 13.379C3.45379 13.3627 3.4502 13.3452 3.4502 13.3275C3.4502 13.3098 3.45379 13.2922 3.46075 13.2759C3.46772 13.2596 3.47791 13.2449 3.49074 13.2326C3.53975 13.1997 3.62321 13.2326 3.66958 13.2998C3.71594 13.367 3.71727 13.4565 3.66958 13.4908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M4.09725 13.9334C4.05353 13.9822 3.96478 13.969 3.89192 13.9031C3.81906 13.8373 3.80183 13.7477 3.84555 13.7003C3.88926 13.6529 3.97802 13.666 4.05353 13.7306C4.12904 13.7951 4.14361 13.886 4.09725 13.9334Z"
                          fill="currentColor"
                        />
                        <path
                          d="M4.69753 14.1917C4.67766 14.2536 4.58758 14.2813 4.4975 14.2549C4.40742 14.2286 4.3478 14.1548 4.36502 14.0916C4.38225 14.0284 4.47365 13.9994 4.56506 14.0284C4.65646 14.0573 4.71475 14.1271 4.69753 14.1917Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.35189 14.2361C5.35189 14.3006 5.27771 14.3559 5.18233 14.3572C5.08695 14.3586 5.00879 14.3059 5.00879 14.2413C5.00879 14.1768 5.08297 14.1215 5.17835 14.1201C5.27373 14.1188 5.35189 14.1702 5.35189 14.2361Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.96118 14.1349C5.9731 14.1994 5.90687 14.2666 5.81149 14.2824C5.71611 14.2982 5.63265 14.26 5.62073 14.1968C5.60881 14.1336 5.67769 14.0651 5.77042 14.0479C5.86315 14.0308 5.94926 14.0703 5.96118 14.1349Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11105_885">
                          <rect
                            width="16"
                            height="16"
                            fill="currentColor"
                            transform="translate(0 0.919434)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/patkars"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white/80 size-10"
                    aria-label="patkars.com on Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_11105_895)">
                        <path
                          d="M10.5 11.0444H12.375L13.125 8.04443H10.5V6.54443C10.5 5.7724 10.5 5.04443 12 5.04443H13.125V2.52451C12.8807 2.49207 11.9573 2.41943 10.9822 2.41943C8.9463 2.41943 7.5 3.66208 7.5 5.94422V8.04443H5.25V11.0444H7.5V17.4194H10.5V11.0444Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11105_895">
                          <rect
                            width="18"
                            height="18"
                            fill="currentColor"
                            transform="translate(0 0.919434)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="grid sm:grid-cols-3 gap-7">
                <div>
                  <span className="block mb-6 text-sm text-gray-400">
                    Services
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Status
                    </Link>
                    <Link
                      href="/pricing"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/pricing#faq"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Help Docs
                    </Link>
                    <Link
                      href="/privacy"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                  </nav>
                </div>
                <div>
                  <span className="block mb-6 text-sm text-gray-400">
                    Features
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      HTML File Upload
                    </Link>
                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      HTML website hosting
                    </Link>
                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Free Image Hosting
                    </Link>
                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Upload PDF Online
                    </Link>
                    <Link
                      href="/"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Free Zip file hosting
                    </Link>
                  </nav>
                </div>
                <div>
                  <span className="relative block mb-6 text-sm text-gray-400">
                    Account
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <Link
                      href="/signin"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Sign Up
                    </Link>
                    <Link
                      href="/reset-password"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Reset Password
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Support
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div>
                <span className="block mb-6 text-sm text-gray-400">
                  Stay In Touch
                </span>
                <p className="block mb-5 text-sm text-gray-400">
                  Subscribe now for exclusive insights and offers!
                </p>
                <form>
                  <div className="flex flex-col items-center gap-2 w-full sm:max-w-64">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-12 p-4 text-sm text-white border border-gray-700 rounded-full placeholder:text-center placeholder:text-gray-400 placeholder:text-sm text-center placeholder:font-normal focus:outline-0"
                      required
                    />
                    <button className="w-full px-6 py-3 text-sm font-medium text-white transition rounded-full cursor-pointer bg-primary-500 hover:bg-primary-600">
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container relative z-10 px-5 mx-auto sm:px-7">
          <div className="py-5 text-center">
            <p className="text-sm text-gray-500">
              &copy; {getCurrentYear()} patkars.com – All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
