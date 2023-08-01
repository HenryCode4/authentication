export default function UserProfile({params}) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>PROFILE</h1>
        <hr />
        <p className="text-4xl">Profile page: <span className="bg-pink-500 p-2 rounded-md">{params.id}</span> </p>
      </div>
    );
  }
  