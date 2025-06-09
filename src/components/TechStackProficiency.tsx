import React from 'react';
import content from '../content';

interface TechStackItem {
  name: string;
  level: number;
}

interface TechStackProficiencyProps {
  techStack: TechStackItem[];
  currentSkills: { name: string }[];
}

const TechStackProficiency: React.FC<TechStackProficiencyProps> = ({ techStack, currentSkills }) => (
  <div className="mt-12 max-w-2xl mx-auto">
    <h3 className="text-2xl font-semibold mb-6 text-center">{content.skills.proficiencyTitle}</h3>
    <div className="space-y-5">
      {techStack
        .filter(stack => currentSkills.some(skill => skill.name === stack.name))
        .map(({ name, level }) => (
          <div key={name} className="flex flex-col gap-1">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700 dark:text-gray-200">{name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-3 rounded-full bg-blue-600 transition-all duration-700"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default TechStackProficiency; 