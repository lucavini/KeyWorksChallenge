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
  waiting: Project[];
  setWaiting: React.Dispatch<React.SetStateAction<Project[]>>;
  ongoing: Project[];
  setOngoing: React.Dispatch<React.SetStateAction<Project[]>>;
  pendency: Project[];
  setPendency: React.Dispatch<React.SetStateAction<Project[]>>;
  finished: Project[];
  setFinished: React.Dispatch<React.SetStateAction<Project[]>>;
  other: Project[];
  setOther: React.Dispatch<React.SetStateAction<Project[]>>;
}

interface ChildrenProps {
  children: React.ReactChild | React.ReactChildren;
}

export const ProjectContext = React.createContext<ProjectContextValue>(
  {} as ProjectContextValue
);

export function ProjectProvider({ children }: ChildrenProps) {
  const [waiting, setWaiting] = React.useState<Project[]>([]);
  const [ongoing, setOngoing] = React.useState<Project[]>([]);
  const [pendency, setPendency] = React.useState<Project[]>([]);
  const [finished, setFinished] = React.useState<Project[]>([]);
  const [other, setOther] = React.useState<Project[]>([]);

  const [project, setProjects] = React.useState<Project>({
    title: '',
    typeActivity: '',
    typeProject: '',
    teams: [],
    description: '',
  });

  return (
    <ProjectContext.Provider
      value={{
        project,
        setProjects,
        waiting,
        setWaiting,
        ongoing,
        setOngoing,
        pendency,
        setPendency,
        finished,
        setFinished,
        other,
        setOther,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
