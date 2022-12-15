/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable comma-dangle */
import axios from 'axios';
import React from 'react';
import { User } from './authContext';

export interface Project {
  id: string;
  title: string;
  typeActivity: string;
  typeProject: string;
  teams: string[];
  date: Date | null;
  description: string;
}

export interface Card {
  _id: string;
  title: string;
  date: string;
  activity: string;
  project: string;
  description: string;
  status: string;
  userId: string;
}

export interface Column {
  waiting: {
    state: Project[];
    setState: React.Dispatch<React.SetStateAction<Project[]>>;
  };
  ongoing: {
    state: Project[];
    setState: React.Dispatch<React.SetStateAction<Project[]>>;
  };
  pendency: {
    state: Project[];
    setState: React.Dispatch<React.SetStateAction<Project[]>>;
  };
  finished: {
    state: Project[];
    setState: React.Dispatch<React.SetStateAction<Project[]>>;
  };
  other: {
    state: Project[];
    setState: React.Dispatch<React.SetStateAction<Project[]>>;
  };
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
  Columns: Column;
  isPersonal: boolean;
  setIsPersonal: React.Dispatch<React.SetStateAction<boolean>>;
  getAllCards: () => Promise<void>;
}

interface ChildrenProps {
  children: React.ReactChild | React.ReactChildren;
}

export const ProjectContext = React.createContext<ProjectContextValue>(
  {} as ProjectContextValue
);

const cardURL = 'https://kanban-back2.azurewebsites.net/card/';
const proCardURL = 'https://kanban-back2.azurewebsites.net/card/pro/';

export function ProjectProvider({ children }: ChildrenProps) {
  const [waiting, setWaiting] = React.useState<Project[]>([]);
  const [ongoing, setOngoing] = React.useState<Project[]>([]);
  const [pendency, setPendency] = React.useState<Project[]>([]);
  const [finished, setFinished] = React.useState<Project[]>([]);
  const [other, setOther] = React.useState<Project[]>([]);
  const [isPersonal, setIsPersonal] = React.useState(false);

  const [project, setProjects] = React.useState<Project>({
    id: '',
    title: '',
    typeActivity: '',
    typeProject: '',
    teams: [],
    description: '',
    date: new Date(),
  });

  const Columns: Column = {
    waiting: {
      state: waiting,
      setState: setWaiting,
    },
    ongoing: {
      state: ongoing,
      setState: setOngoing,
    },
    pendency: {
      state: pendency,
      setState: setPendency,
    },
    finished: {
      state: finished,
      setState: setFinished,
    },
    other: {
      state: other,
      setState: setOther,
    },
  };

  async function getAllCards() {
    const storagedUser = localStorage.getItem('@user');

    if (storagedUser) {
      const user: User = JSON.parse(storagedUser);
      const response = await axios.get(isPersonal ? `${cardURL}${user._id}` : `${proCardURL}${user._id}`);

      const cardsArray:Project[] = response.data.cards.map((card: Card) => {
        const newcard: Project = {
          title: card.title,
          typeProject: card.project,
          description: card.description,
          typeActivity: card.activity,
          id: card._id,
          date: new Date(card.date),
          teams: [],
        };

        return newcard;
      });

      setWaiting(cardsArray);
    }
  }

  React.useEffect(() => {
    getAllCards();
  }, [isPersonal]);

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
        Columns,
        isPersonal,
        setIsPersonal,
        getAllCards
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
