import union_bank_logo from "../assets/union_bank_logo.png";
import AndhraLogo from "../assets/andhra_bank.webp";
import CorporationLogo from "../assets/Corporation_Bank_Logo.svg";

const handlePrint = () => window.print();
export default function UnionCard({ printUser }) {
    return (<div className="flex flex-col items-center bg-gray-100 min-h-screen py-10 print:w-full print:h-full print:m-0 print:p-0 card card-gold">
                    <h2 className="text-2xl font-bold mb-6">Generated User Card</h2>
    
                    <div className="bg-white border shadow-lg rounded-lg w-[650px] p-4">
    
                        {/* --- Row 1: Union Bank Logo (centered) --- */}
                        <div className="flex justify-center items-center ">
                            {/* <img src="AccountCard\src\assets\union_bank_logo.png" alt="Union Bank of India" className="h-20 w-auto" /> */}
                            <img src={union_bank_logo} alt="Union Bank of India" className="h-20 w-xl" />
                            
                        </div>
    
                        {/* --- Row 3: Andhra Bank + Corporation Bank logos side by side --- */}
                        <div className="flex justify-evenly items-center gap-1 py-1  mb-1">
                            <div className="flex flex-col items-center gap-1">
                                <img src={AndhraLogo} alt="Andhra Bank" className="h-12 w-56" />
                                {/* <span className="text-xs text-gray-500 font-medium">Andhra Bank</span> */}
                            </div>
                           
                            <div className="flex flex-col items-center gap-1">
                                <img src={CorporationLogo} alt="Corporation Bank" className="h-12 w-auto" />
                                {/* <span className="text-xs text-gray-500 font-medium">Corporation Bank</span> */}
                            </div>
                        </div>
    
                        {/* --- Details --- */}
                        <div className="space-y-1 text-md">
                            <p><strong>Customer Name:</strong> {printUser.name}</p>
                            <p><strong>Account No:</strong> {printUser.accountNo}</p>
                            <p><strong>Mobile No:</strong> {printUser.mobile}</p>
                            <p><strong>Aadhar No:</strong> {printUser.aadhar}</p>
                            <p><strong>IFSC Code:</strong> {printUser.ifsc}</p>
                            <p><strong>Branch:</strong> {printUser.branch}</p>
                            <p><strong>CSP:</strong> Jurawanpur </p>
                        </div>
                    </div>
    
                    <button
                        onClick={handlePrint}
                        className="mt-6 px-6 py-3 bg-[#7B2D8B] text-white rounded-lg hover:bg-[#6a2078]"
                    >
                        Print Card
                    </button>
                </div>
    );
}