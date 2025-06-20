export interface User {
  id: string;
  name: string;
  email: string;
  licenseNumber?: string;
  applicationStatus: 'pending' | 'under-review' | 'approved' | 'rejected';
  nextExam?: {
    name: string;
    date: string;
    daysRemaining: number;
  };
  notifications: Notification[];
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  timestamp: string;
  read: boolean;
}

export interface NewsEvent {
  id: string;
  title: string;
  description: string;
  deadline: string;
  type: 'certification' | 'workshop' | 'exam' | 'event';
  isNew: boolean;
  registrationUrl?: string;
}

export interface RegistrationStep {
  id: number;
  title: string;
  completed: boolean;
  current: boolean;
}