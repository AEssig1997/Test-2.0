"use client";

import { useState } from "react";

export default function Scenarios() {
  const [funding, setFunding] = useState("Fully Insured");

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-4 border rounded-xl space-y-4">
        <h2 className="font-medium">Controls</h2>

        <select
          className="border p-2 rounded"
          onChange={(e) => setFunding(e.target.value)}
        >
          <option>Fully Insured</option>
          <option>Level Funded</option>
          <option>Self Funded</option>
        </select>
      </div>

      <div className="bg-white p-4 border rounded-xl">
        <h2 className="font-medium mb-2">Output</h2>
        <p>Funding: {funding}</p>
        <p>Total Cost: $8.4M</p>
        <p>Employer Cost: $6.1M</p>
        <p>Risk: Medium</p>
      </div>
    </div>
  );
}
