<script lang="ts">
  import type { IconName, IconColorName } from "$lib/data/IconName";

  export let icon: IconName;
  export let bg: IconColorName = "main-gray";
  export let size: 16 | 20 | 32 = 20;
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 {size} {size}"
  fill="transparent"
  xmlns="http://www.w3.org/2000/svg"
>
  {#if icon === "compass"}
    <g clip-path="url(#clip0_308_198)">
      <path
        d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z"
        class:stroke-main-gray={bg === "main-gray"}
        class:stroke-black={bg === "black"}
        class:stroke-white={bg === "white"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5337 6.46669L11.767 11.7667L6.46699 13.5334L8.23366 8.23335L13.5337 6.46669Z"
        class:stroke-main-gray={bg === "main-gray"}
        class:stroke-black={bg === "black"}
        class:stroke-white={bg === "white"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_308_198">
        <rect width={size} height={size} fill="white" />
      </clipPath>
    </defs>
  {:else if icon === "edit"}
    <path
      d="M10 16.6667H17.5M13.75 2.91669C14.0815 2.58517 14.5312 2.39893 15 2.39893C15.2321 2.39893 15.462 2.44465 15.6765 2.53349C15.891 2.62233 16.0858 2.75254 16.25 2.91669C16.4142 3.08084 16.5444 3.27572 16.6332 3.4902C16.722 3.70467 16.7678 3.93455 16.7678 4.16669C16.7678 4.39884 16.722 4.62871 16.6332 4.84319C16.5444 5.05766 16.4142 5.25254 16.25 5.41669L5.83333 15.8334L2.5 16.6667L3.33333 13.3334L13.75 2.91669Z"
      class:stroke-main-gray={bg === "main-gray"}
      class:stroke-black={bg === "black"}
      class:stroke-white={bg === "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if icon === "external_link"}
    <path
      d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667M12.5 2.5H17.5M17.5 2.5V7.5M17.5 2.5L8.33333 11.6667"
      class:stroke-main-gray={bg === "main-gray"}
      class:stroke-black={bg === "black"}
      class:stroke-white={bg === "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if icon === "link"}
    <g clip-path="url(#clip0_308_1791)">
      <path
        d="M8.3335 10.8335C8.69138 11.3119 9.14796 11.7078 9.67229 11.9943C10.1966 12.2807 10.7764 12.4511 11.3724 12.4937C11.9683 12.5364 12.5665 12.4504 13.1263 12.2416C13.6861 12.0328 14.1944 11.706 14.6168 11.2835L17.1168 8.78347C17.8758 7.99762 18.2958 6.94512 18.2863 5.85263C18.2768 4.76014 17.8386 3.71509 17.0661 2.94256C16.2935 2.17002 15.2485 1.73182 14.156 1.72233C13.0635 1.71283 12.011 2.13281 11.2252 2.8918L9.79183 4.3168M11.6668 9.1668C11.309 8.68836 10.8524 8.29248 10.328 8.00602C9.80371 7.71955 9.22391 7.5492 8.62796 7.50652C8.03201 7.46384 7.43384 7.54983 6.87405 7.75865C6.31425 7.96747 5.8059 8.29424 5.3835 8.7168L2.8835 11.2168C2.12451 12.0026 1.70453 13.0552 1.71402 14.1476C1.72352 15.2401 2.16172 16.2852 2.93426 17.0577C3.70679 17.8302 4.75184 18.2684 5.84433 18.2779C6.93682 18.2874 7.98932 17.8675 8.77517 17.1085L10.2002 15.6835"
        class:stroke-main-gray={bg === "main-gray"}
        class:stroke-black={bg === "black"}
        class:stroke-white={bg === "white"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_308_1791">
        <rect width={size} height={size} fill="white" />
      </clipPath>
    </defs>
  {:else if icon === "linkedin"}
    <path
      d="M13.3337 6.6665C14.6597 6.6665 15.9315 7.19329 16.8692 8.13097C17.8069 9.06865 18.3337 10.3404 18.3337 11.6665V17.4998H15.0003V11.6665C15.0003 11.2245 14.8247 10.8006 14.5122 10.488C14.1996 10.1754 13.7757 9.99984 13.3337 9.99984C12.8916 9.99984 12.4677 10.1754 12.1551 10.488C11.8426 10.8006 11.667 11.2245 11.667 11.6665V17.4998H8.33366V11.6665C8.33366 10.3404 8.86044 9.06865 9.79812 8.13097C10.7358 7.19329 12.0076 6.6665 13.3337 6.6665Z"
      class:stroke-main-gray={bg === "main-gray"}
      class:stroke-black={bg === "black"}
      class:stroke-white={bg === "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.00033 7.49984H1.66699V17.4998H5.00033V7.49984Z"
      class:stroke-main-gray={bg === "main-gray"}
      class:stroke-black={bg === "black"}
      class:stroke-white={bg === "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.33366 4.99984C4.25413 4.99984 5.00033 4.25365 5.00033 3.33317C5.00033 2.4127 4.25413 1.6665 3.33366 1.6665C2.41318 1.6665 1.66699 2.4127 1.66699 3.33317C1.66699 4.25365 2.41318 4.99984 3.33366 4.99984Z"
      class:stroke-main-gray={bg === "main-gray"}
      class:stroke-black={bg === "black"}
      class:stroke-white={bg === "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if icon === "mail"}
    <path
      d="M18.3337 5.00016C18.3337 4.0835 17.5837 3.3335 16.667 3.3335H3.33366C2.41699 3.3335 1.66699 4.0835 1.66699 5.00016M18.3337 5.00016V15.0002C18.3337 15.9168 17.5837 16.6668 16.667 16.6668H3.33366C2.41699 16.6668 1.66699 15.9168 1.66699 15.0002V5.00016M18.3337 5.00016L10.0003 10.8335L1.66699 5.00016"
      class:stroke-main-gray={bg === "main-gray"}
      class:stroke-black={bg === "black"}
      class:stroke-white={bg === "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if icon === "minus_circle"}
    <path
      d="M6.66699 10.5H13.3337M18.3337 10.5C18.3337 15.1023 14.6027 18.8333 10.0003 18.8333C5.39795 18.8333 1.66699 15.1023 1.66699 10.5C1.66699 5.89759 5.39795 2.16663 10.0003 2.16663C14.6027 2.16663 18.3337 5.89759 18.3337 10.5Z"
      class:stroke-main-gray={bg === "main-gray"}
      class:stroke-black={bg === "black"}
      class:stroke-white={bg === "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if icon === "phone"}
    <g clip-path="url(#clip0_308_202)">
      <path
        d="M12.5415 4.16665C13.3555 4.32545 14.1035 4.72353 14.6899 5.30993C15.2763 5.89632 15.6744 6.64437 15.8332 7.45831M12.5415 0.833313C14.2326 1.02118 15.8095 1.77846 17.0134 2.98082C18.2173 4.18318 18.9765 5.75915 19.1665 7.44998M18.3332 14.1V16.6C18.3341 16.8321 18.2866 17.0618 18.1936 17.2744C18.1006 17.4871 17.9643 17.678 17.7933 17.8349C17.6222 17.9918 17.4203 18.1112 17.2005 18.1856C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1118 9.32486 15.7083C7.31139 14.4289 5.60431 12.7218 4.32486 10.7083C2.91651 8.53432 2.04007 6.05914 1.76653 3.48331C1.7457 3.25287 1.77309 3.02061 1.84695 2.80133C1.9208 2.58205 2.03951 2.38055 2.1955 2.20966C2.3515 2.03877 2.54137 1.90224 2.75302 1.80875C2.96468 1.71526 3.19348 1.66686 3.42486 1.66665H5.92486C6.32928 1.66267 6.72136 1.80588 7.028 2.06959C7.33464 2.3333 7.53493 2.69952 7.59153 3.09998C7.69705 3.90003 7.89274 4.68559 8.17486 5.44165C8.28698 5.73992 8.31125 6.06408 8.24478 6.37571C8.17832 6.68735 8.02392 6.97341 7.79986 7.19998L6.74153 8.25831C7.92783 10.3446 9.65524 12.072 11.7415 13.2583L12.7999 12.2C13.0264 11.9759 13.3125 11.8215 13.6241 11.7551C13.9358 11.6886 14.2599 11.7129 14.5582 11.825C15.3143 12.1071 16.0998 12.3028 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6913 18.3332 14.1Z"
        class:stroke-main-gray={bg === "main-gray"}
        class:stroke-black={bg === "black"}
        class:stroke-white={bg === "white"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_308_202">
        <rect width={size} height={size} fill="white" />
      </clipPath>
    </defs>
  {:else if icon === "plus_circle"}
    <path
      d="M10.0003 7.16675V13.8334M6.66699 10.5001H13.3337M18.3337 10.5001C18.3337 15.1025 14.6027 18.8334 10.0003 18.8334C5.39795 18.8334 1.66699 15.1025 1.66699 10.5001C1.66699 5.89771 5.39795 2.16675 10.0003 2.16675C14.6027 2.16675 18.3337 5.89771 18.3337 10.5001Z"
      class:stroke-main-gray={bg === "main-gray"}
      class:stroke-black={bg === "black"}
      class:stroke-white={bg === "white"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if icon === "x_circle"}
    <g clip-path="url(#clip0_308_205)">
      <path
        d="M12.5003 7.50008L7.50033 12.5001M7.50033 7.50008L12.5003 12.5001M18.3337 10.0001C18.3337 14.6025 14.6027 18.3334 10.0003 18.3334C5.39795 18.3334 1.66699 14.6025 1.66699 10.0001C1.66699 5.39771 5.39795 1.66675 10.0003 1.66675C14.6027 1.66675 18.3337 5.39771 18.3337 10.0001Z"
        class:stroke-main-gray={bg === "main-gray"}
        class:stroke-black={bg === "black"}
        class:stroke-white={bg === "white"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_308_205">
        <rect width={size} height={size} fill="white" />
      </clipPath>
    </defs>
  {/if}
</svg>
