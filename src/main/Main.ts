export interface CourseExploerCardProps {
  foreign_key: string;
  key: string;
  name: string;
  duration: string;
  mode: string;
  eligibility: string;
  exam: string;
  fees: string;
  colleges: string;
  state: string;
  onApply?: () => void;
}

export interface ICoursesData {
  data: CourseExploerCardProps | null;
}

export interface IExploreCard {
  id: number;
  image: string;
  name: string;
  dis: string;
  courses: string[];
  bottom: string;
}

export type CollegeCardProps = {
  name: string;
  location: string;
  established: number;
  affiliation: string[] | any;
  mode: string;
  rating: number;
  imageurl: string;
};

export interface ICollegeData {
  data: CollegeCardProps;
}

export interface BlogCardProps {
  date: string;
  imageUrl: string;
  description: string;
}

export interface IBlogData {
  data: BlogCardProps;
}

export interface CritiriaData {
  title: string;
  duration: string;
  eligibility: string[];
  universities: string[];
}


// src/types/Course.ts
export interface Course {
  category: string;
  colleges: string;
  courseid: string;
  duration: string;
  eligibility: string;
  exam: string;
  fees: string;
  mode: string;
  level: string;
  name: string;
  nri: string;
  state: string;
  affiliation: string;
  location: string;
}

export interface CourseState {
  courses: Course[];
}

export type Action = { payload: CourseState };
