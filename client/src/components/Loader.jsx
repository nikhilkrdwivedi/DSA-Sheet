import { AiOutlineCloseCircle } from "react-icons/ai";
import { RxColorWheel } from "react-icons/rx";
import { useLoader } from "../contexts/LoaderContext";

export default function Loader({ showCloseIcon = true }) {
  const { loader, setLoader } = useLoader();
  return (
    loader.isLoading &&
    <div
      onClick={() => { setLoader({ ...loader, isLoading: false }) }}
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
    >
      {showCloseIcon && (
        <div className="fixed right-0 top-0 p-10 cursor-pointer">
          <AiOutlineCloseCircle
            className="bg-gray-700 shadow-md shadow-gray-500 text-gray-200  rounded-full"
            size={24}
          />
        </div>
      )}
      <div className="animate-spin-slow loader rounded-full border-4 border-t-4 border-t-orange-300 border-b-green-300 border-gray-200 h-24 w-24 my-4 flex justify-center items-center">
        <RxColorWheel className="w-16 h-16 text-white" />
      </div>
      <h2 className="text-center text-white text-xl font-semibold mx-4">
        Loading...
      </h2>
      <p className="w-full text-center text-white">
        "Loading... Please hold while we search for the meaning of life."
      </p>
    </div>
  );
}

