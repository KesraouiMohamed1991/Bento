import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-screen bg-slate-200 flex-col sm:flex-row items-center justify-between p-4">
      <div className="flex w-1/3 h-full flex-col bg-slate-500  items-center justify-center">
        <div className=" h-full w-full flex flex-col gap-4 bg-red-200">
          <div
            style={{
              height: "200px",
              width: "200px",
              overflow: "hidden",
              borderRadius: "50%",
            }}
            className="bg-slate-200"
          >
            <Image
              src="https://images.unsplash.com/photo-1711419397450-476643e9020a?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile image"
              height={600}
              width={600}
              className="object-cover"
            />
          </div>
          <h1 className="text-black text-3xl">full name</h1>
          <p className="text-slate-700">Biography</p>
        </div>
      </div>

      <div className="flex w-2/3 h-full flex-col bg-slate-300  items-center justify-center overflow-y-scroll"></div>
    </main>
  );
}
