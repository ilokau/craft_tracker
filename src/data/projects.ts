// src/data/projects.ts
export type Project = {
  id: number
  name: string
  description: string
  currentStep: string
  imageUrl?: string

}

export const projects: Project[] = [
  {
    id: 1,
    name: "Amigurumi cat",
    description: "Simple small cat amigurumi.",
    currentStep: "Round 5: Sc 4, inc., sc 12, inc. sc8 [28]",
    imageUrl: "/assets/images/amigurumi-cat.png",
  },
  {
    id: 2,
    name: "Winter Scarf",
    description: "Long cozy scarf.",
    currentStep: "Round 10: Sc 2, inc., sc 16, inc., sc 8 [32]",
    
  },
]