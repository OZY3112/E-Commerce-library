const Landing = () => {
    return ( 
        <section id="landing">
            <header>
                    <div className="header__container">
                        <div className="header__description">
                            <h1>Egypt's most awarded online library</h1>
                            <h2>Find you dream book with <span className="purple">library</span> right now!</h2>
                            <a href="#features"><button className="btn">Browse Books</button></a>
                        </div>
                        <figure className="header__img--wrapper">
                        <svg width="638" height="637" viewBox="0 0 638 637" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="undrawn_Books 1" clip-path="url(#clip0_1_2)">
<g id="leaf2">
<path id="leaf2_2" d="M541.87 282.95C525.89 300.89 523.06 324.95 520.5 349.49C518.59 367.64 516.83 386.06 510 402.47C504.229 416.103 495.044 428.019 483.33 437.07C482.28 437.89 481.21 438.68 480.12 439.45H421.85C421.76 438.66 421.69 437.86 421.62 437.07C419.112 407.203 425.888 377.291 441.02 351.42C447.075 341.287 454.383 331.957 462.77 323.65C471.86 339.52 483.08 354.86 483.08 354.86L478.01 310.38C496.748 296.177 518.669 286.761 541.87 282.95Z" fill="#F2F2F2"/>
</g>
<g id="leaf">
<path id="leaf_2" d="M637.79 335.36C598.99 350.89 587.56 400.76 555.96 428.12C552.059 431.486 547.855 434.482 543.4 437.07C541.96 437.91 540.5 438.71 539.01 439.45H455.13C455.33 438.66 455.52 437.86 455.73 437.07C464.67 402.38 486.84 371.12 516.99 351.67C518.15 350.92 519.32 350.19 520.5 349.49C529.439 344.131 538.943 339.778 548.84 336.51C549.9 354.76 553.1 373.5 553.1 373.5L568.4 331.43C591.505 327.074 615.324 328.423 637.79 335.36Z" fill="#F2F2F2"/>
</g>
<path id="Vector" d="M637.67 438.26C637.671 438.416 637.64 438.571 637.58 438.716C637.521 438.861 637.433 438.992 637.323 439.103C637.212 439.213 637.081 439.301 636.936 439.36C636.791 439.42 636.636 439.451 636.48 439.45H1.19C0.874395 439.45 0.57171 439.325 0.348541 439.101C0.125373 438.878 0 438.576 0 438.26C0 437.944 0.125373 437.642 0.348541 437.419C0.57171 437.195 0.874395 437.07 1.19 437.07H636.48C636.636 437.07 636.791 437.1 636.936 437.16C637.081 437.219 637.212 437.307 637.323 437.418C637.433 437.528 637.521 437.659 637.58 437.804C637.64 437.949 637.671 438.104 637.67 438.26V438.26Z" fill="#CCCCCC"/>
<path id="Vector_2" d="M399.411 447.133H288.395C283.266 447.135 278.186 446.127 273.447 444.166C268.707 442.205 264.4 439.329 260.772 435.703C257.144 432.077 254.266 427.772 252.303 423.033C250.339 418.294 249.329 413.215 249.329 408.086C249.329 402.957 250.339 397.877 252.303 393.139C254.266 388.4 257.144 384.095 260.772 380.469C264.4 376.843 268.707 373.967 273.447 372.006C278.186 370.045 283.266 369.036 288.395 369.039H399.411C404.54 369.036 409.62 370.045 414.36 372.006C419.099 373.967 423.406 376.843 427.034 380.469C430.662 384.095 433.54 388.4 435.504 393.139C437.467 397.877 438.478 402.957 438.478 408.086C438.478 413.215 437.467 418.294 435.504 423.033C433.54 427.772 430.662 432.077 427.034 435.703C423.406 439.329 419.099 442.205 414.36 444.166C409.62 446.127 404.54 447.135 399.411 447.133V447.133Z" fill="#2F2E41"/>
<g id="upload">
<path id="hand" d="M212.531 64.1053C214.022 65.8165 215.119 67.8338 215.745 70.0149C216.372 72.1961 216.512 74.4881 216.157 76.7294C215.802 78.9708 214.96 81.1071 213.69 82.9878C212.42 84.8684 210.753 86.4477 208.806 87.6145L220.09 141.611L193.437 131.059L186.808 81.4003C185.065 78.0005 184.63 74.0794 185.584 70.3799C186.539 66.6804 188.817 63.4595 191.988 61.3277C195.159 59.1959 199.001 58.3012 202.787 58.8131C206.573 59.325 210.04 61.2081 212.531 64.1053L212.531 64.1053Z" fill="#FFB6B6"/>
<path id="contmain" d="M279.081 29.1197C277.072 21.7745 272.943 15.184 267.211 10.171C261.479 5.1581 254.397 1.94493 246.85 0.93275C246.682 0.90793 246.524 0.940749 246.357 0.929409C246.142 0.860282 245.923 0.807058 245.7 0.770168C210.495 -4.01764 169.856 13.7002 155.184 48.8209C147.919 38.696 136.337 32.1546 123.95 32.805C108.146 33.6347 94.1997 45.7396 89.9274 61.6611C89.6917 62.6181 89.756 63.6245 90.1115 64.5438C90.467 65.4631 91.0966 66.2509 91.9149 66.8003C94.6755 68.8809 96.5613 70.3391 99.9579 71.0963C106.351 72.5216 112.768 73.8272 119.207 75.0133C131.771 77.327 144.401 79.1976 157.097 80.6251C182.858 83.5308 208.796 84.5624 234.706 83.7119C243.334 83.429 251.655 83.1277 259.56 79.1206C265.374 76.0746 270.289 71.5609 273.819 66.0278C280.721 55.4891 282.544 41.3255 279.081 29.1197Z" fill="#3F3D56"/>
<path id="cont" d="M275.2 30.98C273.296 24.4649 269.495 18.6649 264.28 14.32C258.859 9.89691 252.309 7.07747 245.37 6.17997H244.95L244.56 6.10997C244.436 6.07086 244.309 6.04079 244.18 6.01997C232.571 4.64043 220.805 5.48205 209.51 8.49996C187.8 14.21 167.24 27.73 157.64 49.54L156.27 52.67L154.22 49.94C147.47 41.01 137.35 35.8 126.9 35.8C126.38 35.8 125.86 35.81 125.33 35.84C110.81 36.56 97.87 47 93.85 61.23C93.7494 61.7337 93.8091 62.2564 94.0207 62.7245C94.2323 63.1926 94.5853 63.5827 95.03 63.84L95.19 63.96C97.76 65.79 99.31 66.9 102.16 67.51C108.37 68.8299 114.69 70.05 120.94 71.14C133.06 73.26 145.5 75.01 157.9 76.34C179.831 78.6944 201.885 79.7196 223.94 79.41C227.17 79.37 230.393 79.3 233.61 79.2C241.89 78.95 249.72 78.7 257.14 75.13C262.456 72.4956 266.998 68.5261 270.32 63.61C273.464 58.8562 275.53 53.4721 276.373 47.8353C277.216 42.1986 276.816 36.4456 275.2 30.98Z" fill="white"/>
<path id="blue" d="M223.94 79.41C201.885 79.7196 179.831 78.6944 157.9 76.34C145.5 75.01 133.06 73.26 120.94 71.14C114.69 70.05 108.37 68.8299 102.16 67.51C99.31 66.9 97.76 65.79 95.19 63.96L95.03 63.84C94.5853 63.5827 94.2324 63.1926 94.0207 62.7245C93.8091 62.2564 93.7494 61.7338 93.85 61.23C97.87 47 110.81 36.56 125.33 35.84C125.86 35.81 126.38 35.8 126.9 35.8C137.35 35.8 147.47 41.01 154.22 49.94L156.27 52.67L157.64 49.54C167.24 27.73 187.8 14.21 209.51 8.49997C213.89 12.46 216.71 18.53 215.11 24.16C213.18 30.99 205.54 35.25 204.26 42.23C203.09 48.6 207.65 54.52 212.34 58.98C217.03 63.43 222.46 67.9 223.82 74.22C224.184 75.9273 224.225 77.6877 223.94 79.41Z" fill="#6C63FF"/>
<path id="arrowcont" d="M242.79 60C252.731 60 260.79 51.9411 260.79 42C260.79 32.0589 252.731 24 242.79 24C232.849 24 224.79 32.0589 224.79 42C224.79 51.9411 232.849 60 242.79 60Z" fill="#6C63FF"/>
<path id="arrow" d="M250.335 40.0796L243.585 33.3296C243.481 33.2251 243.357 33.1422 243.22 33.0857C243.084 33.0291 242.938 33 242.79 33C242.642 33 242.496 33.0291 242.359 33.0857C242.223 33.1422 242.099 33.2251 241.995 33.3296L235.245 40.0796C235.034 40.2906 234.916 40.5766 234.916 40.8748C234.916 41.173 235.034 41.4589 235.245 41.6698C235.456 41.8806 235.742 41.9991 236.04 41.9992C236.338 41.9993 236.624 41.8811 236.835 41.6704L241.665 36.8408V49.875C241.665 50.1734 241.783 50.4595 241.994 50.6705C242.205 50.8815 242.492 51 242.79 51C243.088 51 243.375 50.8815 243.585 50.6705C243.796 50.4595 243.915 50.1734 243.915 49.875V36.8408L248.745 41.6704C248.849 41.775 248.973 41.858 249.11 41.9147C249.246 41.9713 249.392 42.0005 249.54 42.0005C249.688 42.0006 249.834 41.9715 249.971 41.915C250.107 41.8585 250.232 41.7756 250.336 41.6711C250.441 41.5666 250.523 41.4425 250.58 41.3059C250.637 41.1694 250.666 41.023 250.665 40.8752C250.665 40.7274 250.636 40.5811 250.58 40.4445C250.523 40.308 250.44 40.184 250.335 40.0796Z" fill="white"/>
</g>
<g id="right-leg">
<path id="Vector_3" d="M296.957 589.503L312.076 600.303L360.93 547.126L338.615 531.186L296.957 589.503Z" fill="#FFB6B6"/>
<path id="Vector_4" d="M296.627 581.811L300.883 584.851L322.324 589.964L326.402 603.081L326.403 603.082C331.435 606.677 334.833 612.124 335.85 618.225C336.866 624.325 335.417 630.579 331.823 635.612L331.382 636.228L282.632 601.403L296.627 581.811Z" fill="#2F2E41"/>
<path id="Vector_5" d="M382.79 432L368.303 410.698C366.528 387.582 384.321 367.222 407.5 366.767C420.409 366.514 433.027 372.705 439.757 393.643C457.061 447.484 341.129 572.065 341.129 572.065L316.921 559.73L314.619 544.779L326.863 535.764L325.816 522.938L337.635 516.089L382.79 432Z" fill="#2F2E41"/>
</g>
<path id="Vector_6" d="M344.944 174.476L362.851 188.111L384.446 194.748C384.446 194.748 393.374 320.329 401.419 328.373C409.463 336.418 402.208 336.634 403.824 347.084C405.441 357.534 409.369 378.956 409.369 378.956C355.07 407.699 308.258 408.47 270.656 374.835C270.175 372.755 270.419 370.572 271.349 368.65C272.278 366.727 273.836 365.18 275.766 364.264C282.764 360.551 269.314 343.219 275.034 340.321C280.753 337.423 272.709 312.284 272.709 312.284L277.986 259.835L273.817 251.45L283.991 200.149L301.645 193.701L308.697 176.71L344.944 174.476Z" fill="#6C63FF"/>
<path id="Vector_7" d="M187.072 100.189L197.85 199.444L198.231 199.631C198.546 199.786 212.201 206.483 228.962 214.46C231.79 215.805 231.385 221.634 234.34 223.027C236.375 223.987 241.751 220.505 243.808 221.467C262.129 230.034 280.654 238.365 288.037 240.623C298.005 243.781 308.752 243.435 318.496 239.642L318.731 239.534L318.854 239.306C321.343 234.643 322.169 229.27 321.195 224.074C320.222 218.878 317.506 214.17 313.497 210.724C294.052 194.191 271.031 182.405 246.25 176.294L232.15 172.834L214.091 102.129L187.072 100.189Z" fill="#6C63FF"/>
<g id="head">
<path id="face" d="M326.613 166.887C346.175 166.887 362.033 151.029 362.033 131.467C362.033 111.906 346.175 96.0476 326.613 96.0476C307.051 96.0476 291.193 111.906 291.193 131.467C291.193 151.029 307.051 166.887 326.613 166.887Z" fill="#FFB6B6"/>
<path id="hair" d="M297.763 101.039C300.676 92.5645 315.176 86.6868 338.684 85.8695C362.191 85.0521 368.153 112.754 368.153 112.754C383.846 125.484 351.396 159.566 349.826 158.339L350.532 151.935C351.701 141.329 356.667 133.054 350.351 122L344.286 122.07L332.782 124.282C332.065 124.42 331.322 124.318 330.669 123.992C330.015 123.666 329.487 123.135 329.166 122.479C328.844 121.823 328.747 121.08 328.89 120.364C329.032 119.648 329.406 118.999 329.954 118.516L330.06 118.423L329.798 118.019C325.746 119.878 321.57 121.602 317.139 121.862C312.155 122.155 306.706 120.172 304.318 115.786C303.681 114.581 303.291 113.26 303.173 111.902C296.451 114.587 293.378 122.873 293.378 122.873C293.378 122.873 294.85 109.513 297.763 101.039Z" fill="#2F2E41"/>
</g>
<g id="left-leg">
<path id="Vector_8" d="M393.424 574.435L379.244 586.442L326.184 537.462L347.112 519.741L393.424 574.435Z" fill="#FFB6B6"/>
<path id="Vector_9" d="M408.679 585.117L362.958 623.833L362.468 623.254C358.472 618.535 356.514 612.421 357.025 606.257C357.536 600.094 360.475 594.386 365.194 590.389L365.195 590.388L368.181 576.98L389.129 570.122L393.12 566.742L408.679 585.117Z" fill="#2F2E41"/>
<path id="Vector_10" d="M305.79 439L317.511 413.583C317.379 390.399 297.972 371.571 274.834 373.024C261.948 373.833 249.882 381.04 244.897 402.461C232.078 457.543 357.86 572.169 357.86 572.169L380.973 557.885L382.038 542.796L369.094 534.818L369.083 521.949L356.74 516.095L305.79 439Z" fill="#2F2E41"/>
</g>
<g id="paper">
<path id="Vector_11" d="M296.677 390.035V301.741C296.679 299.953 297.39 298.24 298.653 296.976C299.917 295.713 301.63 295.002 303.418 295H370.099C371.886 295.002 373.6 295.713 374.863 296.977C376.127 298.24 376.838 299.953 376.84 301.741V390.035C376.838 391.822 376.127 393.535 374.863 394.799C373.6 396.063 371.886 396.773 370.099 396.775H303.418C301.63 396.773 299.917 396.063 298.653 394.799C297.39 393.535 296.679 391.822 296.677 390.035Z" fill="#E6E6E6"/>
<path id="Vector_12" d="M301.792 363.366V306.603C301.794 304.929 302.459 303.324 303.643 302.141C304.826 300.958 306.431 300.292 308.105 300.29H365.412C367.086 300.292 368.69 300.957 369.874 302.141C371.057 303.324 371.723 304.929 371.725 306.603V385.173C371.723 386.846 371.057 388.451 369.874 389.634C368.69 390.818 367.086 391.483 365.412 391.485H329.911C322.456 391.477 315.309 388.512 310.037 383.24C304.766 377.969 301.8 370.821 301.792 363.366V363.366Z" fill="white"/>
<path id="Vector_13" d="M311.071 322.441C311.072 320.805 311.723 319.237 312.879 318.081C314.036 316.924 315.604 316.274 317.239 316.272H356.993C358.629 316.272 360.199 316.922 361.355 318.079C362.512 319.236 363.162 320.805 363.162 322.441C363.162 324.077 362.512 325.646 361.355 326.803C360.199 327.96 358.629 328.609 356.993 328.609H317.239C315.604 328.608 314.036 327.957 312.879 326.801C311.723 325.644 311.072 324.076 311.071 322.441V322.441Z" fill="#E6E6E6"/>
<path id="Vector_14" d="M311.071 341.632C311.072 339.997 311.723 338.429 312.879 337.272C314.036 336.116 315.604 335.465 317.239 335.464H356.993C358.629 335.464 360.199 336.114 361.355 337.27C362.512 338.427 363.162 339.996 363.162 341.632C363.162 343.268 362.512 344.837 361.355 345.994C360.199 347.151 358.629 347.801 356.993 347.801H317.239C315.604 347.799 314.036 347.149 312.879 345.992C311.723 344.836 311.072 343.268 311.071 341.632V341.632Z" fill="#E6E6E6"/>
<path id="Vector_15" d="M311.071 360.824C311.072 359.188 311.723 357.62 312.879 356.464C314.036 355.307 315.604 354.657 317.239 354.655H356.993C358.629 354.655 360.199 355.305 361.355 356.462C362.512 357.619 363.162 359.188 363.162 360.824C363.162 362.46 362.512 364.029 361.355 365.186C360.199 366.343 358.629 366.993 356.993 366.993H317.239C315.604 366.991 314.036 366.34 312.879 365.184C311.723 364.027 311.072 362.459 311.071 360.824V360.824Z" fill="#E6E6E6"/>
</g>
<path id="Vector_16" d="M356.162 397.676C356.082 395.408 356.5 393.15 357.387 391.061C358.273 388.973 359.607 387.103 361.295 385.586C362.982 384.068 364.981 382.939 367.152 382.278C369.323 381.617 371.613 381.44 373.859 381.759L399.096 332.707L413.155 357.688L387.035 400.438C386.249 404.177 384.118 407.498 381.047 409.77C377.976 412.043 374.177 413.11 370.372 412.77C366.566 412.429 363.018 410.705 360.399 407.923C357.78 405.141 356.273 401.495 356.162 397.676H356.162Z" fill="#FFB6B6"/>
<path id="Vector_17" d="M398.662 385.677L452.79 301.785L452.611 301.399C452.407 300.957 440.15 274.484 428.273 250.237C426.444 246.503 424.624 242.822 422.859 239.297C422.097 237.775 421.346 236.286 420.607 234.828C415.619 224.994 411.26 216.865 408.659 213.004C402.904 204.275 394.337 197.776 384.38 194.587L384.13 194.522L383.891 194.622C379.02 196.677 374.995 200.331 372.48 204.98C369.965 209.63 369.109 214.998 370.053 220.199C374.749 245.287 385.21 268.94 400.613 289.291L409.388 300.858L378.894 367.155L398.662 385.677Z" fill="#6C63FF"/>
</g>
<defs>
<clipPath id="clip0_1_2">
<rect width="637.79" height="636.228" fill="white"/>
</clipPath>
</defs>
</svg>


                        </figure>
                    </div>
            </header>
            
            <div className="waves"><svg id="visual" viewBox="0 0 1600 440" ><path d="M0 158L17.8 156.5C35.7 155 71.3 152 106.8 156C142.3 160 177.7 171 213.2 170.5C248.7 170 284.3 158 320 159.8C355.7 161.7 391.3 177.3 426.8 183.3C462.3 189.3 497.7 185.7 533.2 179.8C568.7 174 604.3 166 640 156C675.7 146 711.3 134 746.8 132.3C782.3 130.7 817.7 139.3 853.2 139C888.7 138.7 924.3 129.3 960 126C995.7 122.7 1031.3 125.3 1066.8 138.3C1102.3 151.3 1137.7 174.7 1173.2 174.5C1208.7 174.3 1244.3 150.7 1280 149.5C1315.7 148.3 1351.3 169.7 1386.8 178.2C1422.3 186.7 1457.7 182.3 1493.2 183C1528.7 183.7 1564.3 189.3 1582.2 192.2L1600 195L1600 0L1582.2 0C1564.3 0 1528.7 0 1493.2 0C1457.7 0 1422.3 0 1386.8 0C1351.3 0 1315.7 0 1280 0C1244.3 0 1208.7 0 1173.2 0C1137.7 0 1102.3 0 1066.8 0C1031.3 0 995.7 0 960 0C924.3 0 888.7 0 853.2 0C817.7 0 782.3 0 746.8 0C711.3 0 675.7 0 640 0C604.3 0 568.7 0 533.2 0C497.7 0 462.3 0 426.8 0C391.3 0 355.7 0 320 0C284.3 0 248.7 0 213.2 0C177.7 0 142.3 0 106.8 0C71.3 0 35.7 0 17.8 0L0 0Z" fill="#f1ecfb" stroke-linecap="round" stroke-linejoin="miter"></path></svg></div>
        </section>
     );
}
 
export default Landing;