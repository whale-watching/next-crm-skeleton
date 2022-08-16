import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Image from "next/dist/client/image";

export default function signIn({ providers }) {
  return (
    <>
      <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
          <div className=" flex flex-col items-center justify-center text-center">
            <Image
              src="https://cdn.sanity.io/images/ub6yj6nr/production/fe29675ae1708ab14ef4bdeb2925584b4ed24e09-2100x1500.png"
              width={175}
              height={100}
              objectFit="fill"
              alt="logo"
            />
            <p className="font-xs text-gray-500 italic p-5">
              This is not a REAL app, nor does it have any affiliation with
              Instagram or Meta (Facebook). This was created for educational
              purposes only. Enjoy!
            </p>
          </div>
          <form className="mt-8 w-64 flex flex-col">
            <input
              autoFocus
              className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="email"
              placeholder="Phone number, username, or email"
              type="text"
            />
            <input
              autoFocus
              className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="password"
              placeholder="Password"
              type="password"
            />
            <a className=" text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
              Log In
            </a>
          </form>
          <div className="flex justify-evenly space-x-2 w-64 mt-4">
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
            <span className="flex-none uppercase text-xs text-gray-400 font-semibold">
              or
            </span>
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
          </div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="mt-4 flex"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                <div className="bg-no-repeat facebook-logo mr-1"></div>
                <span className="text-xs text-blue-900 font-semibold">
                  Login in with {provider.name}
                </span>
              </button>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
