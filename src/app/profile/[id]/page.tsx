import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="test">
      <div className="flex gap-6 pt-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type="profile" />
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full h-64 relative">
                <Image
                  src="https://images.pexels.com/photos/2927512/pexels-photo-2927512.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="background image of user"
                  fill
                  className="object-cover rounded-md"
                />
                <Image
                  src="https://images.pexels.com/photos/4473312/pexels-photo-4473312.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="background image of user"
                  width={120}
                  height={120}
                  className=" w-32 h-32 object-cover rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-2 ring-white"
                />
              </div>
              <h1 className="m-20 mb-4 text-2xl font-medium">Hallie Haynes</h1>
              <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-medium">123</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">1.2K</span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">500</span>
                  <span className="text-sm">Following</span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%] ">
          <RightMenu userId="test" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
