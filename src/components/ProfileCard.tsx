import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://images.pexels.com/photos/27600951/pexels-photo-27600951/free-photo-of-japan-routine.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/9841335/pexels-photo-9841335.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width={48}
          height={48}
          className=" object-cover rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Susan May</span>
        <div className="flex gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/9841335/pexels-photo-9841335.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={12}
              height={12}
              className=" object-cover rounded-full w-3 h-3 "
            />
            <Image
              src="https://images.pexels.com/photos/9841335/pexels-photo-9841335.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={12}
              height={12}
              className=" object-cover rounded-full w-3 h-3 "
            />
            <Image
              src="https://images.pexels.com/photos/9841335/pexels-photo-9841335.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={12}
              height={12}
              className=" object-cover rounded-full w-3 h-3 "
            />
          </div>
          <span className="text-xs text-gray-500">500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
