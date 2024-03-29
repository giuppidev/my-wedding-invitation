import { Guest } from "@prisma/client";

export const DoveIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.50386 1.13176C7.79416 0.965872 8.14816 0.956046 8.44721 1.10557L15.9685 4.86623L22.5039 1.13176C22.8134 0.954898 23.1936 0.956168 23.5019 1.13509C23.8102 1.31401 24 1.64353 24 2V18C24 18.3589 23.8077 18.6902 23.4961 18.8682L16.4961 22.8682C16.2058 23.0341 15.8518 23.044 15.5528 22.8944L8.03147 19.1338L1.49614 22.8682C1.18664 23.0451 0.806388 23.0438 0.498073 22.8649C0.189758 22.686 0 22.3565 0 22V6C0 5.64114 0.192286 5.3098 0.503861 5.13176L7.50386 1.13176ZM8.03147 3.13377L2 6.58032V20.2768L7.50386 17.1318C7.79416 16.9659 8.14816 16.956 8.44721 17.1056L15.9685 20.8662L22 17.4197V3.72318L16.4961 6.86824C16.2058 7.03413 15.8518 7.04395 15.5528 6.89443L8.03147 3.13377Z"
      fill="green"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 5C16.5523 5 17 5.44772 17 6V22C17 22.5523 16.5523 23 16 23C15.4477 23 15 22.5523 15 22V6C15 5.44772 15.4477 5 16 5Z"
      fill="green"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1C8.55228 1 9 1.44772 9 2V18C9 18.5523 8.55228 19 8 19C7.44772 19 7 18.5523 7 18V2C7 1.44772 7.44772 1 8 1Z"
      fill="green"
    />
  </svg>
);

export const Dove = ({ guest }: { guest: Guest }) => {
  return (
    <div className="flex flex-col gap-8">
      <p>
        Nel mezzo delle ridenti colline torinesi, vicino a Superga per capirci.
      </p>
      <div className="text-base">
        <span className="font-bold">Cerimonia:</span> Chiesa San Martino,
        Castiglione T.se (TO){" - "}
        <a
          href="https://www.google.com/maps/place/Chiesa+di+San+Martino/@45.101002,7.7982593,15z/data=!4m2!3m1!1s0x0:0x789c21bf48865d73?sa=X&ved=2ahUKEwjIyrCg08P2AhUL_bsIHVkhBZoQ_BJ6BAg9EAU"
          target={"_blank"}
          rel="noreferrer"
          className="underline"
        >
          mappa
        </a>
        <p className="pt-4">
          Seguiranno indicazioni più precise su come arrivarci (è una chiesetta
          in mezzo ai colli).
        </p>
      </div>

      <p className="text-base">
        <span className="font-bold">Rinfresco:</span> Centro Paluc, Baldissero
        T.se (TO){" - "}
        <a
          href="https://www.google.com/maps/place/CENTRO+PALUC/@45.0722343,7.7929508,17z/data=!4m12!1m6!3m5!1s0x0:0x789c21bf48865d73!2sChiesa+di+San+Martino!8m2!3d45.1010005!4d7.7982459!3m4!1s0x4788747e54897fc5:0x7dd8b7d04ad1d83f!8m2!3d45.0733452!4d7.7916687"
          target={"_blank"}
          rel="noreferrer"
          className="underline"
        >
          mappa
        </a>
      </p>
    </div>
  );
};
