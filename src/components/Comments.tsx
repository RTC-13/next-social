import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/* Write comment */}
      <div className="flex items-center gap-4 mb-6">
        <Image
          src="https://images.pexels.com/photos/27856775/pexels-photo-27856775/free-photo-of-woman-sitting-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Avatar of user"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-1 items-center gap-4 justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Comment"
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt="Emoji"
            width={16}
            height={16}
            className="cursor-pointer self-end "
          />
        </div>
      </div>
      {/* See comments */}
      <div className="">
        {/* Comment */}
        <div className="flex gap-4 justify-between mt-6">
          {/* Avatar */}

          <Image
            src="https://images.pexels.com/photos/27856775/pexels-photo-27856775/free-photo-of-woman-sitting-on-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Avatar of user"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />

          {/* Desc */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Willie Bryant</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, voluptas rem eos voluptatem quibusdam sapiente alias.
              Velit hic recusandae facere?
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt="like icon"
                  width={16}
                  height={16}
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500"> 123 likes</span>
              </div>
              <div>Reply</div>
            </div>
          </div>
          {/* Icon */}
          <div className="">
            <Image
              src="/more.png"
              alt="More icon"
              width={16}
              height={16}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
