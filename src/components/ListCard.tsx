import Image from "next/image";
import Link from "next/link";
import React from "react";

type TListCardProps = {
  item: {
    hasImage: boolean;
    id: string;
    objectNumber: string;
    principalOrFirstMaker: string;
    title: string;
    webImage: {
      url: string;
      width: number;
      height: number;
    };
  };
};

const ListCard: React.FC<TListCardProps> = ({ item }) => {
  return (
    <Link
      href={`/details/${item.objectNumber}`}
      className="relative flex flex-col w-60 h-80 border border-gray-600 rounded-md m-4 overflow-hidden"
      key={item.id}
    >
      {item.hasImage ? (
        <Image
          className="h-full"
          src={item.webImage.url}
          alt={item.title}
          width={item.webImage.width}
          height={item.webImage.height}
          placeholder="blur"
          style={{ objectFit: "cover" }}
          blurDataURL="/placeholder.webp"
        />
      ) : (
        <div className="grid place-content-center h-full w-full">
          <div className="grid place-content-center h-32 w-32 rounded-full bg-orange-600 mb-8">
            <h2 className="saira-condensed-thin text-white text-lg ">NO IMG</h2>
          </div>
        </div>
      )}
      <div className="absolute bottom-0 left-0 bg-[rgba(255,255,255,0.7)] w-64 p-2">
        <p className="text-sm saira-condensed-thin text-nowrap overflow-ellipsis overflow-hidden">
          {item.title}
        </p>
        <p className="text-sm saira-condensed-semibold text-orange-700">
          {item.principalOrFirstMaker}
        </p>
      </div>
    </Link>
  );
};

export default ListCard;
