export default function learnPage() {
    return (
    <section className="h-screen bg-gray-100 flex gap-4">
        <div className="bg-purple-300 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className=" flex gap-4">
                <img src="/palette.svg" alt="Design"/>
                <p className="font-bold"> Design </p>
            </div>
        
            <div>
                <h2 className="text-4xl font-bold"> Figma </h2>
             
             <p className="font-bold"> 8 Hours ago</p>
            </div>
        </div>


        <div className="bg-orange-300 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className=" flex gap-4">
                <img src="/code.svg" alt="Design"/>
                <p className="font-bold"> Codding </p>
            </div>
        
            <div>
             <h2 className="text-4xl font-bold"> Phyton </h2>
             
             <p className="font-bold"> 2 days ago</p>
            </div>
         </div>

         
         <div className="bg-red-300 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
            <div className=" flex gap-4">
                <img src="/palette.svg" alt="Design"/>
                <p className="font-bold"> Design </p>
            </div>
        
            <div>
                <h2 className="text-4xl font-bold"> Sketch </h2>
             
             <p className="font-bold"> 4 days ago</p>
            </div>
         </div>
    </section>
    );
}