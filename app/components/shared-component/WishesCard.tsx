function WishesCard() {
  return (
    <div className="w-full p-2 flex flex-col gap-1 justify-start items-start rounded-lg bg-white border border-borderColor shadow-md">
      <span className="text-base font-medium text-blue-600 capitalize">
        Birthday Wishes
      </span>
      <span className="text-textLightColor text-xs">
        Ghanshyambhai Suhagiya's Birthday is on 27 November. Please wish Happy
        Birthday!
      </span>
    </div>
  );
}

export default WishesCard;
