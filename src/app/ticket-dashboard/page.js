'use client';

import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

export default function CreateTicket() {
  const [formData, setFormData] = useState({
    receiptNo: 'JKT-DRV-003254',
    date: '',
    driverName: '',
    route: '',
    amount: '',
    paymentMethod: 'Cash',
    agentName: '',
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ticket Submitted:', formData);
    // Submit to backend here
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Welcome Ticketer</h2>
          <p className="text-sm text-gray-600">Jimoh Damilola</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-black text-white text-sm px-3 py-1 rounded-full">Profile</button>
          <button className="bg-red-600 text-white text-sm px-3 py-1 rounded-full">Logout</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["Create Ticket", "Tickets", "Create Ticket", "Create Ticket"].map((tab, idx) => (
          <button key={idx} className="bg-fuchsia-600 text-white px-4 py-1 md:px-2 rounded text-sm">{tab}</button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="receiptNo"
          value={formData.receiptNo}
          disabled
          className="w-full text-gray-400 border px-4 py-2 rounded-md pr-10"
        />

        <div className="relative">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full text-gray-400 border px-4 py-2 rounded-md pr-10"
          />
          <FaCalendarAlt className="absolute right-4 top-3 text-gray-400" />
        </div>

        <button
          type="button"
          onClick={() => alert('Scanning ID... (simulated)')}
          className="bg-black text-white px-4 py-1 rounded text-sm"
        >
          Scan ID
        </button>

        <input
          type="text"
          name="driverName"
          placeholder="Driver's name"
          value={formData.driverName}
          onChange={handleChange}
          className="w-full text-gray-400 border px-4 py-2 rounded-md pr-10"
        />

        <input
          type="text"
          name="route"
          placeholder="Route"
          value={formData.route}
          onChange={handleChange}
          className="w-full text-gray-400 border px-4 py-2 rounded-md pr-10"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full text-gray-400 border px-4 py-2 rounded-md pr-10"
        />

        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full text-gray-400 border px-4 py-2 rounded-md pr-10"
        >
          <option value="Cash">Cash</option>
          <option value="POS">POS</option>
          <option value="Transfer">Transfer</option>
        </select>

        <input
          type="text"
          name="agentName"
          placeholder="Agent Name"
          value={formData.agentName}
          onChange={handleChange}
          className="w-full text-gray-400 border px-4 py-2 rounded-md pr-10"
        />

        <div className="flex gap-4 pt-2">
          <button
            type="button"
            onClick={() => setShowPreview(true)}
            className="bg-black text-white px-6 py-2 rounded"
          >
            Preview
          </button>
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded"
          >
            Create Ticket
          </button>
        </div>
      </form>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-bold mb-4">Ticket Preview</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Receipt No:</strong> {formData.receiptNo}</p>
              <p><strong>Date:</strong> {formData.date}</p>
              <p><strong>Driver's Name:</strong> {formData.driverName}</p>
              <p><strong>Route:</strong> {formData.route}</p>
              <p><strong>Amount:</strong> ₦{formData.amount}</p>
              <p><strong>Payment:</strong> {formData.paymentMethod}</p>
              <p><strong>Agent:</strong> {formData.agentName}</p>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowPreview(false)}
                className="text-sm px-4 py-2 border rounded"
              >
                Close
              </button>
              <button
                className="text-sm bg-purple-700 text-white px-4 py-2 rounded"
              >
                Confirm & Print
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
