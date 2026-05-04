export default function Client() {
  return (
    <section className="h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white w-96 rounded-4xl p-6 shadow-2xl flex flex-col gap-6">

        <div className="flex justify-between items-center border-b border-gray-200">
          <h1 className="text-xl font-semibold text-black">Client details</h1>

          <div>
            <img src="x.svg" alt="Close" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img src="/client.jpg" alt="client" className="w-14 h-14 rounded-full"/>

          <div>
            <h2 className="font-bold text-black">Cornelius Greenfelder</h2>
            <div className="inline-flex items-center gap-1 text-sm bg-green-100 text-black rounded-full">
              <img src="medal.svg" alt="Medal"/>
              Verified
            </div>
          </div>
        </div>


        <div className="bg-blue-50 rounded-2xl p-5 flex flex-col gap-3">

          <p className="font-semibold text-black">Projects</p>

          <div className="flex justify-between">

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <img src="/hourglass.svg" alt="Ongoing" />
                <div className="text-gray-400">Ongoing</div> 
              </div>

              <div className="flex gap-1 items-center">
                <div className="text-xl font-bold text-black">2</div>
                <div className="text-gray-500 ">($3.8k)</div>
              </div>

            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <img src="/centang.svg" alt="completed" />
                <div className="text-gray-400">Completed</div> 
              </div>

              <div className="flex gap-1  items-center">
                <div className="text-xl font-bold text-black"> 25</div>
                <div className="text-gray-500 ">($54k)</div>
              </div>

            </div>

          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between ">
            <div className="font-bold text-black">Location</div>
            <div className="text-gray-500 ">United States, New York</div>
          </div>

          <div className="flex justify-between">
            <div className="font-bold text-black">  With Us </div>
            <div className="text-gray-500">6 Jan 2024</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center text-black">
            <div className="font-bold text-2xl"> ⋮ </div>
          </div>

          <div
            className="inline-flex flex-1 h-12 rounded-4xl bg-violet-600 text-white font-semibold items-center justify-center gap-2">
            <img src="mail.svg" alt="mail"/>
            Message
          </div>

        </div>

      </div>
    </section>
  );
}