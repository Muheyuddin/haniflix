import type { SVGProps } from "react";

export function TrailerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
     width={24}
        height={24}
      viewBox="0 0 2048 2048"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1920 896v832q0 40-15 75t-41 61t-61 41t-75 15H320q-40 0-75-15t-61-41t-41-61t-15-75v-507q0-37 1-67t2-59t1-60t-4-67q-2-21-6-38t-8-34t-10-32t-11-38L22 541l1738-434l124 497L713 896zM681 508l-321 80l352 176l321-80zm543 129l322-81l-352-175l-322 80zm-1046 4l61 241l282-70zm1489-379l-282 71l342 171zm125 762H256v704q0 26 19 45t45 19h1408q26 0 45-19t19-45z"
      ></path>
    </svg>
  );
}
