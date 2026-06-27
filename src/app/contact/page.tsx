"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    eventType: "Wedding",
    guestCount: "",
    eventCity: "",
    tentType: "Not sure",
    tentSize: "Not sure",
    surfaceType: "Grass",
    addons: [] as string[],
    notes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, addons: [...prev.addons, value] };
      } else {
        return { ...prev, addons: prev.addons.filter((item) => item !== value) };
      }
    });
  };

  const nextStep = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.eventDate) {
      setError("Please fill in Name, Phone, Email, and Event Date to proceed.");
      return;
    }
    setError("");
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const submitData = new FormData();
    // Use the Web3Forms Access Key from environment variables
    submitData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY || "");
    submitData.append("subject", "New Tent Rental Quote Request");
    submitData.append("from_name", "Above All Tents Quote System");
    
    // Map data
    submitData.append("Name", formData.name);
    submitData.append("Phone", formData.phone);
    submitData.append("Email", formData.email);
    submitData.append("Event Date", formData.eventDate);
    submitData.append("Event Type", formData.eventType);
    submitData.append("Guest Count", formData.guestCount);
    submitData.append("Event City/Venue", formData.eventCity);
    
    submitData.append("Tent Type Needed", formData.tentType);
    submitData.append("Tent Size", formData.tentSize);
    submitData.append("Ground Surface", formData.surfaceType);
    
    if (formData.addons.length > 0) {
      submitData.append("Requested Add-ons", formData.addons.join(", "));
    }
    if (formData.notes) {
      submitData.append("Additional Notes", formData.notes);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-24 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Quote Request Sent!</h2>
            <p className="text-lg text-slate-600 font-light mb-8">
              Thank you, {formData.name.split(' ')[0]}! We have received your event details. Our team will review your requirements and get back to you with a personalized quote shortly.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="inline-flex px-8 py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-amber-500 transition-colors"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3 block">
              Free Estimate
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Request a Quote
            </h1>
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
              Tell us about your upcoming event. Fill out the details below, and we’ll help you determine the perfect setup and provide an accurate cost.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-12">
            
            {/* Progress Bar */}
            <div className="flex items-center justify-center mb-10">
              <div className="flex items-center justify-center space-x-2">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${step >= 1 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'}`}>1</div>
                <span className={`text-sm font-bold uppercase tracking-widest ${step >= 1 ? 'text-slate-900' : 'text-slate-400'}`}>Event Info</span>
              </div>
              <div className={`w-16 h-1 mx-4 rounded-full ${step === 2 ? 'bg-slate-900' : 'bg-slate-200'}`}></div>
              <div className="flex items-center justify-center space-x-2">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${step === 2 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
                <span className={`text-sm font-bold uppercase tracking-widest ${step === 2 ? 'text-slate-900' : 'text-slate-400'}`}>Setup Details</span>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-8 text-sm font-medium border border-red-100 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* STEP 1 */}
              <div className={step === 1 ? 'block animate-in fade-in slide-in-from-bottom-4 duration-500' : 'hidden'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-900 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(403) 555-0123"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                    />
                  </div>

                  {/* Date & Event Type */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Event Date *</label>
                    <input 
                      type="date" 
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Event Type *</label>
                    <select 
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none appearance-none"
                    >
                      <option value="Wedding">Wedding</option>
                      <option value="Backyard Party">Backyard Party</option>
                      <option value="Festival">Festival</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Guests & Location */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Estimated Guest Count</label>
                    <input 
                      type="number" 
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      placeholder="e.g. 150"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Event City / Venue</label>
                    <input 
                      type="text" 
                      name="eventCity"
                      value={formData.eventCity}
                      onChange={handleInputChange}
                      placeholder="Calgary, AB"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="mt-10 flex justify-end">
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-slate-800 transition-all w-full md:w-auto justify-center"
                  >
                    Continue to Setup
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* STEP 2 */}
              <div className={step === 2 ? 'block animate-in fade-in slide-in-from-bottom-4 duration-500' : 'hidden'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Tent Preferences */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Preferred Tent Type</label>
                    <select 
                      name="tentType"
                      value={formData.tentType}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none appearance-none"
                    >
                      <option value="Not sure">Not sure yet (Help me decide)</option>
                      <option value="Frame Tent">Frame Tent</option>
                      <option value="Pole Tent">Pole Tent</option>
                      <option value="High Peak Tent">High Peak Tent</option>
                      <option value="Clear Roof Tent">Clear Roof Tent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Preferred Tent Size</label>
                    <select 
                      name="tentSize"
                      value={formData.tentSize}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none appearance-none"
                    >
                      <option value="Not sure">Not sure (Calculate based on guests)</option>
                      <option value="10x20">10x20</option>
                      <option value="20x20">20x20</option>
                      <option value="20x40">20x40</option>
                      <option value="30x60">30x60</option>
                      <option value="Custom Size">Custom Size</option>
                    </select>
                  </div>

                  {/* Surface */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-900 mb-4">Ground Surface Type</label>
                    <div className="flex flex-wrap gap-4">
                      {["Grass", "Concrete", "Asphalt", "Wood Deck", "Dirt/Gravel", "Other"].map((surface) => (
                        <label key={surface} className={`cursor-pointer px-5 py-3 rounded-full border text-sm font-bold transition-all ${
                          formData.surfaceType === surface 
                            ? 'bg-amber-100 border-amber-500 text-amber-900' 
                            : 'bg-white border-slate-200 text-slate-600 hover:border-amber-300'
                        }`}>
                          <input 
                            type="radio" 
                            name="surfaceType" 
                            value={surface} 
                            checked={formData.surfaceType === surface}
                            onChange={handleInputChange}
                            className="hidden"
                          />
                          {surface}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Add-ons Checkboxes */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-900 mb-4">Equipment & Add-ons (Select all that apply)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {['Tables', 'Chairs', 'Lighting', 'Dance Floor', 'Flooring', 'Heaters', 'Sidewalls', 'Linens'].map((addon) => (
                         <label key={addon} className="flex items-center space-x-3 cursor-pointer group">
                           <div className="relative flex items-center justify-center">
                             <input 
                               type="checkbox" 
                               value={addon}
                               checked={formData.addons.includes(addon)}
                               onChange={handleCheckboxChange}
                               className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded checked:bg-amber-500 checked:border-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 cursor-pointer transition-all"
                             />
                             <svg className="absolute w-3 h-3 text-white pointer-events-none hidden peer-checked:block" viewBox="0 0 17 12" fill="none" stroke="currentColor">
                                <path d="M1 6L6 11L16 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                             </svg>
                           </div>
                           <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">{addon}</span>
                         </label>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-slate-900 mb-2">Additional Notes or Layout Needs</label>
                    <textarea 
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Tell us any specifics, like access restrictions, gate sizes, or timeline requirements..."
                      rows={4}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="inline-flex items-center px-6 py-4 bg-transparent text-slate-500 font-bold text-sm uppercase tracking-widest hover:text-slate-900 transition-all"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Event Info
                  </button>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-white font-bold text-sm uppercase tracking-widest rounded-full transition-all w-full md:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-amber-600'}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}