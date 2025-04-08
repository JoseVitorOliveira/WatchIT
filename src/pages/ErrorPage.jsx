export default function ErrorPage({ message }) {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg">
          {message || "An error occurred while fetching data."}
        </p>
      </div>
    </div>
  );
}
