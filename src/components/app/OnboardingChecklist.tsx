"use client";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  cta: string;
  completed: boolean;
  onClick: () => void;
}

interface OnboardingChecklistProps {
  items: ChecklistItem[];
}

export default function OnboardingChecklist({ items }: OnboardingChecklistProps) {
  const completedCount = items.filter((item) => item.completed).length;
  const totalCount = items.length;

  return (
    <div className="onboarding-checklist">
      <div className="checklist-header">
        <h2>Before you start</h2>
        <span className="checklist-progress">
          {completedCount}/{totalCount} complete
        </span>
      </div>

      <div className="checklist-items">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`checklist-item ${item.completed ? "completed" : ""}`}
          >
            <div className="checklist-item-number">
              {item.completed ? "✓" : index + 1}
            </div>
            <div className="checklist-item-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {!item.completed && (
                <button className="btn btn-secondary btn-sm" onClick={item.onClick}>
                  {item.cta}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

