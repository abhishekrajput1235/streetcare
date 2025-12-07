import React from 'react';
import Section from '../components/Section';
import { CreditCard, Heart, Gift } from 'lucide-react';

const Donate = () => {
    return (
        <div className="pt-10">
            <Section className="bg-orange-50">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold mb-6">Your Contribution Saves Lives</h1>
                    <p className="text-xl text-gray-600">
                        Every rupee you donate goes directly towards the food, medicine, and shelter of a street animal in need.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { amount: '₹500', desc: 'Feeds 10 dogs for a day' },
                        { amount: '₹2,000', desc: 'Vaccinates 5 dogs against Rabies' },
                        { amount: '₹5,000', desc: 'Sponsors a minor surgery' }
                    ].map((plan, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-transparent hover:border-primary transition-colors cursor-pointer group">
                            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{plan.amount}</div>
                            <p className="text-gray-600 mb-6">{plan.desc}</p>
                            <button className="w-full border-2 border-primary text-primary font-bold py-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                                Donate {plan.amount}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row gap-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-bold mb-6">Bank Transfer Details</h2>
                        <div className="space-y-4 text-gray-700">
                            <p><span className="font-bold">Account Name:</span> StreetCare Foundation</p>
                            <p><span className="font-bold">Account Number:</span> 123456789012</p>
                            <p><span className="font-bold">Bank Name:</span> HDFC Bank</p>
                            <p><span className="font-bold">IFSC Code:</span> HDFC0001234</p>
                            <p><span className="font-bold">Branch:</span> Green Valley, City</p>
                        </div>
                        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                            * All donations are eligible for tax exemption under Section 80G.
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-12">
                        <div className="w-64 h-64 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-gray-500 font-bold">QR Code Placeholder</span>
                        </div>
                        <p className="font-bold text-gray-800">Scan to Pay via UPI</p>
                        <p className="text-gray-500 text-sm">streetcare@upi</p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Donate;
