import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className=" bg-white items-center w-11/12 mt-4 shadow-current">
      <div className="px-3 py-3 w-full flex flex-row justify-between items-center">
        <div className="flex items-center flex-row gap-2">
          <div>
            <ul>
              <li>
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    height={100}
                    width={100}
                    priority
                    className="h-10 w-10"
                    alt="logo"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <label className="text-orange-400">VITRide</label>
        </div>

        <div className="flex flex-row gap-4 mr-4 items-center ">
          <div className="hover:underline">
            <ul>
              <li>
                <Link href="/">Book Now</Link>
              </li>
            </ul>
          </div>

          <div className="hover:underline">
            <ul>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="hover:underline">
            <ul>
              <li>
                <Link href="/">Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <Button
              buttonName="Sign In"
              bgColor="bg-gray-200"
              textColor="text-black"
            />
          </div>
          <div>
            <Button
              buttonName="Register"
              bgColor="bg-gray-200"
              textColor="text-black"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
