"use client";

import { useState } from "react";

interface ICPSetupDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { description: string; profiles: string[] }) => void;
}

const icpOptions = [
  "B2B SaaS Founders",
  "VP of Sales",
  "VP of Marketing",
  "VP of Revenue",
  "Chief Revenue Officer (CRO)",
  "Head of Sales",
  "Sales Directors",
  "Marketing Directors",
  "Product Managers",
  "HR Leaders / CHRO",
  "CFO / Finance Leaders",
  "CTO / Engineering Leaders",
  "Agency Owners",
  "Consultants / Coaches",
  "Solo Service Providers",
  "E-commerce Founders",
  "Healthcare Executives",
  "Real Estate Professionals",
  "Legal Professionals",
  "Other",
];

export default function ICPSetupDrawer({ isOpen, onClose, onSave }: ICPSetupDrawerProps) {
  const [selectedICPs, setSelectedICPs] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleICPToggle = (icp: string) => {
    setSelectedICPs((prev) =>
      prev.includes(icp) ? prev.filter((i) => i !== icp) : [...prev, icp]
    );
  };

  const handleSave = () => {
    if (selectedICPs.length > 0) {
      onSave({
        description: selectedICPs.join(", "),
        profiles: selectedICPs,
      });
      onClose();
    }
  };

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <div className="icp-drawer">
        <div className="drawer-header">
          <h2>Who do you want to talk to?</h2>
          <button className="drawer-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="drawer-content">
          <div className="drawer-field">
            <label>Select your ideal buyers (select all that apply)</label>
            <div className="icp-options-grid">
              {icpOptions.map((icp) => (
                <button
                  key={icp}
                  className={`icp-option ${selectedICPs.includes(icp) ? "selected" : ""}`}
                  onClick={() => handleICPToggle(icp)}
                >
                  {icp}
                </button>
              ))}
            </div>
            {selectedICPs.length > 0 && (
              <p className="icp-selection-count">
                {selectedICPs.length} {selectedICPs.length === 1 ? "option" : "options"} selected
              </p>
            )}
          </div>
        </div>

        <div className="drawer-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSave}
            disabled={selectedICPs.length === 0}
          >
            Create my feed
          </button>
        </div>
      </div>
    </>
  );
}

