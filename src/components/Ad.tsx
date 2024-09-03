import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="More Icon" width={16} height={16} />
      </div>
      {/* BOTTOM */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}>
          <Image
            src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Adverticement image"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Adverticement image"
            width={24}
            height={24}
            className="w-6 h-6 rounded-lg object-cover"
          />
          <span className="text-blue-500 font-medium">Home Hotel</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex libero similique suscipit. changes?"
            : size === "md"
            ? "Saepe repudiandae, accusamus tempora nostrum consectetur, tempore, exercitationem obcaecati dicta. changesx"
            : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex libero similique suscipit. Saepe repudiandae, accusamus tempora nostrum consectetur, tempore, exercitationem obcaecati dicta quidem facere eos quo magnam impedit commodi est. "}
        </p>
        <button className="bg-gray-200 text-gray-500 text-xs rounded-lg p-1">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
