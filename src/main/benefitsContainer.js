import { fireIcon, lightningIcon, personIcon, shieldIcon, checkIcon, thumbsUpIcon  } from "../svgIcons";

const benefitsData = [

  {
   svg: fireIcon(),
    text: `Recharged <span class="benefitsContainer__bold">metabolism</span> to stay in peak shape`,
  },
  {
    // svg: `<svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_409)"><path d="M15.5982 2.42272C15.8616 1.80205 15.6652 1.07718 15.125 0.6785C14.5848 0.279821 13.8482 0.316065 13.3437 0.760048L1.91515 10.9082C1.46873 11.3069 1.30801 11.9457 1.51783 12.5075C1.72765 13.0693 2.26337 13.4498 2.85712 13.4498H7.8348L4.40176 21.5774C4.13837 22.1981 4.3348 22.923 4.87498 23.3217C5.41515 23.7203 6.15176 23.6841 6.65623 23.2401L18.0848 13.0919C18.5312 12.6932 18.6919 12.0544 18.4821 11.4927C18.2723 10.9309 17.741 10.5549 17.1428 10.5549H12.1652L15.5982 2.42272Z" fill="#0B0A0C"/></g><defs><clipPath id="clip0_1_409"><rect width="20" height="23.1959" fill="white" transform="translate(0 0.4021)"/></clipPath></defs></svg>`,
    svg: lightningIcon(),
    text: `Enjoy jitter-free <span class="benefitsContainer__bold">energy</span> to tackle your busy schedule`,
  },
  {
   svg: personIcon(),
    text: `Achieve restful <span class="benefitsContainer__bold">sleep</span> and wake up recharged`,
  },
  {
    // svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <g clip-path="url(#clip0_1_420)">
    //           <path d="M10.5235 0.113281C10.3594 0.0390625 10.1836 0 10 0C9.81642 0 9.64064 0.0390625 9.47658 0.113281L2.12111 3.23438C1.26174 3.59766 0.621112 4.44531 0.625018 5.46875C0.644549 9.34375 2.2383 16.4336 8.96877 19.6562C9.62111 19.9688 10.3789 19.9688 11.0313 19.6562C17.7617 16.4336 19.3555 9.34375 19.375 5.46875C19.3789 4.44531 18.7383 3.59766 17.8789 3.23438L10.5235 0.113281ZM10 4.375C10.3438 4.375 10.625 4.65625 10.625 5C10.625 6.28906 12.1836 6.93359 13.0938 6.02344C13.336 5.78125 13.7344 5.78125 13.9766 6.02344C14.2188 6.26562 14.2188 6.66406 13.9766 6.90625C13.0664 7.81641 13.711 9.375 15 9.375C15.3438 9.375 15.625 9.65625 15.625 10C15.625 10.3438 15.3438 10.625 15 10.625C13.711 10.625 13.0664 12.1836 13.9766 13.0938C14.2188 13.3359 14.2188 13.7344 13.9766 13.9766C13.7344 14.2187 13.336 14.2187 13.0938 13.9766C12.1836 13.0664 10.625 13.7109 10.625 15C10.625 15.3438 10.3438 15.625 10 15.625C9.65627 15.625 9.37502 15.3438 9.37502 15C9.37502 13.7109 7.81642 13.0664 6.90627 13.9766C6.66408 14.2187 6.26564 14.2187 6.02346 13.9766C5.78127 13.7344 5.78127 13.3359 6.02346 13.0938C6.93361 12.1836 6.28908 10.625 5.00002 10.625C4.65627 10.625 4.37502 10.3438 4.37502 10C4.37502 9.65625 4.65627 9.375 5.00002 9.375C6.28908 9.375 6.93361 7.81641 6.02346 6.90625C5.78127 6.66406 5.78127 6.26562 6.02346 6.02344C6.26564 5.78125 6.66408 5.78125 6.90627 6.02344C7.81642 6.93359 9.37502 6.28906 9.37502 5C9.37502 4.65625 9.65627 4.375 10 4.375ZM9.06252 10C9.58205 10 10 9.58203 10 9.0625C10 8.54297 9.58205 8.125 9.06252 8.125C8.54299 8.125 8.12502 8.54297 8.12502 9.0625C8.12502 9.58203 8.54299 10 9.06252 10ZM11.875 11.25C11.875 10.9062 11.5938 10.625 11.25 10.625C10.9063 10.625 10.625 10.9062 10.625 11.25C10.625 11.5938 10.9063 11.875 11.25 11.875C11.5938 11.875 11.875 11.5938 11.875 11.25Z" fill="black"/>
    //         </g>
    //         <defs><clipPath id="clip0_1_420"><rect width="20" height="20" fill="white"/></clipPath></defs>
    //       </svg>`,
    svg: shieldIcon(),
    text: `Strengthen your <span class="benefitsContainer__bold">immune health</span> to stay on your game`,
  },
  {
    // svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M14.6328 3.38281C15.1211 2.89453 15.1211 2.10156 14.6328 1.61328C14.1445 1.125 13.3516 1.125 12.8633 1.61328L7.5 6.98047L5.25781 4.73828C4.76953 4.25 3.97656 4.25 3.48828 4.73828C3 5.22656 3 6.01953 3.48828 6.50781L6.61328 9.63281C7.10156 10.1211 7.89453 10.1211 8.38281 9.63281L14.6328 3.38281ZM18.3828 8.38281C18.8711 7.89453 18.8711 7.10156 18.3828 6.61328C17.8945 6.125 17.1016 6.125 16.6133 6.61328L7.5 15.7305L3.38281 11.6172C2.89453 11.1289 2.10156 11.1289 1.61328 11.6172C1.125 12.1055 1.125 12.8984 1.61328 13.3867L6.61328 18.3867C7.10156 18.875 7.89453 18.875 8.38281 18.3867L18.3828 8.38672V8.38281Z" fill="#0B0A0C"/>
    //       </svg>`,
    svg: checkIcon(),
    text: `<span class="benefitsContainer__bold">30 sec habit</span>. Mixes in any beverage fast and easy`,
  },
  {
    // svg: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M12.2422 1.28513C13.2578 1.48826 13.918 2.47654 13.7148 3.49216L13.625 3.93748C13.418 4.98044 13.0352 5.97263 12.5 6.87498H18.125C19.1602 6.87498 20 7.71482 20 8.74998C20 9.73826 19.2383 10.5469 18.2695 10.6211C18.5703 10.9531 18.75 11.3945 18.75 11.875C18.75 12.789 18.0938 13.5508 17.2305 13.7148C17.4023 13.9961 17.5 14.332 17.5 14.6875C17.5 15.5195 16.957 16.2265 16.207 16.4687C16.2344 16.5976 16.25 16.7382 16.25 16.875C16.25 17.8984 15.457 18.7461 14.4453 18.8476L3.0859 19.9375C2.03907 20.0469 1.14454 19.4219 1.03517 18.3751C0.925806 17.3283 1.55079 16.4337 2.59765 16.3243L5 16.0625V15.9375C5 14.539 6.10156 13.4375 7.5 13.4375H9.0625C8.2383 12.6914 7.58203 11.7422 7.16407 10.664C5.20311 11.2265 2.66603 10.7031 1.49216 8.97657C0.355477 7.30469 0.722656 5.15235 2.35939 4.08988C3.4375 3.37501 4.75 3.12501 6.01563 3.21876C7.0039 0.949245 9.51953 -0.390616 11.7891 0.597654L12.2422 1.28513Z" fill="#0B0A0C"/>
    //       </svg>`,
    svg: thumbsUpIcon(),
    text: `<span class="benefitsContainer__bold">Easy, daily habit</span>. One scoop, so many benefits`,
  },
];

export default function createBenefitsContainer() {
  const container = document.getElementById('benefitsContainer');
  container.classList = 'benefitsContainer';

  const h2 = document.createElement('h2');
  h2.classList = 'benefitsContainer__header';
  h2.innerText =
    'Performance nutrition and healthy transformation made simple:';
  const ul = document.createElement('ul');
  ul.classList = 'benefitsContainer__list';

  benefitsData.forEach((item, index) => {
    const li = document.createElement('li');
    (li.classList = 'benefitsContainer__item'), `item${index + 1}`;

    const iconWrapper = document.createElement('div');
    iconWrapper.classList = 'benefitsContainer__iconWrapper';
    const svgIcon = document.createElement('svg');
    svgIcon.innerHTML = item.svg;
    iconWrapper.appendChild(svgIcon);

    const h4 = document.createElement('h4');
    // h4.classList = 'benefitsContainer__text';
    h4.innerHTML = item.text;
    li.appendChild(iconWrapper);
    li.appendChild(h4);
    ul.appendChild(li);
  });

  container.appendChild(h2);
  container.appendChild(ul);
}

{
//    <div class="benefitsContainer">
//         <h2 class="benefitsContainer__header">
//           Performance nutrition and healthy transformation made simple:
//         </h2>
//         <ul class="benefitsContainer__list">
//           <li class="benefitsContainer__item item1">
//             <div class="benefitsContainer__iconWrapper">
//               <svg
//                 width="37.94"
//                 height="44"
//                 viewBox="0 0 19 22"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g clip-path="url(#clip0_1_402)">
//                   <path
//                     d="M6.74496 0.231896C7.07523 -0.0817761 7.58755 -0.0774792 7.91782 0.236193C9.08644 1.34908 10.1831 2.54791 11.2077 3.84557C11.6735 3.22682 12.2028 2.55221 12.7744 2.00221C13.1089 1.68424 13.6254 1.68424 13.9599 2.00651C15.4249 3.42447 16.6655 5.29791 17.5378 7.07682C18.3973 8.82994 18.9689 10.6217 18.9689 11.885C18.9689 17.3678 14.7432 21.9999 9.48444 21.9999C4.16638 21.9999 0 17.3635 0 11.8807C0 10.2307 0.753675 8.21549 1.92229 6.22174C3.10361 4.19791 4.77186 2.08815 6.74496 0.231896ZM9.55642 17.8749C10.6277 17.8749 11.5761 17.5741 12.4695 16.9725C14.2521 15.7092 14.7305 13.1827 13.6593 11.1975C13.5407 10.9569 13.4222 10.7163 13.2443 10.4756L11.1019 13.0022C11.1019 13.0022 7.6553 8.55065 7.41396 8.24986C5.63562 10.4756 4.74222 11.7389 4.74222 13.1827C4.74222 16.1303 6.88469 17.8749 9.55642 17.8749Z"
//                     fill="#0B0A0C"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_1_402">
//                     <rect width="18.9689" height="22" fill="white" />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </div>

//             <h4>
//               Recharged
//               <span class="benefitsContainer__bold">metabolism</span> to stay in
//               peak shape
//             </h4>
//           </li>
//           <li class="benefitsContainer__item item2">
//              <img src="./assets/bolt-solid 1.svg" alt="thunder logo" />
//             <div class="benefitsContainer__iconWrapper">
//               <svg
//                 width="20"
//                 height="24"
//                 viewBox="0 0 20 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g clip-path="url(#clip0_1_409)">
//                   <path
//                     d="M15.5982 2.42272C15.8616 1.80205 15.6652 1.07718 15.125 0.6785C14.5848 0.279821 13.8482 0.316065 13.3437 0.760048L1.91515 10.9082C1.46873 11.3069 1.30801 11.9457 1.51783 12.5075C1.72765 13.0693 2.26337 13.4498 2.85712 13.4498H7.8348L4.40176 21.5774C4.13837 22.1981 4.3348 22.923 4.87498 23.3217C5.41515 23.7203 6.15176 23.6841 6.65623 23.2401L18.0848 13.0919C18.5312 12.6932 18.6919 12.0544 18.4821 11.4927C18.2723 10.9309 17.741 10.5549 17.1428 10.5549H12.1652L15.5982 2.42272Z"
//                     fill="#0B0A0C"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_1_409">
//                     <rect
//                       width="20"
//                       height="23.1959"
//                       fill="white"
//                       transform="translate(0 0.4021)"
//                     />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </div>

//             <h4>
//               Enjoy jitter-free
//               <span class="benefitsContainer__bold">energy</span> to tackle your
//               busy schedule
//             </h4>
//           </li>
//           <li class="benefitsContainer__item item3">
//              <img src="./assets/Group 143-2.svg" alt="running logo" /> 
//             <div class="benefitsContainer__iconWrapper">
//               <svg
//                 width="20"
//                 height="24"
//                 viewBox="0 0 20 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g clip-path="url(#clip0_1_414)">
//                   <path
//                     d="M15 2.71427C15 1.53123 14.0402 0.571411 12.8572 0.571411C11.6741 0.571411 10.7143 1.53123 10.7143 2.71427C10.7143 3.8973 11.6741 4.85713 12.8572 4.85713C14.0402 4.85713 15 3.8973 15 2.71427ZM6.3259 8.40623C6.76786 7.96427 7.37054 7.71427 8.00001 7.71427C8.08483 7.71427 8.16965 7.71873 8.25001 7.72766L6.85715 11.9107C6.44197 13.1607 6.93304 14.5357 8.05358 15.2366L11.9018 17.6428L10.7679 21.6071C10.5491 22.3661 10.9911 23.1562 11.75 23.375C12.5089 23.5937 13.2991 23.1518 13.5179 22.3928L14.7991 17.9107C15.0625 16.9911 14.683 16.0089 13.875 15.5044L11.3393 13.9196L12.7188 10.2411L12.9464 10.7902C13.6161 12.3884 15.1741 13.4286 16.9063 13.4286H17.8571C18.6473 13.4286 19.2857 12.7902 19.2857 12C19.2857 11.2098 18.6473 10.5714 17.8571 10.5714H16.9063C16.3304 10.5714 15.808 10.2232 15.5893 9.69195L15.308 9.0223C14.6563 7.45534 13.3393 6.25891 11.7143 5.75891L9.54019 5.08927C9.04465 4.93748 8.52679 4.85713 8.00447 4.85713C6.62054 4.85713 5.29019 5.40623 4.31251 6.38838L3.27679 7.41963C2.71876 7.97766 2.71876 8.88391 3.27679 9.44195C3.83483 9.99998 4.74108 9.99998 5.29912 9.44195L6.33037 8.4107L6.3259 8.40623ZM4.78572 16.2857H2.14287C1.35269 16.2857 0.714294 16.9241 0.714294 17.7143C0.714294 18.5044 1.35269 19.1428 2.14287 19.1428H5.25001C6.09822 19.1428 6.86608 18.6428 7.20983 17.8705L7.72322 16.7143L7.29911 16.4464C6.51787 15.9598 5.93751 15.25 5.60715 14.4419L4.78572 16.2857Z"
//                     fill="#0B0A0C"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_1_414">
//                     <rect
//                       width="20"
//                       height="22.8571"
//                       fill="white"
//                       transform="translate(0 0.571411)"
//                     />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </div>

//             <h4>
//               Enhance <span class="benefitsContainer__bold">endurance</span>,
//               <span class="benefitsContainer__bold">performance</span>, and
//               performance
//               <span class="benefitsContainer__bold">recovery</span>
//             </h4>
//           </li>
//           <li class="benefitsContainer__item item4">
//              <img src="./assets/shield-virus-solid 1-1.svg" alt="shield logo" /> 
//             <div class="benefitsContainer__iconWrapper">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g clip-path="url(#clip0_1_420)">
//                   <path
//                     d="M10.5235 0.113281C10.3594 0.0390625 10.1836 0 10 0C9.81642 0 9.64064 0.0390625 9.47658 0.113281L2.12111 3.23438C1.26174 3.59766 0.621112 4.44531 0.625018 5.46875C0.644549 9.34375 2.2383 16.4336 8.96877 19.6562C9.62111 19.9688 10.3789 19.9688 11.0313 19.6562C17.7617 16.4336 19.3555 9.34375 19.375 5.46875C19.3789 4.44531 18.7383 3.59766 17.8789 3.23438L10.5235 0.113281ZM10 4.375C10.3438 4.375 10.625 4.65625 10.625 5C10.625 6.28906 12.1836 6.93359 13.0938 6.02344C13.336 5.78125 13.7344 5.78125 13.9766 6.02344C14.2188 6.26562 14.2188 6.66406 13.9766 6.90625C13.0664 7.81641 13.711 9.375 15 9.375C15.3438 9.375 15.625 9.65625 15.625 10C15.625 10.3438 15.3438 10.625 15 10.625C13.711 10.625 13.0664 12.1836 13.9766 13.0938C14.2188 13.3359 14.2188 13.7344 13.9766 13.9766C13.7344 14.2187 13.336 14.2187 13.0938 13.9766C12.1836 13.0664 10.625 13.7109 10.625 15C10.625 15.3438 10.3438 15.625 10 15.625C9.65627 15.625 9.37502 15.3438 9.37502 15C9.37502 13.7109 7.81642 13.0664 6.90627 13.9766C6.66408 14.2187 6.26564 14.2187 6.02346 13.9766C5.78127 13.7344 5.78127 13.3359 6.02346 13.0938C6.93361 12.1836 6.28908 10.625 5.00002 10.625C4.65627 10.625 4.37502 10.3438 4.37502 10C4.37502 9.65625 4.65627 9.375 5.00002 9.375C6.28908 9.375 6.93361 7.81641 6.02346 6.90625C5.78127 6.66406 5.78127 6.26562 6.02346 6.02344C6.26564 5.78125 6.66408 5.78125 6.90627 6.02344C7.81642 6.93359 9.37502 6.28906 9.37502 5C9.37502 4.65625 9.65627 4.375 10 4.375ZM9.06252 10C9.58205 10 10 9.58203 10 9.0625C10 8.54297 9.58205 8.125 9.06252 8.125C8.54299 8.125 8.12502 8.54297 8.12502 9.0625C8.12502 9.58203 8.54299 10 9.06252 10ZM11.875 11.25C11.875 10.9062 11.5938 10.625 11.25 10.625C10.9063 10.625 10.625 10.9062 10.625 11.25C10.625 11.5938 10.9063 11.875 11.25 11.875C11.5938 11.875 11.875 11.5938 11.875 11.25Z"
//                     fill="black"
//                   />
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_1_420">
//                     <rect width="20" height="20" fill="white" />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </div>

//             <h4>
//               Strengthen your
//               <span class="benefitsContainer__bold">immune health</span> to stay
//               on your game
//             </h4>
//           </li>
//           <li class="benefitsContainer__item item5">
//              <img src="./assets/Group 142-1.svg" alt="check logo" /> 
//             <div class="benefitsContainer__iconWrapper">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M14.6328 3.38281C15.1211 2.89453 15.1211 2.10156 14.6328 1.61328C14.1445 1.125 13.3516 1.125 12.8633 1.61328L7.5 6.98047L5.25781 4.73828C4.76953 4.25 3.97656 4.25 3.48828 4.73828C3 5.22656 3 6.01953 3.48828 6.50781L6.61328 9.63281C7.10156 10.1211 7.89453 10.1211 8.38281 9.63281L14.6328 3.38281ZM18.3828 8.38281C18.8711 7.89453 18.8711 7.10156 18.3828 6.61328C17.8945 6.125 17.1016 6.125 16.6133 6.61328L7.5 15.7305L3.38281 11.6172C2.89453 11.1289 2.10156 11.1289 1.61328 11.6172C1.125 12.1055 1.125 12.8984 1.61328 13.3867L6.61328 18.3867C7.10156 18.875 7.89453 18.875 8.38281 18.3867L18.3828 8.38672V8.38281Z"
//                   fill="#0B0A0C"
//                 />
//               </svg>
//             </div>

//             <h4>
//               <span class="benefitsContainer__bold">30 sec habit</span>. Mixes
//               in any beverage fast and easy
//             </h4>
//           </li>
//           <li class="benefitsContainer__item item6">
//              <img src="./assets/Group 147.svg" alt="thumbs up logo" /> 
//             <div class="benefitsContainer__iconWrapper">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M12.2422 1.28513C13.2578 1.48826 13.918 2.47654 13.7148 3.49216L13.625 3.93748C13.418 4.98044 13.0352 5.97263 12.5 6.87498H18.125C19.1602 6.87498 20 7.71482 20 8.74998C20 9.73826 19.2383 10.5469 18.2695 10.6211C18.5703 10.9531 18.75 11.3945 18.75 11.875C18.75 12.789 18.0938 13.5508 17.2305 13.7148C17.4023 13.9961 17.5 14.332 17.5 14.6875C17.5 15.5195 16.957 16.2265 16.207 16.4687C16.2344 16.5976 16.25 16.7344 16.25 16.875C16.25 17.9101 15.4102 18.75 14.375 18.75H11.5039C10.7617 18.75 10.0391 18.5312 9.42188 18.1211L7.91797 17.1172C6.875 16.4219 6.25 15.25 6.25 13.9961V12.5V10.625V9.65232C6.25 8.51169 6.76953 7.43748 7.65625 6.72263L7.94531 6.49216C8.98047 5.66404 9.6875 4.49998 9.94531 3.2031L10.0352 2.75779C10.2383 1.74216 11.2266 1.08201 12.2422 1.28513ZM1.25 7.49998H3.75C4.44141 7.49998 5 8.05857 5 8.74998V17.5C5 18.1914 4.44141 18.75 3.75 18.75H1.25C0.558594 18.75 0 18.1914 0 17.5V8.74998C0 8.05857 0.558594 7.49998 1.25 7.49998Z"
//                   fill="#0B0A0C"
//                 />
//               </svg>
//             </div>

//             <h4>
//               <span class="benefitsContainer__bold">Taste amazing!</span> No
//               bitterness, gritty, or clumpy texture
//             </h4>
//           </li>
//         </ul>
//       </div>
}
