import Card from "../components/dashboard/Card";


const adminLevels = [
    "ပြည်နယ်တိုင်းဒေသကြီးများ",
    "ခရိုင်များ",
    "မြို့နယ်များ",
    "ရုံးများ",
];

const proxyLetters = ["အထွေထွေ ကိုယ်စားလှယ်လွှဲစာ", "အထူး ကိုယ်စားလှယ်လွှဲစာ"];

const Dashboard = () => {
    return (
        <section className=" py-10 px-5 space-y-8">
            {/* Admin Levels Section */}
            <div className="border border-gray-300 relative rounded px-4 py-6">
                <h2 className="text-base absolute top-0 transform -translate-y-1/2 bg-gray-100 px-2 font-bold">
                    အုပ်ချုပ်ရေးအဆင့်အတန်း
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    {adminLevels.map((title, index) => (
                        <Card key={index} title={title} />
                    ))}
                </div>
            </div>

            {/* Proxy Letters Section */}


            <div className="border border-gray-300 relative rounded px-4 py-6">
                <h2 className="text-base absolute top-0 transform -translate-y-1/2 bg-gray-100 px-2 font-bold">
                    ကိုယ်စားလှယ်လွှဲစာ
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    {proxyLetters.map((title, index) => (
                        <Card key={index} title={title} />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Dashboard;
