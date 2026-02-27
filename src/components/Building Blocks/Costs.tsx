import InfoCard from "InforCard";

function Costs() {
    const plans = [
        {
            title: "START",
            price: "Free",
            features: [
                "Vexillologist pitchfork",
                "Tumeric plaid portland",
                "Mixtape chillwave tumeric",
            ],
        },
        {
            title: "PRO",
            price: "$38",
            period: "/mo",
            isPopular: true,
            borderColor: "border-indigo-500",
            buttonColor: "bg-indigo-500 hover:bg-indigo-600",
            features: [
                "Vexillologist pitchfork",
                "Tumeric plaid portland",
                "Hexagon neutra unicorn",
                "Mixtape chillwave tumeric",
            ],
        },
        {
            title: "BUSINESS",
            price: "$56",
            period: "/mo",
            features: [
                "Vexillologist pitchfork",
                "Tumeric plaid portland",
                "Hexagon neutra unicorn",
                "Vexillologist pitchfork",
                "Mixtape chillwave tumeric",
            ],
        },
        {
            title: "SPECIAL",
            price: "$72",
            period: "/mo",
            features: [
                "Vexillologist pitchfork",
                "Tumeric plaid portland",
                "Hexagon neutra unicorn",
                "Vexillologist pitchfork",
                "Mixtape chillwave tumeric",
            ],
        },
    ];

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">

                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                        Pricing
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
                        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4">
                    {plans.map((plan, index) => (
                        <InfoCard key={index} {...plan} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Costs;