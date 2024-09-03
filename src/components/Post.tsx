import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* User */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/27425232/pexels-photo-27425232/free-photo-of-feeling-lost.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="User profile image"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium ">Katie Ryan</span>
        </div>
        <Image
          src="/more.png"
          alt="User profile image"
          width={16}
          height={16}
        />
      </div>
      {/* Desc */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/26664399/pexels-photo-26664399/free-photo-of-sea-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="User profile image"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem quibusdam beatae nulla nesciunt. Eligendi, ipsa!
          Voluptates obcaecati saepe incidunt animi.
        </p>
      </div>
      {/* Interation */}
      <div className="flex items-center justify-between text-sm my-4">
        {/* left */}
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl ">
            <Image
              src="/like.png"
              alt="User profile image"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300"> | </span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl ">
            <Image
              src="/comment.png"
              alt="User profile image"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300"> | </span>

            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>

        {/* right */}
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl ">
            <Image
              src="/share.png"
              alt="User profile image"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
