export type TextBlock = { type: "textblock"; content: string };
export type ImageBlock = { type: "image"; src: string; alt: string };
export type TwoImagesBlock = { type: "twoImages"; images: { src: string; alt: string }[] };
export type VideoBlock = { type: "video"; src: string; poster?: string };
export type CompareFourImagesBlock = { type: "compareFourImages"; images: { src: string; alt: string }[] };
export type CompareFiveImagesBlock = { type: "compareFiveImages"; images: { src: string; alt: string }[] };
export type CompareSevenImagesBlock = { type: "compareSevenImages"; images: { src: string; alt: string }[] };

export type CaseStudyBlock = 
  | TextBlock 
  | ImageBlock 
  | TwoImagesBlock 
  | VideoBlock 
  | CompareFourImagesBlock 
  | CompareFiveImagesBlock 
  | CompareSevenImagesBlock;

export type CaseStudyProject = {
  title: string;
  image: { src: string; alt: string };
  projectLink?: string;
  content: CaseStudyBlock[];
};

export type CaseStudyData = {
  title?: string;
  projects?: CaseStudyProject[];
};