import { useState } from 'react';

export default function TabsExercise({ tabs = [{ label: 'Stories', content: 'Community stories appear here.' }, { label: 'Members', content: 'Meet community members here.' }] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return <section><div role="tablist" aria-label="Community sections">{tabs.map((tab, index) => <button key={tab.label} id={`tab-${index}`} type="button" role="tab" aria-selected={activeIndex === index} aria-controls={`panel-${index}`} onClick={() => setActiveIndex(index)}>{tab.label}</button>)}</div>{tabs.map((tab, index) => <div key={tab.label} id={`panel-${index}`} role="tabpanel" aria-labelledby={`tab-${index}`} hidden={activeIndex !== index} tabIndex={0}>{tab.content}</div>)}</section>;
}
