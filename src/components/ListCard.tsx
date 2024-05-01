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
      className="relative flex flex-col w-64 h-96 border border-gray-600 rounded-md m-4 overflow-hidden"
      key={item.id}
    >
      {item.hasImage && (
        <Image
          className="h-full"
          src={item.webImage.url}
          alt={item.title}
          width={item.webImage.width}
          height={item.webImage.height}
          placeholder="empty"
          style={{ objectFit: "cover" }}
        />
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
