/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
import React from 'react';

export interface Project {
  title: string;
  typeActivity: string;
  typeProject: string;
  teams: string[];
  description: string;
}

interface ProjectContextValue {
  project: Project;
  setProjects: React.Dispatch<React.SetStateAction<Project>>;
}

interface ChildrenProps {
  children: React.ReactChild | React.ReactChildren;
}

export const ProjectContext = React.createContext<ProjectContextValue>(
  {} as ProjectContextValue
);

export function ProjectProvider({ children }: ChildrenProps) {
  const [project, setProjects] = React.useState<Project>({
    title: '',
    typeActivity: '',
    typeProject: '',
    teams: [],
    description: '',
  });

  return (
    <ProjectContext.Provider value={{ project, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
}
