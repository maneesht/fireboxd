import LoginButton from "../components/LoginButton";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 rounded-xl shadow-lg flex-col  space-y-4 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center text-gray-900 mx-auto">
        <img
          className="h-20 w-auto"
          src="https://developers.google.com/static/profile/badges/community/firebase/dataconnect/badge.svg"
          alt="Your Company" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight inline-block content-center">
          FireBoxd
        </h2>
      </div>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="sm:w-full sm:max-w-sm">
            <div>
              <LoginButton />
            </div>
        </div>
      </div>
    </div>
  );
}
