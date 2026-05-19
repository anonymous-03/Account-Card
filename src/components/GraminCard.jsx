export default function GraminCard({ printUser }) {
    const handlePrint = () => window.print();
    return (
         <div className="flex flex-col items-center bg-gray-100 min-h-screen py-10 print:w-full print:h-full print:m-0 print:p-0 card card-gold">
                <h2 className="text-2xl font-bold mb-6">Generated User Card</h2>

                <div className="bg-white border shadow-lg rounded-lg w-[650px] p-4">
                    {/* --- Top Images Row --- */}
                    <div className="flex justify-between items-center mb-4">
                        <img src="/LeftLogo.png" alt="Logo1" className="h-20 w-[100px]" />
                        <div className="centerwrap flex flex-col">
                            <h1 className="text-center text-red-700 font-bold text-5xl mb-2">
                                बिहार ग्रामीण बैंक
                            </h1>
                            <h3 className="text-center text-red-500 font-bold text-md">
                                ग्रामीण विकास हमारी प्रतिबद्धता
                            </h3>
                            <h4 className="text-center text-red-500 font-bold text-sm w-80">
                                Address: Shree Vishnu Commercial Complex, Asochak, Patna
                            </h4>
                        </div>
                        <img src="/RightLogo.jpg" alt="Logo3" className="h-20 w-[100px]" />
                    </div>

                    {/* --- Details --- */}
                    <div className="space-y-1 text-md">
                        <p><strong>Customer Name:</strong> {printUser.name}</p>
                        <p><strong>Account No:</strong> {printUser.accountNo}</p>
                        <p><strong>Mobile No:</strong> {printUser.mobile}</p>
                        <p><strong>Aadhar No:</strong> {printUser.aadhar}</p>
                        {/* ✅ Fix 3: use printUser instead of user */}
                        <p><strong>IFSC Code:</strong> {printUser.ifsc}</p>
                        <p><strong>Branch:</strong> {printUser.branch}</p>
                    </div>
                </div>

                <button
                    onClick={handlePrint}
                    className="btn btn-gold mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Print Card
                </button>
            </div>
    );
}