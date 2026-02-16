import React from 'react'
import { useState } from 'react'

function AddFriendModal({ onAdd, onCancel }) {

  const [email, setEmail] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <h2 className="text-lg font-semibold mb-4">Add Friend</h2>

        <input
          type="email"
          placeholder="Enter email"
          className="input input-bordered w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            className="btn btn-ghost"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="btn btn-primary"
            onClick={() => onAdd(email)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddFriendModal
