export default function LearnPage() {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col  justify-between gap-6 p-10">

      <div>
        <img src="/logo.jpg" alt="Logo" className="w-11 h-20 grayscale opacity-30" />
      </div>

      <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">

        <div className="flex gap-6">

          <div className="bg-cyan-100 p-8 h-72 rounded-3xl flex flex-col justify-between text-cyan-950 flex-1">
            <div className=" flex gap-4 items-center">
              <img src="/palette.svg" alt="Design" className= "w-5 h-5" />
              <p className="font-bold"> Design </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold"> Adobe Photoshop </h2>

              <div className="flex justify-between items-center mt-4">
                <p className="font-bold"> in 3 days </p>

                <div className="flex">
                  <img src="/avatar1.jpg" className="w-8 h-8 rounded-full border-2 border-cyan-100" />
                  <img src="/avatar2.jpg" className="w-8 h-8 rounded-full border-2 border-cyan-100 -ml-3" />
                  <img src="/avatar3.jpg" className="w-8 h-8 rounded-full border-2 border-cyan-100 -ml-3" />

                  <div className="w-8 h-8 rounded-full border-2 border-cyan-100 -ml-3  bg-cyan-200 flex items-center justify-center text-xs text-gray-600 font-semibold"> 9+ </div>
                </div>
              </div>
            </div>
          </div>



          <div className="bg-green-100 p-8 h-72 rounded-3xl flex flex-col justify-between text-green-950 flex-1">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-4 items-center">
                <img src="/prompt.svg" alt="AI" className="border-2 w-4 h-4" />
                <p className="font-bold"> AI </p>
              </div>
              <img src="/star.svg" alt="Favorite" className="w-5 h-5" />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 leading-snug"> DALL‧E 2, Midjourney, Stable Diffusion </h2>

              <div className="flex justify-between items-center">
                <p className="font-bold"> in 5 days </p>

                <div className="flex">
                  <img src="/avatar4.jpg" className="w-8 h-8 rounded-full border-2 border-green-100" />
                  <img src="/avatar5.jpg" className="w-8 h-8 rounded-full border-2 border-green-100 -ml-3" />
                  <img src="/avatar6.jpg" className="w-8 h-8 rounded-full border-2 border-green-100 -ml-3" />

                  <div className="w-8 h-8 rounded-full border-2 border-green-100 -ml-3  bg-green-200 flex items-center justify-center text-xs text-gray-600 font-semibold"> 3+ </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="flex gap-6">
          <div className="bg-purple-200 p-8 h-72 w-96 rounded-3xl flex flex-col justify-between text-purple-950">
            <div className=" flex gap-4 items-center">
              <img src="/palette.svg" alt="Design" className="w-5 h-5"/>
              <p className="font-bold"> Design </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold"> Figma </h2>
              <p className="font-semibold mt-2"> 8 Hours ago</p>
            </div>
          </div>


          <div className="bg-orange-200 p-8 h-72 w-96 rounded-3xl flex flex-col justify-between text-orange-950" >
            <div className=" flex gap-4 items-center">
              <img src="/code.svg" alt="Design" className="w-5 h-5" />
              <p className="font-bold"> Coding </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold"> Python </h2>
              <p className="font-semibold mt-2"> 2 days ago</p>
            </div>
          </div>


          <div className="bg-red-200 p-8 h-72 w-96 rounded-3xl flex flex-col justify-between text-red-950">
            <div className=" flex gap-4 items-center">
              <img src="/palette.svg" alt="Design" className="w-5 h-5"/>
              <p className="font-bold"> Design </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold"> Sketch </h2>
              <p className="font-semibold mt-2"> 4 days ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <p className="text-gray-400 font-bold text-xl">
          Day 020 / 365
        </p>
      </div>
    </section>
  );
}