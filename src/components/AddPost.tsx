import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* Avatar */}
      <Image
        src="https://images.pexels.com/photos/27035025/pexels-photo-27035025/free-photo-of-herd-of-horses-on-a-pasture-with-view-of-distant-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Avatar of user"
        width={48}
        height={48}
        className="w-12 h-12 rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* Input */}
        <div className="flex gap-4 ">
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
            name=""
            id=""></textarea>
          <Image
            src="/emoji.png"
            alt="Avatar of user"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end "
          />
        </div>
        {/* Options */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addImage.png"
              alt="Image of a camera"
              width={20}
              height={20}
            />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addVideo.png"
              alt="Image of a video"
              width={20}
              height={20}
            />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="Image of poll" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/addEvent.png"
              alt="Image of an event"
              width={20}
              height={20}
            />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
