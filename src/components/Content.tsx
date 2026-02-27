import Costs from "./Building Blocks/Costs";
import PrimaryButton from "./Building Blocks/PrimaryButton";
import Quote from "./Building Blocks/Quote";

function Content() {
    return (
        <>
            <div className="relative w-full h-screen">
                {/* Imagen */}
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1744&auto=format&fit=crop"
                    alt="Random Unsplash"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Towards New Horizons
                    </h1>

                    <p className="text-white max-w-2xl mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <PrimaryButton Title="Read More" textColor="white" bgColor="bg-blue-800" />
                </div>
            </div>

            <Quote />

            <div className="container mx-auto w-full py-16">
                <div className="relative w-full">
                    <img
                        src="https://images.unsplash.com/photo-1518781780548-4d410d94ec75?q=80&w=1740&auto=format&fit=crop"
                        alt="Random Unsplash"
                        className="w-full h-[auto] object-cover rounded-lg opacity-10"
                    />

                    <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
                        <Costs />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Content;