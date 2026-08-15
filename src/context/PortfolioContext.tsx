import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ProfileData, SkillCategory, ProjectItem, CertificationItem, AchievementItem } from '../types';
import { initialProfileData } from '../data/profile';
import { initialSkillsData } from '../data/skills';
import { initialProjectsData } from '../data/projects';
import { initialCertificationsData } from '../data/certifications';
import { initialAchievementsData } from '../data/achievements';

interface PortfolioContextType {
  profile: ProfileData;
  skills: SkillCategory[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  updateProfile: (data: Partial<ProfileData>) => void;
  updateSkills: (skills: SkillCategory[]) => void;
  updateProjects: (projects: ProjectItem[]) => void;
  updateCertifications: (certs: CertificationItem[]) => void;
  updateAchievements: (achievements: AchievementItem[]) => void;
  resetToDefaults: () => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isCommandPaletteOpen: boolean;
  setIsCommandPaletteOpen: (open: boolean) => void;
  audioEnabled: boolean;
  setAudioEnabled: (enabled: boolean) => void;
  matrixMode: boolean;
  setMatrixMode: (enabled: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('dixit_portfolio_profile');
    return saved ? JSON.parse(saved) : initialProfileData;
  });

  const [skills, setSkills] = useState<SkillCategory[]>(() => {
    const saved = localStorage.getItem('dixit_portfolio_skills');
    return saved ? JSON.parse(saved) : initialSkillsData;
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    const saved = localStorage.getItem('dixit_portfolio_projects');
    return saved ? JSON.parse(saved) : initialProjectsData;
  });

  const [certifications, setCertifications] = useState<CertificationItem[]>(() => {
    const saved = localStorage.getItem('dixit_portfolio_certifications');
    return saved ? JSON.parse(saved) : initialCertificationsData;
  });

  const [achievements, setAchievements] = useState<AchievementItem[]>(() => {
    const saved = localStorage.getItem('dixit_portfolio_achievements');
    return saved ? JSON.parse(saved) : initialAchievementsData;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [matrixMode, setMatrixMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('dixit_portfolio_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('dixit_portfolio_skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('dixit_portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('dixit_portfolio_certifications', JSON.stringify(certifications));
  }, [certifications]);

  useEffect(() => {
    localStorage.setItem('dixit_portfolio_achievements', JSON.stringify(achievements));
  }, [achievements]);

  const updateProfile = (data: Partial<ProfileData>) => {
    setProfile(prev => ({ ...prev, ...data }));
  };

  const updateSkills = (newSkills: SkillCategory[]) => {
    setSkills(newSkills);
  };

  const updateProjects = (newProjects: ProjectItem[]) => {
    setProjects(newProjects);
  };

  const updateCertifications = (newCerts: CertificationItem[]) => {
    setCertifications(newCerts);
  };

  const updateAchievements = (newAch: AchievementItem[]) => {
    setAchievements(newAch);
  };

  const resetToDefaults = () => {
    setProfile(initialProfileData);
    setSkills(initialSkillsData);
    setProjects(initialProjectsData);
    setCertifications(initialCertificationsData);
    setAchievements(initialAchievementsData);
    localStorage.removeItem('dixit_portfolio_profile');
    localStorage.removeItem('dixit_portfolio_skills');
    localStorage.removeItem('dixit_portfolio_projects');
    localStorage.removeItem('dixit_portfolio_certifications');
    localStorage.removeItem('dixit_portfolio_achievements');
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        skills,
        projects,
        certifications,
        achievements,
        updateProfile,
        updateSkills,
        updateProjects,
        updateCertifications,
        updateAchievements,
        resetToDefaults,
        isAdminOpen,
        setIsAdminOpen,
        isCommandPaletteOpen,
        setIsCommandPaletteOpen,
        audioEnabled,
        setAudioEnabled,
        matrixMode,
        setMatrixMode
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
